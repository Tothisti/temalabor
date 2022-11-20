import { ResponsivePie } from '@nivo/pie'
import { Stack, Typography, Box } from '@mui/material'
import { MyChartData } from '../store'

const CenteredMetric = (e: any) => {
    return (
        <Typography
            className="piechartcenteredtext"
            x={e.centerX}
            y={e.centerY}
            textAnchor='middle'
            dominantBaseline="central"
            component='text'
            variant='caption'
        >75%</Typography>
    )
}

interface PieChartCardProps {
    chartData: MyChartData
}

function PieChartCard({chartData}: PieChartCardProps) {

    return (
        <Stack
            minHeight='350px'
            direction={{xs: 'column', sm: 'row'}}
            alignItems='center'
            justifyContent='space-around'
            sx={{
                p: 3,
                "&:nth-of-type(3n+1)" : {
                    backgroundColor: '&fff',
                    color: '#66ACE8',
                    "span": {color: '#637C8C'},
                    ".piechartcenteredtext": {fill: '#249CF9'},
                    "g path:nth-of-type(1)": {fill: '#BEDCFD', stroke: '#BEDCFD'},
                    "g path:nth-of-type(2)": {fill: '#249CF9', stroke: '#249CF9'}
                },
                "&:nth-of-type(3n+2)" : {
                    backgroundColor: '#F0EBE8',
                    color: '#66ACE8',
                    "span": {color: '#637C8C'},
                    ".piechartcenteredtext": {fill: '#CB765A'},
                    "g path:nth-of-type(1)": {fill: '#BEDCFD', stroke: '#BEDCFD'},
                    "g path:nth-of-type(2)": {fill: '#CB765A', stroke: '#CB765A'}
                },
                "&:nth-of-type(3n+0)" : {
                    backgroundColor: '#3A7295',
                    color: '#fff',
                    ".piechartcenteredtext": {fill: '#fff'},
                    "g path:nth-of-type(1)": {fill: '#BEDCFD', stroke: '#BEDCFD'},
                    "g path:nth-of-type(2)": {fill: '#FFFFFD', stroke: '#FFFFFD'}
                }
            }}
        >
            <Box height={{xs: '250px', sm: '300px'}} width='200px' sx={{py: 5}}>
                <ResponsivePie
                    data={chartData.data}
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    innerRadius={0.8}
                    activeOuterRadiusOffset={8}
                    borderWidth={2}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.2
                            ]
                        ]
                    }}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    isInteractive={false}
                    layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}
                />
            </Box>
            <Box maxWidth='600px' marginLeft={2}>
                <Typography variant='caption'textTransform='uppercase'>{chartData.title}</Typography>
                <Typography variant='body1' >{chartData.desc}</Typography>
            </Box>
        </Stack>
    )
}

export default PieChartCard;
