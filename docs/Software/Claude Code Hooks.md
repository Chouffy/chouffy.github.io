Are a feature of [[Claude Code]]
## Overview 
- [Hooks guide - Claude Documentation](https://code.claude.com/docs/en/hooks-guide)
- ![[Claude Code-1780500391506.webp]]
	- Tools![[Claude Code-1780500446669.webp]]
	- ![[Claude Code-1780566613527.webp]]
## Deterministic call 
- How to know tools / "matcher" 
	- → Ask claude for a list "List out the names of all tools you have access to"
- Exit codes
	- 0: proceed
	- 2: blocked (only for PreToolUse)
### Available hooks
- **UserPromptSubmit**
- **PreToolUse**
	- Read
	- Example: avoid multiplicity of code in a query environment
	   ![[Claude Code Hooks-1780568579533.webp|328]]
- **PostToolUse**
	- Write, Edit, MultiEdit
	- Example: run check of the language after an edit
- **Notification** - Runs when Claude Code sends a notification, which occurs when Claude needs permission to use a tool, or after Claude Code has been idle for 60 seconds
- **Stop** - Runs when Claude Code has finished responding
- **SubagentStop** - Runs when a subagent (these are displayed as a "Task" in the UI) has finished
- **PreCompact** - Runs before a compact operation occurs, either manual or automatic
- **UserPromptSubmit** - Runs when the user submits a prompt, before Claude processes it
- **SessionStart** - Runs when starting or resuming a session
- **SessionEnd** - Runs when a session ends
## Usage
- in `settings.json`
	- Managed with `/hooks`
	- ![[Claude Code-1780500461790.webp|362]]
	- Example ![[Claude Code-1780500500977.webp]]
- Security
	- ![[Claude Code Hooks-1780568003517.webp]]
	- For Absolute path, you can have a script to update it per machine when setting up the project ([source](https://anthropic.skilljar.com/claude-code-in-action/312423))
### Example of defining a hook
``` ts
"PreToolUse": [
  {
    "matcher": "Read",
    "hooks": [
      {
        "type": "command",
        "command": "node /home/hooks/read_hook.js"
      }
    ]
  }
]
```
### Example of an incoming hook from Claude
```json
{
  "session_id": "2d6a1e4d-6...",
  "transcript_path": "/Users/sg/...",
  "hook_event_name": "PreToolUse",
  "tool_name": "Read",
  "tool_input": {
    "file_path": "/code/queries/.env"
  }
}
```