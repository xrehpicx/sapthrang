/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";
import { useEffect, useRef } from "react";
// @ts-ignore
// import StarfieldAnimation from "react-starfield-animation";
// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";

export function Background() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const effect = BIRDS({
      el: ref.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0,
      color1: 0xfffe00,
      color2: 0xff0000,
      colorMode: "lerp",
      birdSize: 2.0,
      wingSpan: 24.0,
      speedLimit: 20.0,
      separation: 45.0,
      alignment: 5.0,
      cohesion: 1.0,
      quantity: 3.0,
    });

    return () => {
      effect && effect.destroy();
    };
  }, []);
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
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
      `}
    ></div>
  );
}
