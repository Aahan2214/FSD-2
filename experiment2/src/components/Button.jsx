import { Button, Stack, Typography, Paper } from '@mui/material';

export default function ButtonBasic() {
  return (
    <Paper variant="outlined" sx={{ p: 3, mt: 2, textAlign: 'center', bgcolor: '#fafafa' }}>
      <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>
        SELECT A PLATFORM
      </Typography>
      <Stack spacing={2}>
        <Button size="large" variant='contained' disableElevation>WhatsApp Business</Button>
        <Button size="large" variant='contained' color="secondary" disableElevation>Instagram Direct</Button>
        <Button size="large" variant='outlined' color="error">YouTube Channel</Button>
      </Stack>
    </Paper>
  )
}