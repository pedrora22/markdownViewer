# Markdown Instant Viewer

This extension opens `.md` files **rendered directly in the editor tab**, with a GitHub-inspired style. The rendered view follows changes to the file. It uses VS Code's built-in Markdown editor without opening a separate side preview.

## How to use

1. Open this folder in VS Code.
2. Press **F5** to launch an Extension Development Host window.
3. Open a `.md` file. The rendered content appears in place of the Markdown source.

To edit the source, run **View: Reopen Editor With...** from the Command Palette and select **Text Editor**. To return to the rendered view, run the same command and select **Markdown Preview**.

An editor association you set in VS Code settings takes precedence over the default provided by this extension.

## Publishing

1. Create a publisher on the [Marketplace publisher management page](https://marketplace.visualstudio.com/manage/publishers/).
2. Replace `"publisher": "local"` in `package.json` with your publisher ID.
3. Install the publishing tool and create a VSIX for testing:

```bash
npm install -g @vscode/vsce
vsce package
```

In VS Code, run **Extensions: Install from VSIX...** and select the generated file. After testing, publish with `vsce publish`. For authentication, the [official documentation](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) recommends Trusted Publishing through GitHub Actions (`vsce publish --oidc`); it also documents local publishing with a personal access token.
