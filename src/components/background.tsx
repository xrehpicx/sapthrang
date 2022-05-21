/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";
// @ts-ignore
import StarfieldAnimation from "react-starfield-animation";
export function Background() {
  return (
    <StarfieldAnimation
      css={css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      `}
    />
  );
}
