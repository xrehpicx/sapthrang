import { NotionAPI } from "notion-client";
// import { VercelRequest, VercelResponse } from "@vercel/node";
/* import axios from "axios";
// request -> ?id={your_id}
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://xrehpicx.vercel.com/"
    : "http://localhost:3000/"; */

const notion = new NotionAPI();
async function handler(req, res) {
  const { id } = req.query;
  if (id) {
    res.json(await notion.getPage(id));
    return;
  }
}

export default handler;
