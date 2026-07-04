---
aliases:
  - MCP
---
Is a [[standard]] to integrate [[Large Language Model|LLM]] with external systems.
Shift the burden of tool definition & execution into a MCP Server.
Different from [[API]], as schema & functions are defined.
## Terminology
- Tools
	- Available to the AI to do/interact with external things
	- With Schema and Functions
- Prompts, which are similar to ~[[Claude Code#Skills]]
- Ressources to expose data to client and fetch information
- ![[Model Context Protocol-1780664124145.webp]]
## Notes
- Overview
	- ![[Model Context Protocol-1780577951859.webp|412]]
	- ![[Model Context Protocol-1780578423510.webp]]
### Communication
- Transport agnostic
- MCP spec define messages
- Types
	- HTTP, WebSockets
		- Hosted by service provider
	- STDIO
		- Local process
## Popular ones
- [[Playwright]] for web automation
## Development
- [Python SDK](https://github.com/modelcontextprotocol/python-sdk)
### MCP Server
- MCP Inspector can be called with `mcp dev mcp_server.py`, with the last bit 
- Expose Tools, Ressources
### Ressources 
- Overview 
	- ![[Model Context Protocol-1780662588311.webp]]
	- ![[Model Context Protocol-1780662688886.webp]]
- Type of ressources
	- Direct Ressources
	- Templated Ressources
	- ![[Model Context Protocol-1780662714273.webp]]
- Example
	- Autocomplete when the user uses `@file.ext`
	- Pull up the content of the document when the prompt refer to said document
### Prompts
- Tailored to the purpose of the MCP server
- Example
	- User ask to format a document in Markdown
	- User will initiate this with `/`  and specify with ID
### MCP Client
- Overview
   ![[Model Context Protocol-1780580160224.webp|464]]
- Need some cleanup code 