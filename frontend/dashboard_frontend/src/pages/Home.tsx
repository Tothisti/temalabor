import Typography from '@mui/material/Typography'
import BarChart from '../components/BarChart';
import ControlPanel from '../components/SettingPanel';
import CustomChartsSection from '../components/CustomChartsSection';

function Home() {
    return (
        <>
            <Typography variant='h1' mt='2rem'> Dashboard </Typography>
            <BarChart />
            <ControlPanel />
            <CustomChartsSection />
        </>
    )
}

export default Home;