/** @jsxImportSource @emotion/react */
import {
  Button,
  css,
  IconButton,
  Link,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Background } from "./background";
import { ReactComponent as AtriaLogo } from "../assets/atria_logo.svg";
import { ReactComponent as CcaLogo } from "../assets/cca_logo.svg";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import Countdown, { CountdownRendererFn } from "react-countdown";
import { TextGlitch } from "./TextGlitch";
// import CcaLogo from "../assets/cca_logo.png";

export function Home() {
  const theme = useTheme();
  return (
    <div
      css={css`
        & > div {
          backdrop-filter: blur(0.6rem) brightness(0.6);
          padding: 1.6rem 3rem;
          max-width: 1200px;
          margin: 1rem auto;
          border-radius: 1rem;
          transition: box-shadow 100ms ease-in-out;
          @media only screen and (max-width: 600px) {
            margin: 0;
            padding: 1rem 2rem;
            border-radius: 0;
          }
          @media only screen and (min-width: 600px) {
            &:hover {
              box-shadow: 0 0 10px 6px ${theme.palette.primary.main};
            }
          }
          .MuiTypography-body1 {
            font-size: 1.2rem;
          }
        }
      `}
    >
      <Header />
      <br/>
      <br/>
      <About />
      <SapthrangTheme />
      <Footer />
    </div>
  );
}

const MTypography = motion(Typography);

function openFullscreen(elem: HTMLElement) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    // @ts-ignore
  } else if (elem.webkitRequestFullscreen) {
    // @ts-ignore
    elem.webkitRequestFullscreen();
    // @ts-ignore
  } else if (elem.msRequestFullscreen) {
    // @ts-ignore
    elem.msRequestFullscreen();
  }
}
export function Header({ hide }: { hide?: boolean }) {
  const mobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const shortcutHandler = (e: KeyboardEvent) => {
      // double click d
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        ref.current && openFullscreen(ref.current);
      }
    };

    window.addEventListener("keydown", shortcutHandler);

    return () => {
      window.removeEventListener("keydown", shortcutHandler);
    };
  }, []);

  return (
    <header
      ref={ref}
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
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6rem;
          ${hide ? "max-width: 600px;" : ""}

          & svg {
            width: ${mobile ? "140px" : "160px"};
            /* height: 160px; */
            display: flex;
            color: white;
            filter: brightness(500%) contrast(200%);
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
          backdrop-filter: blur(2px);
        `}
      >
        <MTypography
          variant="h1"
          color="text.primary"
          fontFamily={"'Lavishly Yours', cursive"}
          initial={{
            opacity: 0,
            textShadow: `none`,
          }}
          animate={{
            opacity: 1,
            textShadow: `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
            0 0 42px #bb00ff, 0 0 82px #00a2ff, 0 0 92px #c800ff,
            0 0 102px #00ffff`,
          }}
        >
          {hide ? "Coming Soon" : "Sapthrang"}
          {!hide && (
            <Typography
              variant="body1"
              fontSize={"2rem"}
              component={"p"}
              textAlign="center"
            >
              {new Date().getFullYear()}
            </Typography>
          )}
        </MTypography>

        {!hide && <Counter />}
      </div>
      {!hide && (
        <div
          css={css`
            width: 100%;
            margin-top: 1rem;
            position: absolute;
            bottom: 2.2rem;
            height: 100px;

            @media only screen and (max-width: 600px) {
              padding: 1rem;
              height: auto;
              position: fixed;
              margin: 0;
              z-index: 10;
              bottom: 0;
              background: linear-gradient(
                to top,
                ${theme.palette.background.default},
                rgba(0, 0, 0, 0)
              );
            }

            a {
              height: fit-content;
              /* padding: 0.6rem 1.2rem; */
              @media only screen and (max-width: 600px) {
                background: ${theme.palette.background.default};
              }
              @media only screen and (min-width: 600px) {
                &:hover {
                  background: ${theme.palette.background.default};
                  box-shadow: 0 0 8px 6px ${theme.palette.primary.main};
                }
              }
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              gap: 2rem;
              @media only screen and (max-width: 600px) {
                gap: 1rem;
              }
            `}
          >
            <Button
              sx={{ fontWeight: 800 }}
              size="large"
              variant="outlined"
              href="#about"
            >
              about
            </Button>
            <Button
              sx={{ fontWeight: 800 }}
              size="large"
              variant="outlined"
              href="#theme"
            >
              theme
            </Button>

            {/* <Button
            onMouseEnter={(e) => setHover(true)}
            onMouseLeave={(e) => setHover(false)}
            size="large"
            variant="outlined"
            href="/events"
            endIcon={
              <AnimatePresence>
                {hover && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    css={css`
                      overflow: hidden;
                      height: fit-content;
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <LaunchRoundedIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            }
          >
            events
          </Button> */}
          </div>
          <Typography
            mb="0.2rem"
            mt="0.4rem"
            variant="subtitle1"
            textAlign="center"
            css={css`
              @media only screen and (max-width: 600px) {
                display: none;
              }
            `}
          >
            <br/>
            <h3>Events</h3>
            <p>Note: The Events are out-dated. These need to be updated,once everything is decided</p>
          </Typography>
          <div
            css={css`
              display: flex;
              justify-content: center;
              gap: 2rem;

              @media only screen and (max-width: 600px) {
                gap: 1rem;
                margin-top: 1rem;
              }
            `}
          >
            <Button
              sx={{ fontWeight: 800 }}
              onMouseEnter={(e) => setHover(true)}
              onMouseLeave={(e) => setHover(false)}
              href="/event/2571e605ba5443329e5b0c8bf9c74df4"
              variant="outlined"
              endIcon={
                <AnimatePresence>
                  {hover && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      css={css`
                        overflow: hidden;
                        height: fit-content;
                        display: flex;
                        align-items: center;
                      `}
                    >
                      <LaunchRoundedIcon />
                    </motion.div>
                  )}
                </AnimatePresence>
              }
            >
              Inter College
            </Button>
            <Button
              sx={{ fontWeight: 800 }}
              href="/event/0193b09cab98431facf5dc401734262c"
              onMouseEnter={(e) => setHover(true)}
              onMouseLeave={(e) => setHover(false)}
              variant="outlined"
              endIcon={
                <AnimatePresence>
                  {hover && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      css={css`
                        overflow: hidden;
                        height: fit-content;
                        display: flex;
                        align-items: center;
                      `}
                    >
                      <LaunchRoundedIcon />
                    </motion.div>
                  )}
                </AnimatePresence>
              }
            >
              Intra College
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
const Completionist = () => (
  <div>
    <Typography
      css={css`
        @media only screen and (max-width: 600px) {
          font-size: 3rem;
        }
      `}
      variant="h4"
      color={"text.primary"}
      fontFamily={"'Lavishly Yours', cursive"}
    ><br/>
      <h3>Coming Soon</h3>
    </Typography>
  </div>
);

//coming soon to date

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
          css={css`
            @media only screen and (max-width: 600px) {
              font-size: 3rem;
            }
          `}
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
      id="about"
      // css={css`
      //   padding: 1.6rem 3rem;
      //   max-width: 1200px;
      //   margin: 1rem auto;
      //   backdrop-filter: blur(0.6rem);

      //   .MuiTypography-body1 {
      //     font-size: 1.2rem;
      //   }
      // `}
    >
      <Typography
        mb={1}
        variant="h2"
        color="text.primary"
        fontFamily={"'Rye', cursive"}
      >
        About
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign={"justify"}
        mb={1}
      >
        Sapthrang is the annual inter-college cultural fest conducted by Atria
        Institute of Technology. This cultural extravaganza has been a part of
        the institution for many years now and it gives several students a
        chance to show their talents in the fields of music, dance, theatre,
        literature, art and fashion. It is mainly hosted by the Cultural
        Committee of Atria.
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign={"justify"}
        mb={1}
      >
        What sets Sapthrang apart from any other festival is its avant-garde
        approach to conventional performing arts and literature. Sapthrang
        aspires to be a multifaceted, splendid celebration of talents, offering
        unprecedented opportunities to participants. Every event has been
        carefully crafted to challenge the participants and ensnare the
        audience.
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign={"justify"}
        mb={1}
      >
        For all the people with the flair for acting, for all the people who
        aren’t afraid to flaunt their mad dancing skills and for all the people
        with a nightingale’s voice, Sapthrang is the perfect platform. This
        doesn’t leave behind the young shakespeare's, the enthusiastic debaters,
        the talented poets and knowledgeable quizzers, for everything is set for
        them as well.
      </Typography>
    </div>
  );
}
function SapthrangTheme() {
  return (
    <div id="theme">
      <Typography
        mb={1}
        variant="h2"
        color="text.primary"
        fontFamily={"'Rye', cursive"}
      >
        Theme for Sapthrang 2023
      </Typography>
      <Typography color="text.secondary" textAlign={"justify"} mb={1}>
        Put your masks on,
      </Typography>
      <Typography color="text.secondary" textAlign={"justify"} mb={1}>
        And grab some popcorn
      </Typography>
      <Typography color="text.secondary" textAlign={"justify"} mb={1}>
        Because it’s time to celebrate a carnival that Atria has never witnessed
        before!
      </Typography>
      <Typography color="text.secondary" textAlign={"justify"} mb={1}>
        This year we are going with Carnival x Masquerade as our theme for the
        fest. So here’s to making your college days more colourful and
        memorable!
      </Typography>
    </div>
  );
}

function Footer() {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <footer
        css={css`
          backdrop-filter: blur(1rem) brightness(0.6);
          margin-top: 2rem;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: stretch;

            @media only screen and (max-width: 600px) {
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.6rem 0;
          `}
        >
          <div
            css={css`
              width: 180px;
              @media only screen and (max-width: 600px) {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            `}
          >
            <CcaLogo width="100%" height="100%" />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <Typography
              variant={mobile ? "h5" : "h4"}
              textAlign={mobile ? "center" : "initial"}
              color="text.primary"
              fontFamily={"'Rye', cursive"}
              ml="0.4rem"
            >
              Cultural club | Atria IT
            </Typography>

            <Typography
              ml="0.4rem"
              variant="subtitle1"
              color="text.primary"
              textAlign={mobile ? "center" : "initial"}
              fontFamily={`-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`}
            >
              <Link href="tel:8310559115">8310559115</Link> |{" "}
              <Link href="tel:9743302809">9743302809</Link> |{" "}
              <Link href="tel:6361838411">6361838411</Link>
            </Typography>
            <div
              css={css`
                display: flex;
                justify-content: ${mobile ? "center" : "flex-start"};
                ${mobile ? "margin-bottom:0.2rem;" : ""}
              `}
            >
              <IconButton
                href="https://www.instagram.com/_.cca._/"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/posts/cc-a-670b8023b_cca-sapthrang-sapthrang2022-activity-6935329614831443968-suWE?utm_source=linkedin_share&utm_medium=android_app"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com/CCA55973955/status/1529560553634635779?t=5i1SCgKStZAMlpGaF2Whiw&s=08"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
            </div>
          </div>
          <div
            css={css`
              flex: 1;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              @media only screen and (max-width: 600px) {
                justify-content: center;
              }
            `}
          >
            <AtriaLogo />
          </div>
        </div>
      </footer>
      <footer
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: brightness(8) blur(1rem);
          color: black;
          @media only screen and (max-width: 600px) {
            backdrop-filter: blur(1rem) grayscale(1);
            padding-bottom: 120px;
            color: whitesmoke;
          }
        `}
      >
        <Typography
          m={"0.1rem"}
          fontSize={"0.8rem"}
          color="inherit"
          variant="subtitle1"
          fontWeight={800}
        >
          <Link color="inherit" href="https://www.instagram.com/xrehpicx/">
            <TextGlitch text="Designed & Built by Raj" />
          </Link>
        </Typography>
      </footer>
    </>
  );
}
