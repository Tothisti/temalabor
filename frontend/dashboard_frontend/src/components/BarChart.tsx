import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DatePickerButton from './DatePickerButton';
import { Stack } from '@mui/material';

const data = [
    {
        "month": "Jan",
        "value": 12,
        "valueColor": "#113F5B",
    },
    {
        "month": "Feb",
        "value": 24,
        "valueColor": "#113F5B",
    },
    {
        "month": "Mar",
        "value": 20,
        "valueColor": "#113F5B",
    },
    {
        "month": "Apr",
        "value": 10,
        "valueColor": "#113F5B",
    },
    {
        "month": "May",
        "value": 30,
        "valueColor": "#113F5B",
    },
    {
        "month": "Jun",
        "value": 10,
        "valueColor": "#113F5B",
    },
    {
        "month": "Jul",
        "value": 40,
        "valueColor": "#113F5B",
    },
    {
        "month": "Aug",
        "value": 34,
        "valueColor": "#113F5B",
    },
    {
        "month": "Sep",
        "value": 22,
        "valueColor": "#113F5B",
    },
    {
        "month": "Oct",
        "value": 15,
        "valueColor": "#113F5B",
    },
    {
        "month": "Nov",
        "value": 20,
        "valueColor": "#113F5B",
    },
    {
        "month": "Dec",
        "value": 80,
        "valueColor": "#113F5B"
    }
]

function BarChart() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const bottomAxisFontSize = matches ? 18 : 12;
    const padding = 0.4;
    return (
        <Box sx={{px: 3}}>
            <Box sx={{ height: { xs: '400px', sm: '600px' }, width: 1 }}>
                <ResponsiveBar
                    data={data}
                    indexBy="month"
                    margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
                    padding={padding}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={({ id, data }) => data.valueColor}
                    defs={[
                        {
                            id: 'barGradient',
                            type: 'linearGradient',
                            colors: [
                                { offset: 0, color: '#71B0DA' },
                                { offset: 100, color: '#113F5B' },
                            ],
                        },

                    ]}
                    fill={[
                        { match: { id: 'value' }, id: 'barGradient' },
                    ]}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 0,
                        tickPadding: 10,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 30
                    }}
                    axisLeft={null}
                    enableGridY={false}
                    enableLabel={false}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    theme={{
                        fontSize: bottomAxisFontSize,

                    }}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                />
            </Box>
            <Stack 
            direction="row"
            spacing={2}
            justifyContent='flex-end'
            alignItems='center'>
                <DatePickerButton />
                <DatePickerButton />
            </Stack>
        </Box>
    )
}

export default BarChart;