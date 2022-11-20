import { ResponsivePie } from '@nivo/pie'
import { Stack, Typography, Box } from '@mui/material'

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
interface Data {
    value: number,
    valueColor: string
}

interface PieChartCardProps {
    data: Array<Data>
}

function PieChartCard({data}: PieChartCardProps) {

    return (
        <Stack
            minHeight='350px'
            direction={{xs: 'column', sm: 'row'}}
            alignItems='center'
            justifyContent='space-around'
            sx={{
                p: 3,
                "&:nth-child(3n+1)" : {
                    backgroundColor: '&fff',
                    color: '#66ACE8',
                    "span": {color: '#637C8C'},
                    ".piechartcenteredtext": {fill: '#249CF9'}
                },
                "&:nth-child(3n+2)" : {
                    backgroundColor: '#F0EBE8',
                    color: '#66ACE8',
                    "span": {color: '#637C8C'},
                    ".piechartcenteredtext": {fill: '#CB765A'}
                },
                "&:nth-child(3n+0)" : {
                    backgroundColor: '#3A7295',
                    color: '#fff',
                    ".piechartcenteredtext": {fill: '#fff'}
                }
            }}
        >
            <Box height={{xs: '250px', sm: '300px'}} width='200px' sx={{py: 5}}>
                <ResponsivePie
                    data={data}
                    colors={({ id, data }) => data.valueColor}
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
                <Typography variant='caption'textTransform='uppercase'>Sample title</Typography>
                <Typography variant='body1' >Lorem ipsum dolor sit ament.</Typography>
            </Box>
        </Stack>
    )
}

export default PieChartCard;
