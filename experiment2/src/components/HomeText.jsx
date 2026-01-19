import { Box, TextField, Stack, Card, CardContent, Typography, Divider } from '@mui/material';

export default function HomeFields() {
    return (
        <Card sx={{ maxWidth: 400, mx: 'auto', mt: 4, borderRadius: 4, boxShadow: 6 }}>
            <CardContent>
                <Typography variant="h5" textAlign="center" gutterBottom fontWeight="bold">
                    USER ACCESS
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Stack spacing={2}>
                    <TextField label="Email" type="email" variant="filled" fullWidth />
                    <TextField label="Name" variant="filled" fullWidth />
                    <TextField label="Password" type="password" variant="filled" fullWidth />
                    <TextField type="date" variant="filled" fullWidth />
                </Stack>
            </CardContent>
        </Card>
    );
}