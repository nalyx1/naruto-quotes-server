import { Router } from "express";
import lista from "../frases.js";

const route = Router();

route.get("/", (request, response) => {
  let quote = lista[Math.floor(Math.random() * 510)];
  let resp = { speaker: quote[1], quote: quote[2] };
  response.json(resp);
});

export default route;
