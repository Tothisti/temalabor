import { useCallback, useState } from 'react'
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MyChartData, Months } from '../store';
import { Atom, useAtom } from 'jotai'

const CustomInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        fontWeight: 'bold',
        position: 'relative',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.backgroundcolor.main,
        width: '8rem',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        borderRadius: 0,
    },
}));


interface SettingCardProps {
    dataAtom: Atom<MyChartData>
}

function SettingCard({dataAtom} : SettingCardProps) {
    const [data] = useAtom(dataAtom);
    const [age, setAge] = useState<string>('');

    const handleChange = useCallback((event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    }, []);

    const renderMonths = () => {
        return (
            (Object.keys(Months) as Array<keyof typeof Months>).map((month => (
                <MenuItem
                    key={month.toString()}
                    value={month.toString()}
                >
                    {month.toString()}
                </MenuItem>
            )))
        );
    }
    
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            gap={7}
        >
            <Typography variant="h4">{data.title}</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select
                    displayEmpty
                    value={age}
                    input={<CustomInput />}
                    onChange={handleChange}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        '& .MuiSvgIcon-root': {
                            color: (theme) => theme.palette.backgroundcolor.main
                        },
                        borderRadius: 0
                    }}
                    renderValue={(selected : string) => {
                        if (selected.length === 0) {
                            return <em>Placeholder</em>;
                        }
                        return [selected];
                    }}
                >
                    {renderMonths()}
                </Select>
            </FormControl>
        </Stack>
    )
}

export default SettingCard;