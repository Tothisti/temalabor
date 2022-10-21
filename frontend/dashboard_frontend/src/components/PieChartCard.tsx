import { ResponsivePie } from '@nivo/pie'
import { Stack, Typography, Box } from '@mui/material'

const data = [
    {
        "id": "go",
        "label": "go",
        "value": 441,
        "color": "hsl(134, 70%, 50%)"
    },
    {
        "id": "erlang",
        "label": "erlang",
        "value": 151,
        "color": "hsl(235, 70%, 50%)"
    },
    {
        "id": "rust",
        "label": "rust",
        "value": 489,
        "color": "hsl(102, 70%, 50%)"
    },
    {
        "id": "hack",
        "label": "hack",
        "value": 69,
        "color": "hsl(292, 70%, 50%)"
    },
    {
        "id": "css",
        "label": "css",
        "value": 336,
        "color": "hsl(38, 70%, 50%)"
    }
];

const CenteredMetric = (e: any) => {
    return (
        <Typography
            x={e.centerX}
            y={e.centerY}
            textAnchor='middle'
            dominant-baseline="central"
            component='text'
            variant='h5'
        >72%</Typography>
    )
}
function PieChartCard() {
    return (
        <Stack
            height='300px'
            direction={{xs: 'column', sm: 'row'}}
            alignItems='center'
            justifyContent='space-around'
            border='1px solid black'
        >
            <Box height='200px' width='200px'>
                <ResponsivePie
                    data={data}
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
            <Box>
                <Typography variant='h5'>Sample title</Typography>
                <Typography variant='body1'>Lorem ipsum dolor sit ament.</Typography>
            </Box>
        </Stack>
    )
}

export default PieChartCard;
