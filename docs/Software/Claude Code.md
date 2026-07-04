---
aliases:
  - Code
---
Is a coding tool from [[Claude]]
## Usage
- Work with an agentic loop
	-  Claude Copilot ![[Claude Code-1780068066208.webp]]
	- Claude code 	  ![[Claude Code-1780386148155.webp]]
- Can manage it's own context window
- Recommended workflow: Explore → Plan → Code → Commit
	- Explore & Plan in Plan mode
	- Before Commit: run a code reviewer
		- Ask 
- `blah\` to escape a line
### Context
- Important to give Claude the right context / documents
	- [[Claude Code#`CLAUDE.MD`]]
	- Using `@file.ext` 
- Overview ![[Claude Code-1780482057682.webp]]
- Escape to interrupt thinking, `continue` to resume
- Escape x2 to rewind memory
- Working memory
	- `/context` to check in the Working Memory
	- `/compact` maintain knowledge but free up some context
	- `/clear`
### Commands
- `/init`
	- Scan codebase
	- Create summary
	- Write in [[Claude Code#`CLAUDE.MD`]]
- Review
	- `/commit-push-pr` agent
- `/goal`
- `/insight` for usage patterns
- `/batch` to fan out works
- `/loop` or `/schedule`
- `!command` to run something (shell mode)
- `/focus` show final result
- `← ← ` to move from one CLI to available agents
#### Custom Commands
- In `.claude\commands\COMMAND-NAME.md`
	- Put a prompt in it
	- Use `$ARGUMENTS` to pass args
- Restart Claude to refresh the command

Example that can be called with `/write_tests the use-auth.ts file in the hooks directory`
```md
Write comprehensive tests for: $ARGUMENTS

Testing conventions:
* Use Vitest with React Testing Library
* Place test files in a __tests__ directory in the same folder as the source file
* Name test files as [filename].test.ts(x)
* Use @/ prefix for imports

Coverage:
* Test happy paths
* Test edge cases
* Test error states
```
### Modes
- Plan mode
- Ask before edits
- Auto mode
	- Read-only tools5
	- Create a plan that can be executed
	- Safe code review
	- Complex changes
## Tools
- OOTB tools
	- ![[Claude Code-1780386845343.webp]]
- `/effort` to manage thinking
	- Keyword *ultrathink*
## `CLAUDE.MD`
- Persistent memory
- At the Project and User 
	- CLAUDE.md
	- CLAUDE.local.md
	- ~/.claude/CLAUDE.md
- Reference project docs with `@file.ext`
- Start *without* one, then run `/init` to generate it
- Use `/memory something` to add something to CLAUDE.md
- Use `@file.ext` to mention a specific file

## Capabilities
- [[Claude Code Skills]]    ![[Claude Code-1780666022687.webp]]
- [[Claude Code Hooks]]
- [[Claude Code Subagents]]
## [[Model Context Protocol|MCP]]
- `/mcp`
- Scope
	- Local
	- User
	- Project
- Add into context window
## SDK
- `npm install @anthropic-ai/claude-agent-sdk`
- See [documentation](https://code.claude.com/docs/en/agent-sdk/overview)
- Enable Claude to be used programmatically
- Read-only access by default
- Inherit project if launched inside claude
## Link
- [Beyond the Prompt: Claude Code - Arpan Patel](https://arps18.github.io/posts/claude-code-mastery/)