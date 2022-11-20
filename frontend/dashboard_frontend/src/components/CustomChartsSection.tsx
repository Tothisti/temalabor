import Stack from '@mui/material/Stack'
import PieChartCard from './PieChartCard';

const data0 = [
    {
        "value": 25,
        "valueColor": "#BEDCFD"
    },
    {
        "value": 75,
        "valueColor": "#249CF9"
    },
    
   
];

const data1 = [
    {
        "value": 25,
        "valueColor": "#BEDCFD"
    },
    {
        "value": 75,
        "valueColor": "#CA775E"
    },
    
   
];

const data2 = [
    {
        "value": 25,
        "valueColor": "#BEDCFD"
    },
    {
        "value": 75,
        "valueColor": "#FFFFFD"
    },
    
   
];

function CustomChartsSection() {
    return (
        <Stack>
            <PieChartCard data={data0}/>
            <PieChartCard data={data1}/>
            <PieChartCard data={data2}/>
        </Stack>
    );
}

export default CustomChartsSection;