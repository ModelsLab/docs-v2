---
name: Mod
description: Documentation and capabilities reference for Mod
metadata:
    mintlify-proj: mod
    version: "1.0"
---

## Capabilities

ModelsLab enables agents to leverage a comprehensive suite of AI generation APIs for creating and transforming visual, audio, and textual content. Agents can generate photorealistic images from text, create videos from descriptions or images, clone and transform voices, generate 3D models, perform advanced image editing, create deepfake videos, and interact with uncensored language models. The platform supports both REST APIs and MCP (Model Context Protocol) integration for seamless agent connectivity.

## Skills

### Image Generation
- **Text-to-Image**: Generate images from text prompts using models like Flux and Stable Diffusion
  - Endpoint: `POST https://modelslab.com/api/v6/images/text2img`
  - Parameters: `prompt`, `model_id`, `width`, `height`, `samples`, `num_inference_steps`, `guidance_scale`
- **Image-to-Image**: Transform existing images based on text descriptions
- **Inpainting**: Edit specific areas of images using masks
- **ControlNet**: Generate images with precise control using ControlNet models
- **Community Models**: Access 10,000+ Stable Diffusion models including DreamBooth and LoRA models
- **Model Training**: Fine-tune models with LoRA training capabilities

### Image Editing
- **Qwen Edit**: Edit images using Qwen model with text prompts
- **Object Removal**: Remove unwanted objects from images
- **Super Resolution**: Upscale and enhance image quality
- **Background Removal**: Remove or create masks for image backgrounds
- **Inpainting/Outpainting**: Fill or extend image areas
- **Face Generation**: Generate faces with specific characteristics
- **Image Mixing**: Merge two images together
- **Mask Creator**: Create masks for specific objects in images
- **Fashion Overlay**: Apply clothing to model bodies
- **Head Shot Generation**: Generate professional headshots

### Video Generation
- **Text-to-Video**: Generate videos from text descriptions using CogVideoX
- **Image-to-Video**: Animate static images into videos
- **Text-to-Video Ultra**: High-definition video generation from text
- **Image-to-Video Ultra**: High-definition video generation from images
- **Video-to-Video**: Transform existing videos with AI
- **Watermark Removal**: Remove watermarks from videos
- **Lip Sync**: Synchronize video with audio for realistic lip movements
- **Motion Control**: Control video motion using reference videos

### Voice & Audio
- **Text-to-Speech**: Convert text to natural speech with voice selection
- **Voice Cloning**: Clone and replicate voices from audio samples
- **Speech-to-Text**: Transcribe audio to text
- **Voice-to-Voice**: Transform voices with voice conversion
- **Music Generation**: Create original music from text descriptions
- **Sound Effects**: Generate custom sound effects from descriptions
- **Song Generator**: Create complete songs with AI-generated music
- **Vocal Isolator**: Extract vocal tracks from music
- **Lyrics Generator**: Generate song lyrics with AI
- **Dubbing**: Create professional dubbed audio for videos
- **Voice Cover**: Generate cover versions of songs

### 3D Generation
- **Text-to-3D**: Generate 3D models from text prompts
- **Image-to-3D**: Convert 2D images into 3D models
- **3D Fetch**: Retrieve processing status and results

### Deepfake & Face Manipulation
- **Specific Face Swap**: Swap faces in single images
- **Multiple Face Swap**: Swap all detected faces in images
- **Single Video Swap**: Swap faces in videos
- **Specific Video Swap**: Swap specific faces in videos based on reference

### Interior Design
- **Interior Generation**: Generate home interior designs
- **Floor Planning**: Generate floor plans from room images
- **Room Decorator**: Create room designs using text prompts
- **Exterior Restoration**: Improve exterior building images
- **Scenario Changer**: Change environment scenarios
- **Sketch Rendering**: Convert architectural sketches to photorealistic images
- **Object Removal**: Remove objects from interior images
- **Interior Mixer**: Add objects from one room to another

### Chat & Language Models
- **Uncensored Chat**: Engage in unrestricted conversations without censorship
- **Chat Completions**: Generate responses from prompts with OpenAI SDK compatibility
- **LLM Chat**: Interact with language models like Llama-3 and DeepSeek

### Utility Functions
- **Base64 Conversion**: Convert base64 strings to URLs for images, videos, audio, and 3D objects
- **Image Cropping**: Crop images in base64 format
- **NSFW Detection**: Check if images or prompts contain NSFW content
- **Cache Management**: Clear user cache for performance
- **Subscription Management**: Purchase and manage API subscriptions
- **Asset Tracking**: Monitor generated assets and request history

## Workflows

### Image Generation Workflow
1. Prepare text prompt with detailed description
2. Call `text-to-image` endpoint with model selection (flux, sdxl, etc.)
3. Receive request ID if processing asynchronously
4. Poll `fetch-image` endpoint to check status
5. Retrieve generated image URL from response

### Video Creation from Image Workflow
1. Prepare source image (URL or base64)
2. Define motion/transformation description
3. Call `image-to-video` endpoint with duration and resolution
4. Monitor processing with `fetch-video` endpoint
5. Download completed video from returned URL

### Voice Cloning Workflow
1. Upload reference voice sample via `upload-voice` endpoint
2. Prepare text content for speech synthesis
3. Call `text-to-speech` with cloned voice ID
4. Retrieve audio file from response
5. Optionally apply voice transformations with `voice-to-voice`

### Interior Design Workflow
1. Upload room image or sketch
2. Call appropriate endpoint (interior, floor-planning, room-decorator)
3. Provide text prompt describing desired changes
4. Retrieve generated design image
5. Iterate with additional prompts for refinement

### Multi-Modal Content Creation
1. Generate base image with `text-to-image`
2. Create video from image with `image-to-video`
3. Generate audio with `text-to-speech` or `music-generation`
4. Optionally add lip-sync with `lip-sync` endpoint
5. Combine assets into final multimedia content

## Integration

### MCP Web API Integration
ModelsLab provides hosted MCP (Model Context Protocol) integration at `https://modelslab.com/mcp/v7` for seamless agent connectivity:
- Compatible with Claude Code, OpenCode, Cursor, Continue, and custom MCP clients
- Authentication via `Authorization: Bearer YOUR_API_KEY` header
- JSON-RPC 2.0 protocol over HTTP
- Tools available: `list-models`, `text-to-image`, `image-to-image`, `text-to-video`, `image-to-video`, `text-to-speech`, `speech-to-text`, `chat-completion`, and more

### REST API Integration
- Base URL: `https://modelslab.com/api/v6/` (standard) or `https://modelslab.com/api/v1/` (workflows)
- Authentication: Include `key` parameter in request body or use API key header
- Response format: JSON with status, output URLs, and metadata
- Async processing: Use fetch endpoints to poll for results

### Webhook Support
- Configure webhook URLs for automatic result delivery
- Receive notifications when generation completes
- Payload includes execution ID, status, output, and completion timestamp

### Client SDKs
Official SDKs available for Python, TypeScript, PHP, Dart, and Go for faster integration

### Workflows API
Create custom workflows combining multiple API calls with configurable parameters and responses

## Context

### Authentication
All API requests require a ModelsLab API key obtainable from the dashboard at `https://modelslab.com/dashboard/api-keys`. Keys can be passed via request body parameter `key` or HTTP headers.

### Rate Limiting
Default rate limits apply per plan tier. Workflows have configurable rate limits (default 10 requests/minute). Exceeding limits returns 429 status with `retry_after` field.

### Model Selection
ModelsLab supports 10,000+ models across categories:
- **Image**: Flux, Stable Diffusion XL, Stable Diffusion 3, community models
- **Video**: CogVideoX, AnimateDiff, Runway
- **Audio**: TTS models, music generation, voice cloning
- **3D**: Text-to-3D, image-to-3D models
- **LLM**: Llama-3, DeepSeek, and other language models

### Async Processing
Complex generations may return processing status. Use fetch endpoints with request ID to poll for completion. Webhook URLs enable push-based notifications instead of polling.

### Image Dimensions
Standard dimensions: 512x512, 768x768, 1024x1024 pixels. Aspect ratios supported: 1:1, 16:9, 9:16, and custom dimensions within platform limits.

### Enterprise Solutions
Private GPU infrastructure available for enterprise customers with custom pricing, dedicated support, and flexible deployment options. Contact support@modelslab.com for enterprise inquiries.

### Error Handling
Standard HTTP status codes with JSON error responses. Common codes: 400 (invalid request), 401 (authentication), 429 (rate limit), 500 (server error). Detailed error messages guide troubleshooting.

---

> For additional documentation and navigation, see: https://docs.modelslab.com/llms.txt