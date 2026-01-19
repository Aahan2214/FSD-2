import { Container, Alert, AlertTitle, Stack } from "@mui/material";

const SimpleContainer = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        <Alert severity="info" variant="outlined">
          <AlertTitle>Project Info</AlertTitle>
          This project is a <strong>Single Page Application</strong> built with React.
        </Alert>
        <Alert severity="success" variant="outlined">
          <AlertTitle>UI Framework</AlertTitle>
          The UI components are styled using the <strong>Material UI framework</strong>.
        </Alert>
      </Stack>
    </Container>
  );
};

export default SimpleContainer;