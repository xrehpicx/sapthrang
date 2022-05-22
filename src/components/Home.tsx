/** @jsxImportSource @emotion/react */
import { css, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Background } from "./background";

export function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

const MTypography = motion(Typography);
function Header() {
  return (
    <header>
      <Background />
      <div
        css={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          height: 100vh;
          backdrop-filter: blur(1rem);
        `}
      >
        <MTypography
          variant="h1"
          color="text.primary"
          fontFamily={"'Montez', cursive"}
          initial={{
            opacity: 0,
            textShadow: `none`,
          }}
          animate={{
            opacity: 1,
            textShadow: `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
            0 0 42px #ffee00, 0 0 82px #fff700, 0 0 92px #ff0000,
            0 0 102px #ffd000`,
          }}
        >
          Sapthrang
          <Typography variant="body1" component={"p"}>
            {new Date().getFullYear()}
          </Typography>
        </MTypography>
      </div>
    </header>
  );
}
