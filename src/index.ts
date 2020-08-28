import * as core from "@actions/core";
import * as papertown from "papertown";
import { paramsToConfig } from "./paramsToConfig";

run();

async function run() {
  try {
    console.log("Papertown: Run");
    await papertown.sync(paramsToConfig());
  } catch (err) {
    core.setFailed(err.message);
  }
}
