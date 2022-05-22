import { VercelRequest, VercelResponse } from "@vercel/node";

/* import axios from "axios";
// request -> ?id={your_id}
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://xrehpicx.vercel.com/"
    : "http://localhost:3000/"; */

async function handler(req: VercelRequest, res: VercelResponse) {
  res.send("hello from typescript!");
}

export default handler;
