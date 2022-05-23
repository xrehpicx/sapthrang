/** @jsxImportSource @emotion/react */
import { css, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Background } from "./background";
import { ReactComponent as AtriaLogo } from "../assets/atria_logo.svg";
import { ReactComponent as CcaLogo } from "../assets/cca_logo.svg";
import { Link } from "react-router-dom";
// import CcaLogo from "../assets/cca_logo.png";
import Countdown, { CountdownRendererFn } from "react-countdown";

export function Home() {
  return (
    <div>
      <Header />
      <About />
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
          backdrop-filter: blur(0.4rem);
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
        <div
          css={css`
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
            position: absolute;
            bottom: 0;
            height: 100px;
          `}
        >
          <Typography variant="subtitle1" component={"a"} href="#about">
            about
          </Typography>
          <Typography variant="subtitle1" component={"a"} href="#theme">
            theme
          </Typography>
          <Typography variant="subtitle1" component={"a"} href="#events">
            events
          </Typography>
        </div>
        <Counter />
      </div>
    </header>
  );
}
const Completionist = () => <span>You are good to go!</span>;

const renderer: CountdownRendererFn = ({
  hours,
  minutes,
  seconds,
  completed,
  days,
}) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div>
        <Typography
          variant="h1"
          color={"text.primary"}
          fontFamily={"'Lavishly Yours', cursive"}
        >
          {days} days to go
        </Typography>
        {/* <Typography
          variant="h6"
          color={"text.primary"}
          // fontFamily={"'Lavishly Yours', cursive"}
        >
          and {hours}:{minutes}:{seconds} left
        </Typography> */}
      </div>
    );
  }
};

function Counter() {
  return (
    <div>
      <Countdown date={new Date("06/24/2022")} renderer={renderer} />
    </div>
  );
}

function About() {
  return (
    <div
      css={css`
        backdrop-filter: blur(0.6rem);
        padding: 1.6rem 3rem;
        max-width: 1200px;
        margin: 0 auto;
      `}
    >
      <Typography textAlign={"center"} mb={1} variant="h2" color="text.primary">
        About
      </Typography>
      <Typography color="text.secondary" textAlign={"justify"} mb={1}>
        Sapthrang is the annual inter-college cultural fest conducted by Atria
        Institute of Technology. This cultural extravaganza has been a part of
        the institution for many years now and it gives several students a
        chance to show their talents in the fields of music, dance, theatre,
        literature, art and fashion. It is mainly hosted by the Cultural
        Committee of Atria.
      </Typography>
      <Typography color="text.secondary" textAlign={"justify"} mb={1}>
        What sets Sapthrang apart from any other festival is its avant-garde
        approach to conventional performing arts and literature. Sapthrang
        aspires to be a multifaceted, splendid celebration of talents, offering
        unprecedented opportunities to participants. Every event has been
        carefully crafted to challenge the participants and ensnare the
        audience.
      </Typography>
      <Typography color="text.secondary" textAlign={"justify"} mb={1}>
        For all the people with the flair for acting, for all the people who
        aren’t afraid to flaunt their mad dancing skills and for all the people
        with a nightingale’s voice, Sapthrang is the perfect platform. This
        doesn’t leave behind the young Shakespeares, the enthusiastic debaters,
        the talented poets and knowledgeable quizzers, for everything is set for
        them as well.
      </Typography>
    </div>
  );
}
