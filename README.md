# Mintlify Starter Kit

Click on `Use this template` to copy the Mintlify starter kit. The starter kit contains examples including

- Guide pages
- Navigation
- Customizations
- API Reference pages
- Use of popular components

### Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```
npm i -g mintlify
```

Run the following command at the root of your documentation (where docs.json is)

```
mintlify dev
```

### Publishing Changes

Install our Github App to auto propagate changes from your repo to your deployment. Changes will be deployed to production automatically after pushing to the default branch. Find the link to install on your dashboard. 

### Mintlify CLI Commands

#### Check for Broken Links
```bash
mintlify broken-links
```
Check for broken internal links in your Mintlify project.

#### Rename Files
```bash
mintlify rename <from> <to>
```
Rename a file in a Mintlify project and update all internal link references.

#### OpenAPI Validation
```bash
mintlify openapi-check <openapiFilenameOrUrl>
```
Check your OpenAPI file for errors. You can pass in a filename (e.g. ./openapi.yaml) or a URL (e.g. https://petstore3.swagger.io/api/v3/openapi.json).

#### Update CLI
```bash
mintlify update
```
Updates to the most recent version of the Mintlify CLI.

#### Upgrade Configuration
```bash
mintlify upgrade
```
Upgrade from mint.json to docs.json. This command creates a docs.json file.

#### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `docs.json`
