import { atom, PrimitiveAtom } from 'jotai';
import { splitAtom } from 'jotai/utils'
import { isTemplateExpression } from 'typescript';

interface PieData {
    value: number,
}

export enum Months {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}

export interface MyChartData {
    title: string,
    desc: string,
    isSelected: boolean,
    data: Array<PieData>
}

const initialData : MyChartData[] = [
    {
        title: 'Sample 1',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        isSelected: true,
        data: [
            {
                "value": 25,
            },
            {
                "value": 75,
            },
        ]
    },
    {
        title: 'Sample 2',
        desc: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        isSelected: true,
        data: [
            {
                "value": 25,
            },
            {
                "value": 75,
            },
        ]
    },
    {
        title: 'Sample 3',
        desc: 'when an unknown printer took a galley of type and scrambled ',
        isSelected: false,
        data: [
            {
                "value": 25,
            },
            {
                "value": 75,
            },
        ]
    },
]

export const MyPieChartDataAtom = atom(initialData)

export const DataAtomsAtom = splitAtom(MyPieChartDataAtom);

export const FilteredData = atom(
    (get) => get(MyPieChartDataAtom).filter((item) => item.isSelected)
)
    
export const FilteredDataAtomsAtom = splitAtom(FilteredData);



