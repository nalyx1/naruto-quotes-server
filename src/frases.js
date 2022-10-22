import { parse } from "csv-parse";
import { createReadStream } from "fs";

const lista = [];

createReadStream("src/finalQuotes.csv")
  .pipe(parse({}))
  .on("data", (data) => lista.push(data));

export default lista;
