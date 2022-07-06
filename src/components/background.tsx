/** @jsxImportSource @emotion/react */
import { css, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";
// @ts-ignore
// import StarfieldAnimation from "react-starfield-animation";
// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";

export function Background() {
  const ref = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    console.log(matches);
    const effect = BIRDS({
      el: ref.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      size: 2,
      scaleMobile: 1.0,
      speedLimit: 20.0,
      separation: 5.0,
      alignment: 15.0,
      quantity: matches ? 3 : 5,
      backgroundColor: 0xa0a18,
    });

    return () => {
      effect && effect.destroy();
    };
  }, [matches]);
  // return (
  //   <StarfieldAnimation
  //     css={css`
  //       position: absolute;
  //       width: 100%;
  //       height: 100%;
  //       top: 0;
  //       left: 0;
  //     `}
  //   />
  // );
  return (
    <div
      ref={ref}
      css={css`
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
      `}
    ></div>
  );
}

export function FireFlies() {
  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        pointer-events: none;

        .firefly {
          position: fixed;
          left: 50%;
          top: 50%;
          width: 0.4vw;
          height: 0.4vw;
          margin: -0.2vw 0 0 9.8vw;
          animation: ease 200s alternate infinite;
          pointer-events: none;
        }
        .firefly::before,
        .firefly::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform-origin: -10vw;
        }
        .firefly::before {
          background: black;
          opacity: 0.4;
          animation: drift ease alternate infinite;
        }
        .firefly::after {
          background: white;
          opacity: 0;
          box-shadow: 0 0 0vw 0vw yellow;
          animation: drift ease alternate infinite, flash ease infinite;
        }

        .firefly:nth-child(1) {
          animation-name: move1;
        }
        .firefly:nth-child(1)::before {
          animation-duration: 9s;
        }
        .firefly:nth-child(1)::after {
          animation-duration: 9s, 10247ms;
          animation-delay: 0ms, 1547ms;
        }

        @keyframes move1 {
          0% {
            transform: translateX(-6vw) translateY(-13vh) scale(0.37);
          }
          3.7037037037% {
            transform: translateX(14vw) translateY(-13vh) scale(0.68);
          }
          7.4074074074% {
            transform: translateX(49vw) translateY(-33vh) scale(0.81);
          }
          11.1111111111% {
            transform: translateX(-1vw) translateY(49vh) scale(0.66);
          }
          14.8148148148% {
            transform: translateX(8vw) translateY(19vh) scale(0.31);
          }
          18.5185185185% {
            transform: translateX(26vw) translateY(6vh) scale(0.73);
          }
          22.2222222222% {
            transform: translateX(43vw) translateY(-11vh) scale(0.98);
          }
          25.9259259259% {
            transform: translateX(-40vw) translateY(-23vh) scale(0.64);
          }
          29.6296296296% {
            transform: translateX(-14vw) translateY(-2vh) scale(0.7);
          }
          33.3333333333% {
            transform: translateX(4vw) translateY(13vh) scale(0.86);
          }
          37.037037037% {
            transform: translateX(-13vw) translateY(-11vh) scale(0.32);
          }
          40.7407407407% {
            transform: translateX(-40vw) translateY(-30vh) scale(0.6);
          }
          44.4444444444% {
            transform: translateX(25vw) translateY(-31vh) scale(0.31);
          }
          48.1481481481% {
            transform: translateX(50vw) translateY(44vh) scale(0.64);
          }
          51.8518518519% {
            transform: translateX(3vw) translateY(-36vh) scale(0.68);
          }
          55.5555555556% {
            transform: translateX(1vw) translateY(49vh) scale(0.85);
          }
          59.2592592593% {
            transform: translateX(13vw) translateY(-22vh) scale(0.78);
          }
          62.962962963% {
            transform: translateX(23vw) translateY(-39vh) scale(0.35);
          }
          66.6666666667% {
            transform: translateX(19vw) translateY(30vh) scale(0.59);
          }
          70.3703703704% {
            transform: translateX(34vw) translateY(30vh) scale(0.51);
          }
          74.0740740741% {
            transform: translateX(7vw) translateY(-29vh) scale(0.78);
          }
          77.7777777778% {
            transform: translateX(26vw) translateY(-22vh) scale(0.3);
          }
          81.4814814815% {
            transform: translateX(47vw) translateY(49vh) scale(0.52);
          }
          85.1851851852% {
            transform: translateX(-39vw) translateY(26vh) scale(0.86);
          }
          88.8888888889% {
            transform: translateX(-33vw) translateY(-27vh) scale(0.32);
          }
          92.5925925926% {
            transform: translateX(-8vw) translateY(-30vh) scale(0.86);
          }
          96.2962962963% {
            transform: translateX(-45vw) translateY(37vh) scale(0.96);
          }
          100% {
            transform: translateX(-49vw) translateY(12vh) scale(0.72);
          }
        }
        .firefly:nth-child(2) {
          animation-name: move2;
        }
        .firefly:nth-child(2)::before {
          animation-duration: 12s;
        }
        .firefly:nth-child(2)::after {
          animation-duration: 12s, 10283ms;
          animation-delay: 0ms, 2374ms;
        }

        @keyframes move2 {
          0% {
            transform: translateX(-18vw) translateY(-27vh) scale(0.58);
          }
          3.8461538462% {
            transform: translateX(0vw) translateY(42vh) scale(0.38);
          }
          7.6923076923% {
            transform: translateX(-11vw) translateY(-19vh) scale(0.98);
          }
          11.5384615385% {
            transform: translateX(2vw) translateY(12vh) scale(0.51);
          }
          15.3846153846% {
            transform: translateX(5vw) translateY(30vh) scale(0.27);
          }
          19.2307692308% {
            transform: translateX(31vw) translateY(3vh) scale(0.64);
          }
          23.0769230769% {
            transform: translateX(49vw) translateY(-17vh) scale(0.71);
          }
          26.9230769231% {
            transform: translateX(36vw) translateY(-41vh) scale(0.63);
          }
          30.7692307692% {
            transform: translateX(34vw) translateY(-3vh) scale(0.8);
          }
          34.6153846154% {
            transform: translateX(-23vw) translateY(-39vh) scale(0.26);
          }
          38.4615384615% {
            transform: translateX(10vw) translateY(-31vh) scale(0.5);
          }
          42.3076923077% {
            transform: translateX(46vw) translateY(-1vh) scale(0.46);
          }
          46.1538461538% {
            transform: translateX(5vw) translateY(32vh) scale(0.73);
          }
          50% {
            transform: translateX(-42vw) translateY(35vh) scale(0.34);
          }
          53.8461538462% {
            transform: translateX(-47vw) translateY(-46vh) scale(0.99);
          }
          57.6923076923% {
            transform: translateX(20vw) translateY(28vh) scale(0.75);
          }
          61.5384615385% {
            transform: translateX(11vw) translateY(30vh) scale(0.88);
          }
          65.3846153846% {
            transform: translateX(-26vw) translateY(-36vh) scale(0.87);
          }
          69.2307692308% {
            transform: translateX(12vw) translateY(14vh) scale(0.35);
          }
          73.0769230769% {
            transform: translateX(-32vw) translateY(39vh) scale(0.46);
          }
          76.9230769231% {
            transform: translateX(-47vw) translateY(26vh) scale(0.92);
          }
          80.7692307692% {
            transform: translateX(-43vw) translateY(-31vh) scale(0.26);
          }
          84.6153846154% {
            transform: translateX(-20vw) translateY(-14vh) scale(0.9);
          }
          88.4615384615% {
            transform: translateX(-10vw) translateY(30vh) scale(0.99);
          }
          92.3076923077% {
            transform: translateX(20vw) translateY(-12vh) scale(0.61);
          }
          96.1538461538% {
            transform: translateX(50vw) translateY(-40vh) scale(0.3);
          }
          100% {
            transform: translateX(-26vw) translateY(-29vh) scale(0.77);
          }
        }
        .firefly:nth-child(3) {
          animation-name: move3;
        }
        .firefly:nth-child(3)::before {
          animation-duration: 15s;
        }
        .firefly:nth-child(3)::after {
          animation-duration: 15s, 8668ms;
          animation-delay: 0ms, 6147ms;
        }

        @keyframes move3 {
          0% {
            transform: translateX(46vw) translateY(-49vh) scale(0.84);
          }
          5.5555555556% {
            transform: translateX(-33vw) translateY(-29vh) scale(0.94);
          }
          11.1111111111% {
            transform: translateX(18vw) translateY(18vh) scale(0.29);
          }
          16.6666666667% {
            transform: translateX(30vw) translateY(41vh) scale(0.45);
          }
          22.2222222222% {
            transform: translateX(31vw) translateY(-17vh) scale(0.49);
          }
          27.7777777778% {
            transform: translateX(-44vw) translateY(9vh) scale(0.76);
          }
          33.3333333333% {
            transform: translateX(-32vw) translateY(-35vh) scale(0.47);
          }
          38.8888888889% {
            transform: translateX(48vw) translateY(26vh) scale(0.65);
          }
          44.4444444444% {
            transform: translateX(-34vw) translateY(7vh) scale(0.85);
          }
          50% {
            transform: translateX(24vw) translateY(-2vh) scale(0.86);
          }
          55.5555555556% {
            transform: translateX(13vw) translateY(20vh) scale(0.49);
          }
          61.1111111111% {
            transform: translateX(5vw) translateY(-10vh) scale(0.45);
          }
          66.6666666667% {
            transform: translateX(21vw) translateY(-9vh) scale(0.72);
          }
          72.2222222222% {
            transform: translateX(15vw) translateY(20vh) scale(0.62);
          }
          77.7777777778% {
            transform: translateX(36vw) translateY(-48vh) scale(0.98);
          }
          83.3333333333% {
            transform: translateX(-39vw) translateY(-17vh) scale(0.41);
          }
          88.8888888889% {
            transform: translateX(50vw) translateY(-33vh) scale(0.66);
          }
          94.4444444444% {
            transform: translateX(44vw) translateY(15vh) scale(0.79);
          }
          100% {
            transform: translateX(-44vw) translateY(-5vh) scale(0.56);
          }
        }
        .firefly:nth-child(4) {
          animation-name: move4;
        }
        .firefly:nth-child(4)::before {
          animation-duration: 13s;
        }
        .firefly:nth-child(4)::after {
          animation-duration: 13s, 8865ms;
          animation-delay: 0ms, 8452ms;
        }

        @keyframes move4 {
          0% {
            transform: translateX(-1vw) translateY(-48vh) scale(0.83);
          }
          3.7037037037% {
            transform: translateX(6vw) translateY(-16vh) scale(0.34);
          }
          7.4074074074% {
            transform: translateX(10vw) translateY(3vh) scale(0.86);
          }
          11.1111111111% {
            transform: translateX(29vw) translateY(11vh) scale(0.53);
          }
          14.8148148148% {
            transform: translateX(-24vw) translateY(-18vh) scale(0.5);
          }
          18.5185185185% {
            transform: translateX(9vw) translateY(28vh) scale(0.73);
          }
          22.2222222222% {
            transform: translateX(46vw) translateY(-10vh) scale(0.49);
          }
          25.9259259259% {
            transform: translateX(8vw) translateY(29vh) scale(0.71);
          }
          29.6296296296% {
            transform: translateX(14vw) translateY(-29vh) scale(0.72);
          }
          33.3333333333% {
            transform: translateX(-19vw) translateY(-1vh) scale(0.68);
          }
          37.037037037% {
            transform: translateX(-39vw) translateY(-16vh) scale(0.8);
          }
          40.7407407407% {
            transform: translateX(5vw) translateY(28vh) scale(0.28);
          }
          44.4444444444% {
            transform: translateX(-40vw) translateY(7vh) scale(0.33);
          }
          48.1481481481% {
            transform: translateX(20vw) translateY(44vh) scale(0.52);
          }
          51.8518518519% {
            transform: translateX(-8vw) translateY(50vh) scale(0.99);
          }
          55.5555555556% {
            transform: translateX(38vw) translateY(44vh) scale(0.57);
          }
          59.2592592593% {
            transform: translateX(-35vw) translateY(-49vh) scale(0.69);
          }
          62.962962963% {
            transform: translateX(15vw) translateY(-43vh) scale(0.61);
          }
          66.6666666667% {
            transform: translateX(-23vw) translateY(-46vh) scale(1);
          }
          70.3703703704% {
            transform: translateX(-27vw) translateY(-15vh) scale(0.73);
          }
          74.0740740741% {
            transform: translateX(-49vw) translateY(-42vh) scale(0.76);
          }
          77.7777777778% {
            transform: translateX(35vw) translateY(-33vh) scale(0.7);
          }
          81.4814814815% {
            transform: translateX(10vw) translateY(8vh) scale(0.33);
          }
          85.1851851852% {
            transform: translateX(-35vw) translateY(-30vh) scale(0.33);
          }
          88.8888888889% {
            transform: translateX(-31vw) translateY(28vh) scale(0.8);
          }
          92.5925925926% {
            transform: translateX(-12vw) translateY(31vh) scale(0.44);
          }
          96.2962962963% {
            transform: translateX(-22vw) translateY(34vh) scale(0.56);
          }
          100% {
            transform: translateX(8vw) translateY(15vh) scale(0.37);
          }
        }
        .firefly:nth-child(5) {
          animation-name: move5;
        }
        .firefly:nth-child(5)::before {
          animation-duration: 18s;
        }
        .firefly:nth-child(5)::after {
          animation-duration: 18s, 9421ms;
          animation-delay: 0ms, 7426ms;
        }

        @keyframes move5 {
          0% {
            transform: translateX(-47vw) translateY(-38vh) scale(0.53);
          }
          5% {
            transform: translateX(50vw) translateY(47vh) scale(0.38);
          }
          10% {
            transform: translateX(1vw) translateY(48vh) scale(0.64);
          }
          15% {
            transform: translateX(29vw) translateY(-21vh) scale(0.53);
          }
          20% {
            transform: translateX(-13vw) translateY(-6vh) scale(0.39);
          }
          25% {
            transform: translateX(25vw) translateY(-32vh) scale(0.5);
          }
          30% {
            transform: translateX(-26vw) translateY(28vh) scale(0.45);
          }
          35% {
            transform: translateX(3vw) translateY(12vh) scale(0.49);
          }
          40% {
            transform: translateX(15vw) translateY(41vh) scale(0.38);
          }
          45% {
            transform: translateX(35vw) translateY(21vh) scale(0.98);
          }
          50% {
            transform: translateX(-33vw) translateY(30vh) scale(0.64);
          }
          55% {
            transform: translateX(-8vw) translateY(-32vh) scale(0.71);
          }
          60% {
            transform: translateX(30vw) translateY(7vh) scale(0.74);
          }
          65% {
            transform: translateX(-22vw) translateY(-21vh) scale(0.87);
          }
          70% {
            transform: translateX(-24vw) translateY(-8vh) scale(0.6);
          }
          75% {
            transform: translateX(-35vw) translateY(43vh) scale(0.79);
          }
          80% {
            transform: translateX(-16vw) translateY(43vh) scale(0.31);
          }
          85% {
            transform: translateX(-15vw) translateY(-14vh) scale(0.61);
          }
          90% {
            transform: translateX(28vw) translateY(33vh) scale(0.35);
          }
          95% {
            transform: translateX(-39vw) translateY(33vh) scale(0.87);
          }
          100% {
            transform: translateX(-23vw) translateY(31vh) scale(0.9);
          }
        }
        .firefly:nth-child(6) {
          animation-name: move6;
        }
        .firefly:nth-child(6)::before {
          animation-duration: 16s;
        }
        .firefly:nth-child(6)::after {
          animation-duration: 16s, 9827ms;
          animation-delay: 0ms, 510ms;
        }

        @keyframes move6 {
          0% {
            transform: translateX(33vw) translateY(-1vh) scale(0.74);
          }
          3.5714285714% {
            transform: translateX(-18vw) translateY(-39vh) scale(0.77);
          }
          7.1428571429% {
            transform: translateX(25vw) translateY(0vh) scale(0.91);
          }
          10.7142857143% {
            transform: translateX(-41vw) translateY(45vh) scale(0.96);
          }
          14.2857142857% {
            transform: translateX(-4vw) translateY(42vh) scale(0.83);
          }
          17.8571428571% {
            transform: translateX(20vw) translateY(-44vh) scale(0.55);
          }
          21.4285714286% {
            transform: translateX(6vw) translateY(34vh) scale(0.59);
          }
          25% {
            transform: translateX(10vw) translateY(-11vh) scale(0.94);
          }
          28.5714285714% {
            transform: translateX(13vw) translateY(-42vh) scale(0.96);
          }
          32.1428571429% {
            transform: translateX(-46vw) translateY(-42vh) scale(0.4);
          }
          35.7142857143% {
            transform: translateX(40vw) translateY(-25vh) scale(0.26);
          }
          39.2857142857% {
            transform: translateX(19vw) translateY(30vh) scale(0.79);
          }
          42.8571428571% {
            transform: translateX(-43vw) translateY(12vh) scale(0.81);
          }
          46.4285714286% {
            transform: translateX(-11vw) translateY(-44vh) scale(0.39);
          }
          50% {
            transform: translateX(-18vw) translateY(-40vh) scale(0.67);
          }
          53.5714285714% {
            transform: translateX(45vw) translateY(-6vh) scale(0.39);
          }
          57.1428571429% {
            transform: translateX(-49vw) translateY(43vh) scale(0.53);
          }
          60.7142857143% {
            transform: translateX(35vw) translateY(-8vh) scale(0.64);
          }
          64.2857142857% {
            transform: translateX(50vw) translateY(-25vh) scale(0.57);
          }
          67.8571428571% {
            transform: translateX(-5vw) translateY(-19vh) scale(0.81);
          }
          71.4285714286% {
            transform: translateX(34vw) translateY(27vh) scale(0.38);
          }
          75% {
            transform: translateX(31vw) translateY(46vh) scale(0.77);
          }
          78.5714285714% {
            transform: translateX(16vw) translateY(-46vh) scale(0.34);
          }
          82.1428571429% {
            transform: translateX(34vw) translateY(-3vh) scale(0.98);
          }
          85.7142857143% {
            transform: translateX(48vw) translateY(13vh) scale(0.91);
          }
          89.2857142857% {
            transform: translateX(-24vw) translateY(5vh) scale(0.95);
          }
          92.8571428571% {
            transform: translateX(-46vw) translateY(43vh) scale(0.26);
          }
          96.4285714286% {
            transform: translateX(-21vw) translateY(-48vh) scale(0.36);
          }
          100% {
            transform: translateX(-4vw) translateY(-48vh) scale(0.32);
          }
        }
        .firefly:nth-child(7) {
          animation-name: move7;
        }
        .firefly:nth-child(7)::before {
          animation-duration: 13s;
        }
        .firefly:nth-child(7)::after {
          animation-duration: 13s, 8026ms;
          animation-delay: 0ms, 3887ms;
        }

        @keyframes move7 {
          0% {
            transform: translateX(-1vw) translateY(15vh) scale(0.69);
          }
          4% {
            transform: translateX(-36vw) translateY(-5vh) scale(0.92);
          }
          8% {
            transform: translateX(50vw) translateY(-39vh) scale(0.96);
          }
          12% {
            transform: translateX(5vw) translateY(-38vh) scale(0.85);
          }
          16% {
            transform: translateX(5vw) translateY(-19vh) scale(0.94);
          }
          20% {
            transform: translateX(-18vw) translateY(-18vh) scale(0.29);
          }
          24% {
            transform: translateX(27vw) translateY(27vh) scale(0.78);
          }
          28% {
            transform: translateX(34vw) translateY(-29vh) scale(0.45);
          }
          32% {
            transform: translateX(38vw) translateY(27vh) scale(0.85);
          }
          36% {
            transform: translateX(-30vw) translateY(7vh) scale(0.84);
          }
          40% {
            transform: translateX(49vw) translateY(5vh) scale(0.98);
          }
          44% {
            transform: translateX(6vw) translateY(-28vh) scale(0.32);
          }
          48% {
            transform: translateX(-41vw) translateY(-43vh) scale(0.86);
          }
          52% {
            transform: translateX(-39vw) translateY(-42vh) scale(0.44);
          }
          56% {
            transform: translateX(-27vw) translateY(-14vh) scale(0.66);
          }
          60% {
            transform: translateX(-46vw) translateY(30vh) scale(0.31);
          }
          64% {
            transform: translateX(1vw) translateY(22vh) scale(0.47);
          }
          68% {
            transform: translateX(-18vw) translateY(-44vh) scale(0.59);
          }
          72% {
            transform: translateX(-48vw) translateY(-5vh) scale(0.73);
          }
          76% {
            transform: translateX(48vw) translateY(-1vh) scale(0.52);
          }
          80% {
            transform: translateX(-32vw) translateY(-28vh) scale(0.36);
          }
          84% {
            transform: translateX(-21vw) translateY(-29vh) scale(0.5);
          }
          88% {
            transform: translateX(-35vw) translateY(-1vh) scale(0.51);
          }
          92% {
            transform: translateX(-45vw) translateY(47vh) scale(0.81);
          }
          96% {
            transform: translateX(-33vw) translateY(-3vh) scale(0.5);
          }
          100% {
            transform: translateX(-7vw) translateY(-22vh) scale(0.6);
          }
        }
        .firefly:nth-child(8) {
          animation-name: move8;
        }
        .firefly:nth-child(8)::before {
          animation-duration: 12s;
        }
        .firefly:nth-child(8)::after {
          animation-duration: 12s, 8321ms;
          animation-delay: 0ms, 5195ms;
        }

        @keyframes move8 {
          0% {
            transform: translateX(-45vw) translateY(-44vh) scale(0.53);
          }
          3.7037037037% {
            transform: translateX(-49vw) translateY(35vh) scale(0.4);
          }
          7.4074074074% {
            transform: translateX(34vw) translateY(-15vh) scale(0.93);
          }
          11.1111111111% {
            transform: translateX(20vw) translateY(-1vh) scale(0.48);
          }
          14.8148148148% {
            transform: translateX(-7vw) translateY(38vh) scale(0.68);
          }
          18.5185185185% {
            transform: translateX(43vw) translateY(16vh) scale(0.45);
          }
          22.2222222222% {
            transform: translateX(-7vw) translateY(-34vh) scale(0.43);
          }
          25.9259259259% {
            transform: translateX(7vw) translateY(45vh) scale(0.75);
          }
          29.6296296296% {
            transform: translateX(-36vw) translateY(-4vh) scale(0.49);
          }
          33.3333333333% {
            transform: translateX(-41vw) translateY(3vh) scale(0.51);
          }
          37.037037037% {
            transform: translateX(-38vw) translateY(-47vh) scale(0.52);
          }
          40.7407407407% {
            transform: translateX(-23vw) translateY(-6vh) scale(0.31);
          }
          44.4444444444% {
            transform: translateX(10vw) translateY(-46vh) scale(0.44);
          }
          48.1481481481% {
            transform: translateX(48vw) translateY(-36vh) scale(0.97);
          }
          51.8518518519% {
            transform: translateX(-24vw) translateY(37vh) scale(0.73);
          }
          55.5555555556% {
            transform: translateX(-44vw) translateY(36vh) scale(0.29);
          }
          59.2592592593% {
            transform: translateX(38vw) translateY(7vh) scale(0.62);
          }
          62.962962963% {
            transform: translateX(-32vw) translateY(24vh) scale(0.74);
          }
          66.6666666667% {
            transform: translateX(-12vw) translateY(10vh) scale(0.97);
          }
          70.3703703704% {
            transform: translateX(25vw) translateY(-48vh) scale(0.73);
          }
          74.0740740741% {
            transform: translateX(32vw) translateY(-36vh) scale(0.3);
          }
          77.7777777778% {
            transform: translateX(25vw) translateY(50vh) scale(0.33);
          }
          81.4814814815% {
            transform: translateX(17vw) translateY(47vh) scale(0.39);
          }
          85.1851851852% {
            transform: translateX(-49vw) translateY(-11vh) scale(0.32);
          }
          88.8888888889% {
            transform: translateX(20vw) translateY(-43vh) scale(0.79);
          }
          92.5925925926% {
            transform: translateX(34vw) translateY(24vh) scale(0.29);
          }
          96.2962962963% {
            transform: translateX(-9vw) translateY(-9vh) scale(0.85);
          }
          100% {
            transform: translateX(2vw) translateY(14vh) scale(0.61);
          }
        }
        .firefly:nth-child(9) {
          animation-name: move9;
        }
        .firefly:nth-child(9)::before {
          animation-duration: 9s;
        }
        .firefly:nth-child(9)::after {
          animation-duration: 9s, 9504ms;
          animation-delay: 0ms, 4272ms;
        }

        @keyframes move9 {
          0% {
            transform: translateX(45vw) translateY(-2vh) scale(0.35);
          }
          4% {
            transform: translateX(-14vw) translateY(45vh) scale(0.91);
          }
          8% {
            transform: translateX(-4vw) translateY(-39vh) scale(0.74);
          }
          12% {
            transform: translateX(-25vw) translateY(-2vh) scale(0.29);
          }
          16% {
            transform: translateX(21vw) translateY(-39vh) scale(0.52);
          }
          20% {
            transform: translateX(28vw) translateY(-4vh) scale(0.71);
          }
          24% {
            transform: translateX(-39vw) translateY(-19vh) scale(0.89);
          }
          28% {
            transform: translateX(-8vw) translateY(-37vh) scale(0.35);
          }
          32% {
            transform: translateX(-42vw) translateY(-34vh) scale(0.27);
          }
          36% {
            transform: translateX(-27vw) translateY(-32vh) scale(0.75);
          }
          40% {
            transform: translateX(6vw) translateY(8vh) scale(0.69);
          }
          44% {
            transform: translateX(22vw) translateY(-18vh) scale(0.35);
          }
          48% {
            transform: translateX(-18vw) translateY(6vh) scale(0.93);
          }
          52% {
            transform: translateX(-23vw) translateY(-16vh) scale(0.36);
          }
          56% {
            transform: translateX(25vw) translateY(-12vh) scale(0.8);
          }
          60% {
            transform: translateX(24vw) translateY(-30vh) scale(0.94);
          }
          64% {
            transform: translateX(-39vw) translateY(-34vh) scale(0.96);
          }
          68% {
            transform: translateX(23vw) translateY(-41vh) scale(0.46);
          }
          72% {
            transform: translateX(-14vw) translateY(39vh) scale(0.32);
          }
          76% {
            transform: translateX(-46vw) translateY(-38vh) scale(0.43);
          }
          80% {
            transform: translateX(2vw) translateY(-19vh) scale(0.67);
          }
          84% {
            transform: translateX(43vw) translateY(-17vh) scale(0.76);
          }
          88% {
            transform: translateX(-16vw) translateY(-6vh) scale(0.66);
          }
          92% {
            transform: translateX(-5vw) translateY(19vh) scale(0.65);
          }
          96% {
            transform: translateX(-30vw) translateY(-31vh) scale(0.27);
          }
          100% {
            transform: translateX(-49vw) translateY(46vh) scale(0.27);
          }
        }
        .firefly:nth-child(10) {
          animation-name: move10;
        }
        .firefly:nth-child(10)::before {
          animation-duration: 9s;
        }
        .firefly:nth-child(10)::after {
          animation-duration: 9s, 7415ms;
          animation-delay: 0ms, 7544ms;
        }

        @keyframes move10 {
          0% {
            transform: translateX(-48vw) translateY(20vh) scale(0.73);
          }
          5% {
            transform: translateX(-2vw) translateY(34vh) scale(0.32);
          }
          10% {
            transform: translateX(31vw) translateY(7vh) scale(0.42);
          }
          15% {
            transform: translateX(-44vw) translateY(41vh) scale(0.45);
          }
          20% {
            transform: translateX(-37vw) translateY(15vh) scale(0.41);
          }
          25% {
            transform: translateX(-49vw) translateY(-16vh) scale(0.32);
          }
          30% {
            transform: translateX(-35vw) translateY(27vh) scale(0.79);
          }
          35% {
            transform: translateX(12vw) translateY(12vh) scale(0.35);
          }
          40% {
            transform: translateX(23vw) translateY(39vh) scale(0.59);
          }
          45% {
            transform: translateX(-31vw) translateY(48vh) scale(0.63);
          }
          50% {
            transform: translateX(-4vw) translateY(13vh) scale(0.33);
          }
          55% {
            transform: translateX(-33vw) translateY(-36vh) scale(0.91);
          }
          60% {
            transform: translateX(7vw) translateY(-22vh) scale(0.95);
          }
          65% {
            transform: translateX(-36vw) translateY(41vh) scale(0.84);
          }
          70% {
            transform: translateX(-20vw) translateY(-43vh) scale(0.99);
          }
          75% {
            transform: translateX(-18vw) translateY(1vh) scale(0.26);
          }
          80% {
            transform: translateX(-14vw) translateY(32vh) scale(0.37);
          }
          85% {
            transform: translateX(-31vw) translateY(28vh) scale(0.83);
          }
          90% {
            transform: translateX(28vw) translateY(-34vh) scale(0.51);
          }
          95% {
            transform: translateX(27vw) translateY(23vh) scale(0.87);
          }
          100% {
            transform: translateX(37vw) translateY(-47vh) scale(0.94);
          }
        }
        .firefly:nth-child(11) {
          animation-name: move11;
        }
        .firefly:nth-child(11)::before {
          animation-duration: 15s;
        }
        .firefly:nth-child(11)::after {
          animation-duration: 15s, 8455ms;
          animation-delay: 0ms, 7865ms;
        }

        @keyframes move11 {
          0% {
            transform: translateX(-20vw) translateY(-23vh) scale(0.27);
          }
          4.1666666667% {
            transform: translateX(27vw) translateY(41vh) scale(0.89);
          }
          8.3333333333% {
            transform: translateX(29vw) translateY(38vh) scale(0.72);
          }
          12.5% {
            transform: translateX(4vw) translateY(-18vh) scale(0.35);
          }
          16.6666666667% {
            transform: translateX(21vw) translateY(40vh) scale(0.86);
          }
          20.8333333333% {
            transform: translateX(-49vw) translateY(-14vh) scale(0.67);
          }
          25% {
            transform: translateX(3vw) translateY(49vh) scale(0.56);
          }
          29.1666666667% {
            transform: translateX(20vw) translateY(21vh) scale(0.93);
          }
          33.3333333333% {
            transform: translateX(-10vw) translateY(-11vh) scale(0.46);
          }
          37.5% {
            transform: translateX(38vw) translateY(48vh) scale(0.94);
          }
          41.6666666667% {
            transform: translateX(-24vw) translateY(14vh) scale(0.62);
          }
          45.8333333333% {
            transform: translateX(-16vw) translateY(47vh) scale(0.58);
          }
          50% {
            transform: translateX(40vw) translateY(-15vh) scale(0.53);
          }
          54.1666666667% {
            transform: translateX(38vw) translateY(-41vh) scale(0.66);
          }
          58.3333333333% {
            transform: translateX(38vw) translateY(-25vh) scale(0.36);
          }
          62.5% {
            transform: translateX(-38vw) translateY(-37vh) scale(0.38);
          }
          66.6666666667% {
            transform: translateX(36vw) translateY(-13vh) scale(0.81);
          }
          70.8333333333% {
            transform: translateX(-12vw) translateY(-4vh) scale(0.65);
          }
          75% {
            transform: translateX(-5vw) translateY(10vh) scale(0.37);
          }
          79.1666666667% {
            transform: translateX(-19vw) translateY(-30vh) scale(0.44);
          }
          83.3333333333% {
            transform: translateX(42vw) translateY(-19vh) scale(0.91);
          }
          87.5% {
            transform: translateX(-14vw) translateY(15vh) scale(0.73);
          }
          91.6666666667% {
            transform: translateX(45vw) translateY(-14vh) scale(0.78);
          }
          95.8333333333% {
            transform: translateX(-46vw) translateY(13vh) scale(0.48);
          }
          100% {
            transform: translateX(-36vw) translateY(42vh) scale(0.75);
          }
        }
        .firefly:nth-child(12) {
          animation-name: move12;
        }
        .firefly:nth-child(12)::before {
          animation-duration: 10s;
        }
        .firefly:nth-child(12)::after {
          animation-duration: 10s, 10685ms;
          animation-delay: 0ms, 6486ms;
        }

        @keyframes move12 {
          0% {
            transform: translateX(26vw) translateY(45vh) scale(0.46);
          }
          3.7037037037% {
            transform: translateX(19vw) translateY(5vh) scale(1);
          }
          7.4074074074% {
            transform: translateX(49vw) translateY(29vh) scale(0.59);
          }
          11.1111111111% {
            transform: translateX(0vw) translateY(-12vh) scale(0.77);
          }
          14.8148148148% {
            transform: translateX(0vw) translateY(-44vh) scale(0.31);
          }
          18.5185185185% {
            transform: translateX(-12vw) translateY(-47vh) scale(0.59);
          }
          22.2222222222% {
            transform: translateX(15vw) translateY(27vh) scale(0.73);
          }
          25.9259259259% {
            transform: translateX(-35vw) translateY(44vh) scale(0.33);
          }
          29.6296296296% {
            transform: translateX(47vw) translateY(43vh) scale(0.82);
          }
          33.3333333333% {
            transform: translateX(3vw) translateY(-48vh) scale(0.44);
          }
          37.037037037% {
            transform: translateX(-49vw) translateY(30vh) scale(0.52);
          }
          40.7407407407% {
            transform: translateX(-27vw) translateY(14vh) scale(0.31);
          }
          44.4444444444% {
            transform: translateX(32vw) translateY(-17vh) scale(0.77);
          }
          48.1481481481% {
            transform: translateX(-32vw) translateY(-49vh) scale(0.54);
          }
          51.8518518519% {
            transform: translateX(-28vw) translateY(10vh) scale(0.93);
          }
          55.5555555556% {
            transform: translateX(29vw) translateY(14vh) scale(0.64);
          }
          59.2592592593% {
            transform: translateX(15vw) translateY(25vh) scale(0.59);
          }
          62.962962963% {
            transform: translateX(-48vw) translateY(21vh) scale(0.9);
          }
          66.6666666667% {
            transform: translateX(35vw) translateY(-30vh) scale(0.73);
          }
          70.3703703704% {
            transform: translateX(8vw) translateY(-17vh) scale(0.73);
          }
          74.0740740741% {
            transform: translateX(-15vw) translateY(-21vh) scale(0.87);
          }
          77.7777777778% {
            transform: translateX(-20vw) translateY(-31vh) scale(0.99);
          }
          81.4814814815% {
            transform: translateX(-26vw) translateY(31vh) scale(0.67);
          }
          85.1851851852% {
            transform: translateX(30vw) translateY(13vh) scale(0.39);
          }
          88.8888888889% {
            transform: translateX(25vw) translateY(-8vh) scale(0.88);
          }
          92.5925925926% {
            transform: translateX(-27vw) translateY(42vh) scale(0.76);
          }
          96.2962962963% {
            transform: translateX(32vw) translateY(22vh) scale(0.39);
          }
          100% {
            transform: translateX(-38vw) translateY(47vh) scale(1);
          }
        }
        .firefly:nth-child(13) {
          animation-name: move13;
        }
        .firefly:nth-child(13)::before {
          animation-duration: 18s;
        }
        .firefly:nth-child(13)::after {
          animation-duration: 18s, 10156ms;
          animation-delay: 0ms, 8354ms;
        }

        @keyframes move13 {
          0% {
            transform: translateX(49vw) translateY(4vh) scale(0.65);
          }
          4.1666666667% {
            transform: translateX(15vw) translateY(-10vh) scale(0.92);
          }
          8.3333333333% {
            transform: translateX(-32vw) translateY(-4vh) scale(0.62);
          }
          12.5% {
            transform: translateX(-33vw) translateY(-1vh) scale(0.78);
          }
          16.6666666667% {
            transform: translateX(10vw) translateY(-23vh) scale(0.44);
          }
          20.8333333333% {
            transform: translateX(-5vw) translateY(23vh) scale(1);
          }
          25% {
            transform: translateX(-25vw) translateY(-42vh) scale(0.67);
          }
          29.1666666667% {
            transform: translateX(37vw) translateY(-5vh) scale(0.39);
          }
          33.3333333333% {
            transform: translateX(-1vw) translateY(-47vh) scale(0.32);
          }
          37.5% {
            transform: translateX(5vw) translateY(-5vh) scale(0.65);
          }
          41.6666666667% {
            transform: translateX(-12vw) translateY(-45vh) scale(0.41);
          }
          45.8333333333% {
            transform: translateX(-40vw) translateY(4vh) scale(0.43);
          }
          50% {
            transform: translateX(15vw) translateY(13vh) scale(0.5);
          }
          54.1666666667% {
            transform: translateX(-29vw) translateY(9vh) scale(0.53);
          }
          58.3333333333% {
            transform: translateX(-11vw) translateY(5vh) scale(0.62);
          }
          62.5% {
            transform: translateX(-32vw) translateY(5vh) scale(0.26);
          }
          66.6666666667% {
            transform: translateX(-40vw) translateY(-15vh) scale(0.99);
          }
          70.8333333333% {
            transform: translateX(-41vw) translateY(-10vh) scale(0.37);
          }
          75% {
            transform: translateX(28vw) translateY(-8vh) scale(0.94);
          }
          79.1666666667% {
            transform: translateX(2vw) translateY(44vh) scale(0.97);
          }
          83.3333333333% {
            transform: translateX(-22vw) translateY(2vh) scale(0.46);
          }
          87.5% {
            transform: translateX(38vw) translateY(25vh) scale(0.75);
          }
          91.6666666667% {
            transform: translateX(-30vw) translateY(21vh) scale(0.37);
          }
          95.8333333333% {
            transform: translateX(33vw) translateY(15vh) scale(0.28);
          }
          100% {
            transform: translateX(22vw) translateY(-32vh) scale(0.9);
          }
        }
        .firefly:nth-child(14) {
          animation-name: move14;
        }
        .firefly:nth-child(14)::before {
          animation-duration: 16s;
        }
        .firefly:nth-child(14)::after {
          animation-duration: 16s, 6040ms;
          animation-delay: 0ms, 1990ms;
        }

        @keyframes move14 {
          0% {
            transform: translateX(37vw) translateY(7vh) scale(0.67);
          }
          4.7619047619% {
            transform: translateX(-5vw) translateY(-24vh) scale(0.97);
          }
          9.5238095238% {
            transform: translateX(13vw) translateY(29vh) scale(0.88);
          }
          14.2857142857% {
            transform: translateX(-19vw) translateY(-38vh) scale(0.44);
          }
          19.0476190476% {
            transform: translateX(0vw) translateY(44vh) scale(0.83);
          }
          23.8095238095% {
            transform: translateX(48vw) translateY(30vh) scale(0.58);
          }
          28.5714285714% {
            transform: translateX(-3vw) translateY(24vh) scale(0.57);
          }
          33.3333333333% {
            transform: translateX(12vw) translateY(-29vh) scale(0.43);
          }
          38.0952380952% {
            transform: translateX(-27vw) translateY(49vh) scale(0.26);
          }
          42.8571428571% {
            transform: translateX(7vw) translateY(13vh) scale(0.77);
          }
          47.619047619% {
            transform: translateX(23vw) translateY(35vh) scale(0.79);
          }
          52.380952381% {
            transform: translateX(-6vw) translateY(28vh) scale(0.28);
          }
          57.1428571429% {
            transform: translateX(12vw) translateY(-23vh) scale(0.44);
          }
          61.9047619048% {
            transform: translateX(-41vw) translateY(3vh) scale(0.45);
          }
          66.6666666667% {
            transform: translateX(33vw) translateY(7vh) scale(0.88);
          }
          71.4285714286% {
            transform: translateX(2vw) translateY(-5vh) scale(0.49);
          }
          76.1904761905% {
            transform: translateX(15vw) translateY(34vh) scale(0.3);
          }
          80.9523809524% {
            transform: translateX(48vw) translateY(47vh) scale(0.74);
          }
          85.7142857143% {
            transform: translateX(21vw) translateY(-5vh) scale(0.81);
          }
          90.4761904762% {
            transform: translateX(50vw) translateY(16vh) scale(0.27);
          }
          95.2380952381% {
            transform: translateX(-38vw) translateY(-33vh) scale(0.38);
          }
          100% {
            transform: translateX(-8vw) translateY(26vh) scale(0.69);
          }
        }
        .firefly:nth-child(15) {
          animation-name: move15;
        }
        .firefly:nth-child(15)::before {
          animation-duration: 16s;
        }
        .firefly:nth-child(15)::after {
          animation-duration: 16s, 9336ms;
          animation-delay: 0ms, 7740ms;
        }

        @keyframes move15 {
          0% {
            transform: translateX(11vw) translateY(-2vh) scale(0.98);
          }
          4.1666666667% {
            transform: translateX(-14vw) translateY(-48vh) scale(0.59);
          }
          8.3333333333% {
            transform: translateX(37vw) translateY(37vh) scale(0.84);
          }
          12.5% {
            transform: translateX(-47vw) translateY(-42vh) scale(0.99);
          }
          16.6666666667% {
            transform: translateX(39vw) translateY(32vh) scale(0.39);
          }
          20.8333333333% {
            transform: translateX(-41vw) translateY(16vh) scale(0.34);
          }
          25% {
            transform: translateX(11vw) translateY(-23vh) scale(0.49);
          }
          29.1666666667% {
            transform: translateX(15vw) translateY(16vh) scale(0.28);
          }
          33.3333333333% {
            transform: translateX(-12vw) translateY(43vh) scale(0.72);
          }
          37.5% {
            transform: translateX(-40vw) translateY(-9vh) scale(1);
          }
          41.6666666667% {
            transform: translateX(-18vw) translateY(-37vh) scale(0.89);
          }
          45.8333333333% {
            transform: translateX(-19vw) translateY(24vh) scale(0.7);
          }
          50% {
            transform: translateX(13vw) translateY(-46vh) scale(0.79);
          }
          54.1666666667% {
            transform: translateX(3vw) translateY(-44vh) scale(0.68);
          }
          58.3333333333% {
            transform: translateX(-3vw) translateY(2vh) scale(0.9);
          }
          62.5% {
            transform: translateX(-11vw) translateY(0vh) scale(0.36);
          }
          66.6666666667% {
            transform: translateX(-38vw) translateY(-5vh) scale(0.95);
          }
          70.8333333333% {
            transform: translateX(-1vw) translateY(-9vh) scale(0.82);
          }
          75% {
            transform: translateX(-38vw) translateY(46vh) scale(0.53);
          }
          79.1666666667% {
            transform: translateX(-24vw) translateY(-12vh) scale(0.45);
          }
          83.3333333333% {
            transform: translateX(22vw) translateY(-45vh) scale(0.42);
          }
          87.5% {
            transform: translateX(34vw) translateY(-20vh) scale(0.44);
          }
          91.6666666667% {
            transform: translateX(19vw) translateY(-27vh) scale(0.67);
          }
          95.8333333333% {
            transform: translateX(-10vw) translateY(16vh) scale(1);
          }
          100% {
            transform: translateX(-39vw) translateY(23vh) scale(0.83);
          }
        }
        @keyframes drift {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes flash {
          0%,
          30%,
          100% {
            opacity: 0;
            box-shadow: 0 0 0vw 0vw yellow;
          }
          5% {
            opacity: 1;
            box-shadow: 0 0 2vw 0.4vw yellow;
          }
        }
      `}
    >
      {Array.from(Array(20).keys()).map((_, i) => (
        <div key={i} className="firefly"></div>
      ))}
    </div>
  );
}
