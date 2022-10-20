import { type Config, genDefinitionText } from "./generator";
import path from "path";
import { readFileSync } from "fs";

const PWD = path.join(__dirname, "../../../");
const json = readFileSync(
  path.join(PWD, "configs", "circuit_tracks.json"),
  "utf8"
);
const config = JSON.parse(json) as Config;
const state = {
  showEmptySections: false,
};

const result = genDefinitionText(config, state);
console.log(result);
