import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function SettingCard() {
    const [age, setAge] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            gap={7}
        >
            <Typography variant="h4">560 ea</Typography>
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
                    renderValue={(selected: any) => {
                        if (selected.length === 0) {
                            return <em>Placeholder</em>;
                        }
                        console.log(selected)
                        return [selected];
                    }}
                >
                    {Months.map((month => (
                        <MenuItem
                            key={month}
                            value={month}
                        >
                            {month}
                        </MenuItem>
                    )))}
                </Select>
            </FormControl>
        </Stack>
    )
}

export default SettingCard;