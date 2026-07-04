Is the usage of [[Playwright]] [[Model Context Protocol|MCP]] in [[Claude Code]]
## Notes
- Install `claude mcp add playwright npx @playwright/mcp@latest`
	- `playwright` being the MCP server name
- Usage with a prompt like "Open the browser and navigate to localhost:3000"
### Skip permission
In `.claude/settings.local.json`:
```json
{
  "permissions": {
    "allow": ["mcp__playwright"],
    "deny": []
  }
}
```
Note: `__` allows Claude to use the Playwright tools without asking for permission every time.