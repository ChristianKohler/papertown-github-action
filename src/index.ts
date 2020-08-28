import * as core from "@actions/core";
import * as papertown from "papertown";
import { SyncConfig } from "papertown/dist/lib/config";

run();

async function run() {
  try {
    await runPapertown();
  } catch (err) {
    core.setFailed(err.message);
  }
}

async function runPapertown() {
  const dryRun = emptyStringToNull(core.getInput("dry-run"));
  const rootFolder = emptyStringToNull(core.getInput("root-folder"));
  const devtoApiKey = emptyStringToNull(core.getInput("devto-api-key"));
  const imageRootUrlGithub = emptyStringToNull(
    core.getInput("image-root-url-github")
  );

  const config: Partial<SyncConfig> = {
    ...(rootFolder && { rootFolder }),
    ...(devtoApiKey && { devtoApiKey }),
    ...(imageRootUrlGithub && { imageRootUrlGithub }),
    ...(dryRun && { dryRun: stringToBool(dryRun) }),
  };

  console.log(`Run Papertown`);
  console.log(` rootFolder: ${config.rootFolder}`);
  console.log(` devtoApiKey: ${config.devtoApiKey}`);
  console.log(` imageRootUrlGithub: ${config.imageRootUrlGithub}`);
  console.log(` dryRun: ${config.dryRun}`);

  await papertown.sync(config);
}

function emptyStringToNull(input: string): string | null {
  return input === "" ? null : input;
}

function stringToBool(input: string): boolean {
  return JSON.parse(input.toLowerCase());
}
