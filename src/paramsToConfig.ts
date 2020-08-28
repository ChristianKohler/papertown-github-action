import * as core from "@actions/core";
import { SyncConfig } from "papertown/dist/lib/config";

export function paramsToConfig(): Partial<SyncConfig> {
  const dryRun = emptyStringToNull(core.getInput("dry-run"));
  const rootFolder = emptyStringToNull(core.getInput("root-folder"));
  const devtoApiKey = emptyStringToNull(core.getInput("devto-api-key"));
  const imageRootUrlGithub = emptyStringToNull(
    core.getInput("image-root-url-github")
  );

  console.log(`Papertown: dryRun ${dryRun}`);
  console.log(`Papertown: rootFolder ${rootFolder}`);
  console.log(`Papertown: devtoApiKey ${devtoApiKey}`);
  console.log(`Papertown: imageRootUrlGithub ${imageRootUrlGithub}`);

  return {
    ...(rootFolder && { rootFolder }),
    ...(devtoApiKey && { devtoApiKey }),
    ...(imageRootUrlGithub && { imageRootUrlGithub }),
    ...(dryRun && { dryRun: stringToBool(dryRun) }),
  };
}
function emptyStringToNull(input: string): string | null {
  return input === "" ? null : input;
}
function stringToBool(input: string): boolean {
  return JSON.parse(input.toLowerCase());
}
