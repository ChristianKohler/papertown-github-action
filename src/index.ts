import * as core from "@actions/core";
import * as github from "@actions/github";
import * as papertown from "papertown";

async function run() {
  try {
    await runPapertown();
  } catch (err) {
    core.setFailed(err.message);
  }
}

async function runPapertown() {
  const config = {
    rootFolder: core.getInput("root-folder"),
    devtoApiKey: core.getInput("devto-api-key"),
    imageRootUrlGithub: core.getInput("image-root-url-github"),
    dryRun: JSON.parse(core.getInput("dry-run").toLowerCase()),
  };

  console.log(`Run Papertown`);
  console.log(` rootFolder: ${config.rootFolder}`);
  console.log(` devtoApiKey: ${config.devtoApiKey}`);
  console.log(` imageRootUrlGithub: ${config.imageRootUrlGithub}`);
  console.log(` dryRun: ${config.dryRun}`);

  await papertown.sync(config);
}

run();
