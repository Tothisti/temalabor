import SettingCard from './SettingCard';
import Stack from '@mui/material/Stack';
import AddButton from './AddButton';
import { Box } from '@mui/system';

function SettingPanel() {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            alignItems='center'
            justifyContent='space-between'
            sx={{my: 6}}
        >
            <Stack
                direction='column'
                spacing={0.5}
                alignItems='center'
                justifyContent='center'
                sx={{ flexGrow: 1 }}
            >
                <SettingCard />
                <SettingCard />
            </Stack>

            <Box sx={{
                alignSelf: {xs: 'center', sm: 'flex-start'},
                pt: '1rem',
            }}>
                <AddButton />
            </Box>
        </Stack>
    );
}

export default SettingPanel;