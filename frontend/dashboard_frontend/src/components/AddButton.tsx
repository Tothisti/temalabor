import { useState } from 'react'
import { useCallback } from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Popover from '@mui/material/Popover';
import CloseIcon from '@mui/icons-material/Close';
import Box  from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataAtomsAtom } from '../store'
import { useAtom } from 'jotai'
import { PrimitiveAtom } from 'jotai'
import { MyChartData } from '../store'
import  PopoverMenuItem from './PopoverMenuitem'

function AtomMapToComponentList(dataAtoms : PrimitiveAtom<MyChartData>[]) {
    return dataAtoms.map((item, i) => <PopoverMenuItem key={i} dataAtom={item} />)
}

function AddButton() {
    const [dataAtoms] = useAtom(DataAtomsAtom)
    const popOverInnerList = AtomMapToComponentList(dataAtoms);
    
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

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
                id='add-button-popover'
                open={Boolean(anchorEl)}
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
                    sx={{ px: '2.3rem' }}
                    gap={2}
                >
                    {popOverInnerList}
                </Stack>
            </Popover>
        </>
    );

}

export default AddButton;