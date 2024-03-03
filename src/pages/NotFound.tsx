import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

const NotFound = () => (
  <>
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 25 }
      }}
    >
        <Typography variant="h3" component="h3" color="text.secondary" textAlign={'center'}>
          Nothing Found Here
        </Typography>
    </Container>
  </>
);

export default NotFound;
