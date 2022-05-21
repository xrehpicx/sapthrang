/** @jsxImportSource @emotion/react */
import {
  css,
  IconButton,
  Paper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EditOffRoundedIcon from "@mui/icons-material/EditOffRounded";
import { useSnackbar } from "notistack";
interface IDebugModeContext {
  debug: boolean;
  edit: boolean;
}

const DebugModeContext = createContext<IDebugModeContext>(
  {} as IDebugModeContext
);

export const useDebugMode = () => useContext(DebugModeContext);

export function DebugModeContextProvider({ children }: PropsWithChildren<{}>) {
  const [debug, setDebug] = useState(
    !!JSON.parse(localStorage.getItem("debug") || "false")
  );
  const [edit, setEdit] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (edit && debug) {
      document.designMode = "on";
    } else {
      document.designMode = "off";
    }
    // @ts-ignore
    window.debug = debug;
    localStorage.setItem("debug", JSON.stringify(debug));
  }, [debug, edit]);

  useEffect(() => {
    const shortcutHandler = (e: KeyboardEvent) => {
      // double click d
      if ((e.key === "d" || e.key === "D") && e.metaKey) {
        e.preventDefault();
        setDebug((d) => !d);
      }
      if ((e.key === "D" || e.key === "D") && e.shiftKey) {
        e.preventDefault();
        enqueueSnackbar("its ⌘ + d now lol", {
          variant: "warning",
        });
      }
    };

    window.addEventListener("keydown", shortcutHandler);
    return () => {
      window.removeEventListener("keydown", shortcutHandler);
    };
  }, [enqueueSnackbar]);

  return (
    <DebugModeContext.Provider value={{ debug, edit }}>
      <AnimatePresence>
        {debug && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            css={css`
              overflow: hidden;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background: black;
            `}
            contentEditable={false}
          >
            <div
              css={css`
                min-width: 1050px;
                padding: 0.8rem 1.6rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: white;
              `}
            >
              <Stack direction={"row"} alignItems="center" spacing={2}>
                <Paper sx={{ padding: "0.2rem 0.6rem" }}>
                  <Typography variant="subtitle1" color="inherit">
                    ⌘ + d
                  </Typography>
                </Paper>
                <Typography variant="subtitle1" color="error" fontWeight={800}>
                  Debug mode
                </Typography>
                <Switch
                  color="error"
                  value={debug}
                  defaultChecked
                  onChange={(e, s) => setDebug(s)}
                />
              </Stack>
              <div>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={(e) => setEdit((s) => !s)}
                  sx={{ ml: 1 }}
                >
                  {!edit ? (
                    <EditRoundedIcon fontSize="small" />
                  ) : (
                    <EditOffRoundedIcon fontSize="small" />
                  )}
                </IconButton>
              </div>
            </div>
            {/* <div
              css={css`
                padding-bottom: 8px;
                cursor: pointer;
                a {
                  padding: 0 1rem;
                }
              `}
            >
              <Link color="inherit" href="/">
                /
              </Link>
              <Link color="inherit" href="/pr">
                /pr
              </Link>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </DebugModeContext.Provider>
  );
}

// var delta = 200;
// var lastKeypressTime = 0;
// function KeyHandler(
//   event: KeyboardEvent,
//   callback: (event: KeyboardEvent) => void
// ) {
//   if (event.key === "d") {
//     var thisKeypressTime = Date.now();
//     if (thisKeypressTime - lastKeypressTime <= delta) {
//       callback(event);
//       // optional - if we'd rather not detect a triple-press
//       // as a second double-press, reset the timestamp
//       thisKeypressTime = 0;
//     }
//     lastKeypressTime = thisKeypressTime;
//   }
// }
