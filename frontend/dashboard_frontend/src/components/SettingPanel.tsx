import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import SettingCard from './SettingCard';
import Stack from '@mui/material/Stack';

function SettingPanel() {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            alignItems='center'
            justifyContent='space-between'
        >
            <Stack
                direction='column'
                spacing={1}
                alignItems='center'
                justifyContent='center'
                sx={{ flexGrow: 1 }}
            >
                <SettingCard />
                <SettingCard />
            </Stack>
            <IconButton aria-label="delete" size="medium">
                <AddIcon fontSize="inherit" />
            </IconButton>
        </Stack>
    );
}

export default SettingPanel;