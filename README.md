<div align="center">
  <img width="1360" height="465" alt="ModelsLab API Documentation" src="https://github.com/user-attachments/assets/f458857b-2afe-4dd5-ac27-42e6df756db2" />
  <br /><br />
  <a href="https://discord.gg/ujtGyjY2">
    <img src="https://img.shields.io/badge/Discord-Join%20Us-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord">
  </a>
  <a href="https://x.com/ModelsLabAI">
    <img src="https://img.shields.io/badge/X-@ModelsLabAI-000000?style=for-the-badge&logo=twitter&logoColor=white" alt="X/Twitter">
  </a>
  <a href="https://github.com/ModelsLab">
    <img src="https://img.shields.io/badge/GitHub-ModelsLab-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</div>

This is the official documentation source for the [ModelsLab API](https://modelslab.com), built with [Mintlify](https://mintlify.com). The live docs are available at [docs.modelslab.com](https://docs.modelslab.com).

## What this repo contains

Documentation for the full ModelsLab API surface, organized by product area:

| Directory | Description |
|---|---|
| `image-generation/` | Text to image, Flux, ControlNet, community models, real-time SD |
| `image-editing/` | Inpainting, outpainting, super resolution, background removal, face generation |
| `video-api/` | Text to video, image to video, video to video, watermark removal |
| `voice-cloning/` | TTS, STT, voice cloning, music generation, song generator, dubbing |
| `faceswap-api/` | Face swap (image and video) |
| `3d-api/` | Text to 3D, image to 3D |
| `interior-api/` | Interior design, room decoration, floor planning |
| `general-api/` | Account, billing, subscriptions, cache, NSFW checks |
| `enterprise-api/` | Enterprise-tier endpoints across all product areas |
| `mcp-web-api/` | MCP server integration and agent control plane |
| `workflows-api/` | Workflow execution and management |
| `sdk/` | SDK references for Python, TypeScript, Go, PHP, Dart |
| `agents-api/` | Agent authentication, billing, and team management |
| `open-source/` | Open source projects (ModelQ, ModelsLab MCP) |
| `guides/` | End-to-end guides for specific use cases |
| `release-notes/` | API and playground changelog |

Top-level pages include `quickstart.mdx`, `authentication.mdx`, `webhooks.mdx`, `rate-limits.mdx`, and `error-codes.mdx`.

## Local development

Install the Mintlify CLI:

```bash
npm install -g mintlify
```

Start the local preview server from the root of this repo (where `docs.json` lives):

```bash
mintlify dev
```

If the dev server fails to start, run `mintlify install` to reinstall dependencies.

## Contributing

### Editing existing pages

Each page is an `.mdx` file in the corresponding API directory. Edit the file directly and the changes will reflect in the local preview immediately.

### Adding a new page

1. Create a new `.mdx` file in the relevant directory.
2. Add it to the `navigation` section in `docs.json` under the correct group.
3. Preview locally to confirm it renders correctly.

### Page structure

Pages follow this general structure:

```mdx
---
title: "Endpoint Name"
description: "Short description of what this endpoint does."
---

## Request
...

## Body
...

## Body Attributes
...

## Response
...
```

### Useful CLI commands

Check for broken internal links:
```bash
mintlify broken-links
```

Validate an OpenAPI file:
```bash
mintlify openapi-check <filename-or-url>
```

Rename a file and update all internal references:
```bash
mintlify rename <from> <to>
```

## Deployment

Changes pushed to the default branch are automatically deployed to [docs.modelslab.com](https://docs.modelslab.com) via the Mintlify GitHub integration.

## Support

For API support, visit [modelslab.com/support](https://modelslab.com/support) or email support@modelslab.com.
For documentation issues, open an issue in this repository.
To request new features, join the [Discord](https://discord.com/invite/modelslab-1033301189254729748).
