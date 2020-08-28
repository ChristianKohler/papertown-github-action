import { paramsToConfig } from "./paramsToConfig";

jest.mock("@actions/core");

import * as core from "@actions/core";

describe("paramsToConfig", () => {
  test("No params returns empty config", () => {
    (core.getInput as jest.Mock).mockReturnValue("");

    const config = paramsToConfig();

    expect(config).toEqual({});
  });

  test("With params return full config", () => {
    (core.getInput as jest.Mock).mockImplementation((input: string) =>
      new Map([
        ["dry-run", "false"],
        ["root-folder", "my-root-folder"],
        ["devto-api-key", "api-key"],
        ["image-root-url-github", "root"],
      ]).get(input)
    );

    const config = paramsToConfig();

    expect(config).toEqual({
      devtoApiKey: "api-key",
      dryRun: false,
      imageRootUrlGithub: "root",
      rootFolder: "my-root-folder",
    });
  });
});
