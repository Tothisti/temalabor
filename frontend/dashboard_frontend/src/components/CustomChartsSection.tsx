import Stack from '@mui/material/Stack'
import PieChartCard from './PieChartCard';
import { useAtom } from "jotai"
import { MyPieChartDataAtom } from '../store'
import { MyChartData } from '../store'

function AtomMapFilterToComponentList(dataAtoms : MyChartData[]) {
    return dataAtoms
    .filter((item) => item.isSelected)
    .map((item, i) => {
        return <PieChartCard key={i} chartData={item} />
    })
}

function CustomChartsSection() {
    const [myPieChartData] = useAtom(MyPieChartDataAtom);
    const pieChartCardList = AtomMapFilterToComponentList(myPieChartData);

    return (
        <Stack>
            {pieChartCardList}
        </Stack>
    );
}

export default CustomChartsSection;