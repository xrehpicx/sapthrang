/** @jsxImportSource @emotion/react */

import axios from "axios";
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

import { Link, useParams } from "react-router-dom";
import { css, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { getPageTitle } from "notion-utils";

export default function Notion() {
  const [recordMap, setRecordMap] = useState<ExtendedRecordMap>();
  const p = useParams() as { id: string };
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `/api/notion?id=${p.id || "Events-c0224ada95ef49bd8e73e299bd5b9faf"}`
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
      });
  }, [p]);

  return (
    <AnimatePresence>
      {recordMap && (
        <motion.div
          key={p.id || "My-Notion-Blog-fa6fca6dbbe747a7929abf1a43fb8bab"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <NotionRenderer
            previewImages
            css={css`
              background: ${theme.palette.background.default};
              .notion-header {
                display: none;
              }
              .notion-title {
                text-align: center;
                font-weight: lighter;
                font-size: 3rem;
              }
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
              }
              .notion-code {
                font-family: source-code-pro, Menlo, Monaco, Consolas,
                  "Courier New", monospace;
              }
              .notion-text a.notion-link {
                color: ${theme.palette.primary.main};
                border-bottom: 1px solid ${theme.palette.primary.main};
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
                      .notion-page-title-text {
                        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
                        font-weight: bold;
                      }
                      &:hover {
                        text-decoration: none;
                        border: none;
                        border-radius: 4px;
                        /* background: ${theme.palette.primary.main}; */
                      }
                    `}
                    to={`/page${props.href}`}
                    {...props}
                  />
                );
              },
            }}
            fullPage={true}
            darkMode
            recordMap={recordMap}
          />
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
