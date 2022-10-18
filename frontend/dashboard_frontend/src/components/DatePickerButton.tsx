import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

function DatePickerButton() {
    const [value, setValue] = useState<Dayjs | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

export default DatePickerButton