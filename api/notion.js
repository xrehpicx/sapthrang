import { NotionAPI } from "notion-client";

export default async function handler(req, res) {
    const notion = new NotionAPI();
    const { id } = req.query

    if (id) {
        res.json(await notion.getPage(id));
        return;
    }

}
