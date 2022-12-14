import Stack from '@mui/material/Stack';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import {PrimitiveAtom, useAtom} from 'jotai'
import { MyChartData } from '../store';
import { useCallback } from 'react';

interface PopOverMenuItemProps {
    dataAtom: PrimitiveAtom<MyChartData>
}

function PopoverMenuItem({dataAtom}: PopOverMenuItemProps) {
    const [data, setData] = useAtom(dataAtom)
    const handleOnClick = useCallback(() => {
        setData((prev) => {
            return ({
                ...prev,
                isSelected: !prev.isSelected
            })
        })
    }, []);
    
    return (
        <Stack
            direction='row'
            justifyContent="space-between"
            alignItems='center'
            sx={{ width: 1, cursor: 'pointer' }}
            onClick={handleOnClick}
        >
            <Typography variant='caption'>{data.title}</Typography>
            {data.isSelected?<StarIcon fontSize='medium' color='primary'/> : <StarBorderIcon fontSize='medium' />}
        </Stack>
    )
}

export default PopoverMenuItem;