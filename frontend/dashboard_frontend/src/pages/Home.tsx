import Typography from '@mui/material/Typography'
import BarChart from '../components/BarChart';
import ControlPanel from '../components/ControlPanel';
import CustomCharts from '../components/CustomCharts';
import DatePickerButton from '../components/DatePickerButton';

function Home() {
    return (
        <>
        <Typography variant='h1' mt='2rem'> Dashboard </Typography>
        <BarChart />
        <DatePickerButton />
        <ControlPanel />
        <CustomCharts />
        </>
    )
}

export default Home;