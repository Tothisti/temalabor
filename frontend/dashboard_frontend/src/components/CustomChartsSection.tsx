import Stack from '@mui/material/Stack'
import PieChartCard from './PieChartCard';
import { useAtom } from "jotai"
import { MyPieChartDataAtom } from '../store'

function CustomChartsSection() {
    const [myPieChartData] = useAtom(MyPieChartDataAtom);
    const pieChartCardList = myPieChartData
        .filter((item) => item.isSelected)
        .map((item, i) => {
            return <PieChartCard key={i} chartData={item} />
        })

    return (
        <Stack>
            {pieChartCardList}
        </Stack>
    );
}

export default CustomChartsSection;