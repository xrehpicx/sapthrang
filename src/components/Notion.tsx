/** @jsxImportSource @emotion/react */

import axios from "axios";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { ExtendedRecordMap } from "notion-types";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Collection } from "react-notion-x/build/third-party/collection";
// import { Code } from "react-notion-x/build/third-party/code";
// import { Equation } from "react-notion-x/build/third-party/equation";
// import { Modal } from "react-notion-x/build/third-party/modal";
// import { Pdf } from "react-notion-x/build/third-party/pdf";

import "react-notion-x/src/styles.css";
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
// used for collection views (optional)
import "rc-dropdown/assets/index.css";
// used for rendering equations (optional)
import "katex/dist/katex.min.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import { css, IconButton, Typography, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { getPageTitle } from "notion-utils";
import { FireFlies } from "./background";

// const ep = `https://www.raj-design.in/`;

export default function Notion() {
  const [recordMap, setRecordMap] = useState<ExtendedRecordMap>();
  const p = useParams() as { id: string };
  const navigate = useNavigate();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `/api/notion?id=${p.id || "Events-9f55b56798de4b99957e4952b5536738"}`
      )
      .then((response: any) => {
        p.id
          ? setFavicon(
              `https://s2.googleusercontent.com/s2/favicons?domain=${
                "https://www.notion.so/" + p.id
              }`
            )
          : setFavicon("default");
        document.title = getPageTitle(response.data);
        setLoading(false);
        setRecordMap(response.data);
      })
      .catch(() => {
        window.location.reload();
      });
  }, [p]);

  return (
    <AnimatePresence>
      {recordMap && (
        <motion.div
          key={p.id || "  "}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          css={css`
            position: relative;
          `}
        >
          <FireFlies />
          <NotionRenderer
            previewImages
            css={css`
              background: ${theme.palette.background.default};

              .notion-asset-wrapper iframe {
                background: ${theme.palette.background.default};
              }
              .breadcrumb:hover {
                border: none;
                outline: none;
              }
              .notion-header {
                background: ${theme.palette.background.paper};
                position: fixed;
                overflow-x: scroll;
                bottom: 0;
                left: 45px;
                top: auto;
                width: 100%;
                /* display: none; */
              }
              .notion-title {
                text-align: center;
                font-weight: lighter;
                font-size: 4rem;
                font-family: "Rye", cursive;
                @media only screen and (max-width: 600px) {
                  font-size: 2rem;
                }
              }
              /* .notion-page-icon-image {
                width: 50px;
                height: 50px;
              } */
              .notion-page-icon-wrapper {
                padding: 0 1rem;
                justify-content: center;
              }
              .notion-file-icon {
                color: ${theme.palette.text.primary};
              }
              .notion-page {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
                max-width: 1000px;
                width: 100%;
                font-family: "Raleway", sans-serif;
              }
              .notion-page-cover-wrapper {
                height: 50vh;
              }
              .notion-code {
                font-family: source-code-pro, Menlo, Monaco, Consolas,
                  "Courier New", monospace;
              }
              /* .notion-page-link {
                padding: 0.6rem 1.2rem;
                width: fit-content;
                height: auto;
              } */
              .notion-text a.notion-link {
                color: ${theme.palette.primary.main};
                border: none;
                /* border-bottom: 1px solid ${theme.palette.primary.main}; */
                opacity: 0.8;
              }
              a:hover {
                text-decoration: none;
              }
            `}
            components={{
              // equation: Equation,
              Collection,
              // code: Code,
              PageLink: (props: any) => {
                return (
                  <Link
                    css={css`
                      color: ${theme.palette.text.primary};
                      text-decoration: none;
                      display: flex;
                      justify-content: center;
                      padding: 0.6rem 1.2rem;
                      margin: 1px;
                      height: 60px;

                      .notion-page-title-text {
                        border: none;
                        font-weight: bold;
                      }
                      &:hover {
                        text-decoration: none;
                        border-radius: 4px;
                        background: ${theme.palette.background.paper};
                        border: 1px solid ${theme.palette.primary.main};
                      }
                    `}
                    to={`/event${props.href}`}
                    {...props}
                  />
                );
              },
            }}
            fullPage={true}
            darkMode
            recordMap={recordMap}
          />
          <div
            css={css`
              position: fixed;
              bottom: 0;
              left: 0;
              display: flex;
              width: 45px;
              height: 45px;
              align-items: center;
              justify-content: center;
              z-index: 10;
              background: ${theme.palette.background.paper};
            `}
          >
            <IconButton onClick={() => navigate("/")}>
              <HomeRoundedIcon />
            </IconButton>{" "}
            <Typography
              color="text.primary"
              component={"span"}
              className="spacer"
            >
              |
            </Typography>
          </div>
        </motion.div>
      )}
      <Backdrop open={loading}>
        <CircularProgress color="primary" />
      </Backdrop>
    </AnimatePresence>
  );
}

var oldfavicons = [];
function setFavicon(icon_url = "https://stackoverflow.com/favicon.ico") {
  var links = document.querySelectorAll("link[rel~='icon']");
  links.forEach((link) => {
    if (!link) {
      link = document.createElement("link");
      // @ts-ignore
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    // @ts-ignore
    oldfavicons.push(link.href);
    // @ts-ignore
    link.href = icon_url;
  });
}
