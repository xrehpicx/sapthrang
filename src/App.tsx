/** @jsxImportSource @emotion/react */
import { Container, Typography } from "@mui/material";
import { Background } from "./components/background";
// import { css, palette } from "@mui/system";

function App() {
  return (
    <Container maxWidth="sm">
      <Background />
      <Typography variant="subtitle2" color="text.secondary">
        My react template
      </Typography>
    </Container>
  );
}

export default App;
