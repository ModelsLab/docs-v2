# ModelsLab Docs — Agent Instructions

This is the **Mintlify documentation site** for [ModelsLab](https://modelslab.com), a platform providing AI generation APIs for images, video, audio, 3D, and more.

## Project Structure

```
docs-v2/
├── docs.json              # Mintlify nav config (tabs, groups, pages)
├── image-generation/      # Public image generation API docs
├── image-editing/         # Public image editing API docs
├── video-api/             # Public video generation API docs
├── voice-cloning/         # Public voice/audio API docs
├── 3d-api/                # Public 3D generation API docs
├── faceswap-api/          # Public face swap API docs
├── interior-api/          # Public interior design API docs
├── llm-api/               # Public LLM/chat API docs
├── agents-api/            # Public agents API docs
├── general-api/           # Public utility/general API docs
├── enterprise-api/        # Enterprise (dedicated GPU server) API docs
│   ├── image-editing/     # Enterprise image editing server
│   ├── qwen-edit/         # Enterprise Qwen Edit server (separate GPU)
│   └── nano-banana/       # Enterprise Nano Banana server
├── mcp-web-api/           # MCP Web API docs
├── workflows-api/         # Workflows API docs
├── guides/                # Guides and tutorials
└── sdk/                   # SDK documentation
```

## Key Files

- **`docs.json`** — Controls all navigation (tabs, groups, page order). Every new MDX page must be registered here.
- **`*.mdx`** — Individual doc pages using Mintlify MDX components (`<Card>`, `<CardGroup>`, `<ParamField>`, `<Warning>`, etc.)
- **`*/openapi.json`** — OpenAPI spec files used by Mintlify to auto-render API reference UI. Each model/server group has its own spec to avoid path conflicts.

---

## Page Format: Non-Enterprise (API Reference) Endpoints

Standard public API pages (image-generation, image-editing, video, voice, etc.) use `openapi:` in frontmatter and include a `## Request` section with `### Body` underneath.

```mdx
---
title: "Text to Image"
openapi: 'relative/path/to/openapi.json POST /endpoint'
description: 'Short description of the endpoint.'
---

Optional intro text describing the model/endpoint.

<Note>
  Optional note, e.g. "Use `model_id: hidream-o1` for this endpoint."
</Note>

## Request

Make a `POST` request to the endpoint below with the required parameters.

```bash
POST https://modelslab.com/api/v6/images/text2img
```

### Body
```json json
{
    "key": "your_api_key",
    "model_id": "model-name",
    "prompt": "example prompt",
    "negative_prompt": "blurry, low quality",
    "width": "512",
    "height": "512",
    "samples": "1",
    "num_inference_steps": "31",
    "safety_checker": "no",
    "seed": null,
    "guidance_scale": 7.5,
    "webhook": null,
    "track_id": null
}
```
```

**Key rules for non-enterprise pages:**
- `openapi:` frontmatter must include the explicit relative path to the spec file: `'folder/subfolder/openapi.json POST /path'`
- The URL block uses ` ```bash ``` ` (not curl)
- `### Body` is h3, nested inside `## Request` (h2)
- No `<Warning>` block (that's enterprise-only)
- No `## Body Attributes` / `<ParamField>` section (openapi spec handles params)

---

## Page Format: Enterprise Generation Endpoints

Enterprise generation pages (text-to-image, image-to-image, fashion, qwen-edit, etc.) do NOT use `openapi:` in frontmatter. They have a `<Warning>`, `## Request`, `## Body`, and `## Body Attributes` with `<ParamField>`.

```mdx
---
title: "Endpoint Name"
description: "This endpoint allows you to do X."
---

![Optional result image](https://assets.modelslab.ai/...)

<Warning>
  Make sure you add your [s3 details](/enterprise-api/general/update-s3-details) for `server_name` server, so you can receive image generated in your bucket. Images generated without s3 details being added will be delete after **24hours**
</Warning>

## Request
Make a `POST` request to below endpoint and pass the required parameters as a request body to the endpoint.
```curl curl
--request POST 'https://modelslab.com/api/v1/enterprise/server_name/endpoint_name' \
```

## Body

```json json
{
  "key": "enterprise_api_key",
  "prompt": "example prompt",
  "init_image": "https://example.com/image.jpg",
  "webhook": null,
  "track_id": null
}
```

## Body Attributes
<ParamField body="key" type="string" required>
  Your API Key used for request authorization
</ParamField>

<ParamField body="prompt" type="string" required>
  Text prompt describing what you want in the output.
</ParamField>

<ParamField body="webhook" type="string">
  Set an URL to get a POST API call once the image generation is complete.
</ParamField>

<ParamField body="track_id" type="string">
  This ID is returned in the response to the webhook API call.
</ParamField>
```

**Key rules for enterprise generation pages:**
- No `openapi:` in frontmatter — only `title:` and `description:`
- `<Warning>` block references the correct `server_name` (e.g. `image_editing`, `qwen_edit`, `nano_banana`)
- Request block uses ` ```curl curl ``` ` (not bash)
- `## Body` is h2, separate from `## Request`
- `## Body Attributes` uses `<ParamField body="field_name" type="type" required>` — always `body=`, never `query=` or `path=`

---

## Page Format: Enterprise Server Operation Endpoints

Server ops (clear-cache, clear-queue, restart-server, system-details, update-server, fetchimage) are simple key-only endpoints. They use `openapi:` frontmatter and have `## Request` + `## Body` but NO `## Body Attributes`.

```mdx
---
title: "Clear Cache"
description: "This endpoint is used to clear the API's cache."
openapi: "POST /enterprise/server_name/clear_cache"
---

## Request
Send a `POST` request to below endpoint to clear the API's cache.
```curl curl
--request POST 'https://modelslab.com/api/v1/enterprise/server_name/clear_cache' \
```

## Body
```json json
{
    "key": "enterprise_api_key"
}
```
```

**Key rules for enterprise ops pages:**
- Uses `openapi:` frontmatter (path only, no file reference needed — ops use a shared spec)
- No `<Warning>` block
- No `## Body Attributes` / `<ParamField>` — body is just `{ key }`
- Request block uses ` ```curl curl ``` `

---

## Overview Pages

Group overview pages use `<CardGroup cols={2}>` listing all endpoints as cards:

```mdx
---
title: "Enterprise X API"
description: "Short description of this server group."
---

<Warning>
  Make sure you add your [s3 details](...) for `server_name` server...
</Warning>

### Endpoints

<CardGroup cols={2}>
  <Card title="Endpoint Name" icon="icon-name" href="/enterprise-api/group/page-slug">
    Short description of what this endpoint does
  </Card>
  ...
</CardGroup>
```

---

## docs.json Navigation

Every new MDX file must be added to `docs.json` under the correct group. Path is the file path relative to repo root, without `.mdx` extension.

```json
{
  "group": "Group Name",
  "pages": [
    "enterprise-api/server-name/overview",
    "enterprise-api/server-name/endpoint-one",
    "enterprise-api/server-name/endpoint-two"
  ]
}
```

Enterprise API groups live under the `"Enterprise APIs"` tab.

---

## OpenAPI Spec Structure

### Non-Enterprise openapi.json

Each model/category group has its own `openapi.json` to avoid path conflicts when multiple specs share the same base server URL.

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "ModelsLab X API",
    "description": "...",
    "license": { "name": "MIT" },
    "version": "6.0.0"
  },
  "servers": [
    {
      "url": "https://modelslab.com/api/v6/images",
      "description": "Model-specific description"
    }
  ],
  "paths": {
    "/text2img": {
      "post": {
        "summary": "Text-to-Image",
        "description": "...",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": { "$ref": "#/components/schemas/TextToImageRequest" }
            }
          }
        },
        "responses": {
          "200": {
            "description": "...",
            "content": {
              "application/json": {
                "schema": {
                  "oneOf": [
                    { "$ref": "#/components/schemas/ImageGenerationSuccessResponse" },
                    { "$ref": "#/components/schemas/ImageGenerationProcessingResponse" },
                    { "$ref": "#/components/schemas/ImageGenerationErrorResponse" }
                  ]
                }
              }
            }
          },
          "400": { "$ref": "#/components/responses/StandardErrorResponse" },
          "401": { "$ref": "#/components/responses/StandardErrorResponse" },
          "500": { "$ref": "#/components/responses/StandardErrorResponse" }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "TextToImageRequest": {
        "type": "object",
        "required": ["key", "model_id", "prompt"],
        "properties": {
          "key": { "type": "string", "description": "Your API Key." },
          "model_id": { "type": "string", "description": "Model ID to use." },
          "prompt": { "type": "string", "description": "Text prompt." },
          "negative_prompt": { "type": "string" },
          "width": { "type": "integer", "default": 512, "maximum": 1024 },
          "height": { "type": "integer", "default": 512, "maximum": 1024 },
          "samples": { "type": "integer", "default": 1, "maximum": 4 },
          "num_inference_steps": { "type": "integer", "default": 30 },
          "guidance_scale": { "type": "number", "default": 7.5 },
          "safety_checker": { "type": "string", "enum": ["yes", "no"] },
          "seed": { "oneOf": [{ "type": "integer" }, { "type": "null" }] },
          "webhook": { "type": "string", "format": "uri" },
          "track_id": { "type": "string" }
        }
      },
      "ImageGenerationSuccessResponse": {
        "type": "object",
        "properties": {
          "status": { "type": "string", "enum": ["success"] },
          "generationTime": { "type": "number" },
          "id": { "type": "integer" },
          "output": { "type": "array", "items": { "type": "string", "format": "uri" } },
          "proxy_links": { "type": "array", "items": { "type": "string", "format": "uri" } },
          "meta": { "type": "object", "additionalProperties": true },
          "nsfw_content_detected": { "type": "boolean" },
          "webhook_status": { "type": "string" }
        }
      },
      "ImageGenerationProcessingResponse": {
        "type": "object",
        "properties": {
          "status": { "type": "string", "enum": ["processing"] },
          "eta": { "type": "number" },
          "message": { "type": "string" },
          "fetch_result": { "type": "string", "format": "uri" },
          "id": { "type": "integer" },
          "output": { "type": "array", "items": { "type": "string" } },
          "future_links": { "type": "array", "items": { "type": "string", "format": "uri" } },
          "meta": { "type": "object", "additionalProperties": true }
        }
      },
      "ImageGenerationErrorResponse": {
        "type": "object",
        "required": ["status", "message"],
        "properties": {
          "status": { "type": "string", "enum": ["error"] },
          "message": { "type": "string" }
        }
      }
    },
    "responses": {
      "StandardErrorResponse": {
        "description": "Error response",
        "content": {
          "application/json": {
            "schema": { "$ref": "#/components/schemas/ImageGenerationErrorResponse" }
          }
        }
      }
    }
  }
}
```

**Key rules for non-EP openapi.json:**
- OpenAPI version: `3.1.0`
- Server URL includes the category path: `https://modelslab.com/api/v6/<category>` (so paths are short: `/text2img`, `/img2img`)
- Each endpoint gets its own request schema (e.g. `TextToImageRequest`, `ImageToImageRequest`)
- 200 response uses `oneOf` with three types: `SuccessResponse`, `ProcessingResponse`, `ErrorResponse`
- Error responses on 400/401/500 via `$ref` to `StandardErrorResponse`
- When multiple specs share the same server URL, the MDX `openapi:` frontmatter must explicitly reference the spec file: `'folder/openapi.json POST /path'`

---

### Enterprise openapi.json (server ops only)

Enterprise specs only contain server operation endpoints (clear-cache, clear-queue, fetch, restart, system-details, update-server). Generation endpoints are documented manually with `<ParamField>` — they are NOT in the enterprise openapi.json.

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "ModelsLab Enterprise X API",
    "version": "1.0.0",
    "description": "API for managing enterprise X server operations."
  },
  "servers": [
    { "url": "https://modelslab.com/api/v1" }
  ],
  "paths": {
    "/enterprise/server_name/clear_cache": {
      "post": {
        "summary": "Enterprise: Clear API Cache Endpoint",
        "description": "...",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": { "$ref": "#/components/schemas/ApiKey" }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": { "$ref": "#/components/schemas/GenericResponse" }
              }
            }
          },
          "401": {
            "description": "Unauthorized - Invalid API Key",
            "content": {
              "application/json": {
                "schema": { "$ref": "#/components/schemas/ErrorResponse" }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "ApiKey": {
        "type": "object",
        "required": ["key"],
        "properties": {
          "key": { "type": "string", "description": "Your API key" }
        }
      },
      "GenericResponse": {
        "type": "object",
        "properties": {
          "status": { "type": "string", "example": "success" },
          "message": { "type": "string", "example": "Operation completed successfully" }
        }
      },
      "ErrorResponse": {
        "type": "object",
        "properties": {
          "status": { "type": "string", "example": "error" },
          "message": { "type": "string", "example": "Error message" }
        }
      }
    }
  }
}
```

**Key rules for enterprise openapi.json:**
- OpenAPI version: `3.0.0`
- Server URL is just the base: `https://modelslab.com/api/v1` (so paths are full: `/enterprise/server_name/endpoint`)
- Single shared `ApiKey` schema `{ key: string }` used by all ops endpoints
- Only two response schemas: `GenericResponse` (success) and `ErrorResponse`
- Only 200 and 401 response codes (no 400/500)
- Generation endpoints are NOT included — those are manually documented with `<ParamField>`

---

## ModelsLab API Quick Reference

| Category | Base URL |
|---|---|
| Image Generation (v6) | `https://modelslab.com/api/v6/images/` |
| Image Editing (v6) | `https://modelslab.com/api/v6/image_editing/` |
| Video | `https://modelslab.com/api/v6/video/` |
| Voice/Audio | `https://modelslab.com/api/v6/voice/` |
| 3D | `https://modelslab.com/api/v6/3d/` |
| Enterprise | `https://modelslab.com/api/v1/enterprise/<server_name>/` |

**Enterprise server names:** `image_editing`, `qwen_edit`, `nano_banana`

**Authentication:** All requests include `"key": "YOUR_API_KEY"` in the request body.

**Async pattern:** Long-running tasks return a `request_id`. Poll the fetch endpoint with that ID to get results.

**MCP:** `https://modelslab.com/mcp/v7` — compatible with Claude Code, OpenCode, Cursor, Continue.

---

> Full API docs: https://docs.modelslab.com  
> API keys: https://modelslab.com/dashboard/api-keys
