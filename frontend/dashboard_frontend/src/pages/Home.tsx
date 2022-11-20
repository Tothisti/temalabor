import Typography from '@mui/material/Typography'
import BarChart from '../components/BarChart';
import ControlPanel from '../components/SettingPanel';
import CustomChartsSection from '../components/CustomChartsSection';
import {Provider} from 'jotai'

function Home() {
    return (
        <Provider>
            <Typography variant='h1' mt='2rem'> Dashboard </Typography>
            <BarChart />
            <ControlPanel />
            <CustomChartsSection />
        </Provider>
    )
}

export default Home;