/** @jsxImportSource @emotion/react */
import { css, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Background } from "./background";
import { ReactComponent as AtriaLogo } from "../assets/atria_logo.svg";
import { ReactComponent as CcaLogo } from "../assets/cca_logo.svg";
// import CcaLogo from "../assets/cca_logo.png";

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
    <header
      css={css`
        position: relative;
        overflow: hidden;
      `}
    >
      <Background />
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6rem;
          & svg {
            width: 160px;
            /* height: 160px; */
            display: flex;
          }
        `}
      >
        <div>
          <AtriaLogo />
        </div>
        <div>
          <CcaLogo width="100%" height="100%" />
        </div>
      </div>
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
          fontFamily={"'Lavishly Yours', cursive"}
          //   fontFamily={"'Montez', cursive"}
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
