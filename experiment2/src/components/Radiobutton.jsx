import { Radio, Box } from '@mui/material';

export default function RadioCircle() {
  return (
    <Box sx={{ mt: 2, textAlign: 'center' }}>
      <Radio color="primary" checked />
      <Radio color="secondary" />
      <Radio color="default" />
    </Box>
  );
}