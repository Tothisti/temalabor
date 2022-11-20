import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Popover from '@mui/material/Popover';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';


function AddButton() {

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'add-button-popover' : undefined;
    return (
        <>
            <IconButton
                aria-label="add"
                disableFocusRipple={true}
                disableRipple={true}
                size="medium"
                onClick={handleClick}
                sx={{
                    color: (theme) => theme.palette.backgroundcolor.main,
                    backgroundColor: (theme) => theme.palette.primary.main,
                }}>
                <AddIcon fontSize="inherit" />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    sx: {
                        borderRadius: '15px',
                        height: '16rem',
                        width: '16rem',
                        border: '2px solid',
                        borderColor: (theme) => theme.palette.primary.light,
                       
                    }
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <IconButton
                        aria-label="add"
                        disableFocusRipple={true}
                        disableRipple={true}
                        size="small"
                        onClick={handleClose}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                </Box>
                <Stack
                    direction='column'
                    alignItems='center'
                    justifyContent='space-between'
                    sx={{ px: '2.3rem'}}
                    gap={2}
                >
                    <Stack
                        direction='row'
                        justifyContent="space-between"
                        alignItems='center'
                        sx={{width: 1, cursor: 'pointer'}}
                    >
                        <Typography variant='caption'>Sample 1</Typography>
                        <StarBorderIcon fontSize='medium' />
                    </Stack>
                    <Stack
                        direction='row'
                        justifyContent="space-between"
                        alignItems='center'
                        sx={{width: 1, cursor: 'pointer'}}
                    >
                        <Typography variant='caption'>Sample 2</Typography>
                        <StarBorderIcon fontSize='medium' />
                    </Stack>
                    <Stack
                        direction='row'
                        justifyContent="space-between"
                        alignItems='center'
                        sx={{width: 1, cursor: 'pointer'}}
                    >
                        <Typography variant='caption'>Sample 3</Typography>
                        <StarBorderIcon fontSize='medium' />
                    </Stack>
                </Stack>
            </Popover>
        </>
    );

}

export default AddButton;