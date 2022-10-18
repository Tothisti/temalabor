import Typography from '@mui/material/Typography'
import BarChart from '../components/BarChart';
import ControlPanel from '../components/ControlPanel';
import CustomCharts from '../components/CustomCharts';

function Home() {
    return (
        <>
        <Typography variant='h1' mt='1rem'> Dashboard </Typography>
        <BarChart />
        <ControlPanel />
        <CustomCharts />
        </>
    )
}

export default Home;