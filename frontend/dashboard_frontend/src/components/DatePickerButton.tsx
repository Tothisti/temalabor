import { useState } from 'react';
import { useCallback } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import EventIcon from '@mui/icons-material/Event';
import { styled } from '@mui/material/styles';

const CalendarButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: '0.8rem',
    paddingBottom: '0.8rem',
    backgroundColor: theme.palette.neutral.main,
    color: theme.palette.neutral.contrastText,
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
    },
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
    },
}));

function DatePickerButton() {
    const [value, setValue] = useState<Dayjs | null>(dayjs());
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleOnChange = useCallback((newValue: any) => {
        setValue(newValue);
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CalendarButton
                variant="contained"
                onClick={handleClick}
                sx={{
                    backgroundColor: (theme) => {
                        return anchorEl === null ?
                            theme.palette.neutral.main :
                            theme.palette.primary.main
                    },
                    color: (theme) => {
                        return anchorEl === null ?
                            theme.palette.neutral.contrastText :
                            theme.palette.backgroundcolor.main
                    }
                }}>
                {value?.format('YYYY-MM-DD')}
                <EventIcon sx={{ ml: 1 }} />
            </CalendarButton>
            <Popover
                id='simple-popover'
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{
                    '& .MuiPopover-paper': {
                        borderRadius: '20px',
                        border: '2px solid',
                        borderColor: (theme) => theme.palette.primary.light
                    }
                }}
            >
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={value}
                    className='my-date-picker'
                    onAccept={handleClose}
                    onChange={handleOnChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Popover>
        </LocalizationProvider>
    );
}

export default DatePickerButton