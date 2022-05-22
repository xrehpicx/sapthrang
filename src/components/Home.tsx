/** @jsxImportSource @emotion/react */
import { Container, css, Typography } from "@mui/material";
import { Background } from "./background";

export function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      `}
    >
      <Background />
      <Typography
        variant="h1"
        color="text.primary"
        fontFamily={"'Montez', cursive"}
      >
        Sapthrang
      </Typography>
    </div>
  );
}
