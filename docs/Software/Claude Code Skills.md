Is a feature of [[Claude Code]]
## Notes
- Specialized knowledge to do certain tasks
	- Avoid repeating things to Claude over and over
- Lives in `SKILL.MD`
	1. Enterprise `managed-settings.json`
	2. Personal skills: ` ~/.claude/skills/skill-name`
	3. Project: `my-project/.claude/skills/skill-name`
	4. Plugins: `my-project/.claude-plugins/skills/skill-name`
	5. with `skill-name` must match the skill name defined in the [[Claude Code Skills#Frontmatter]] 
- Not always available to [[Claude Code Subagents]]
	- Need to add `skills:`
- See also
	- [Agent Skill Open Standard](https://agentskills.io/specification)
	- [Claude Skill Documentation](https://code.claude.com/docs/en/skills)
## Skill File
- Keep it <500 lines, otherwise split it with [[Claude Code Skills#Progressive Disclosure]]
### Frontmatter
- Name
- Description
	- Used to match user request to skill

| Field           | Required     | Constraints                                                                                                       |
| --------------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `name`          | Yes          | Max 64 characters. Lowercase letters, numbers, and hyphens only. Must not start or end with a hyphen.             |
| `description`   | Yes          | Max 1024 characters. Non-empty. Describes what the skill does and when to use it.                                 |
| `license`       | No           | License name or reference to a bundled license file.                                                              |
| `compatibility` | No           | Max 500 characters. Indicates environment requirements (intended product, system packages, network access, etc.). |
| `metadata`      | No           | Arbitrary key-value mapping for additional metadata.                                                              |
| `allowed-tools` | No           | Space-separated string of pre-approved tools the skill may use. (Experimental)                                    |
| `model`         | Not Standard | Model to use. Accept same value as in `/model` or `inherit`                                                       |
| `effort`        | Not standard | Effort to use. See [this list](https://code.claude.com/docs/en/model-config#adjust-effort-level)                  |
| `skills`        | Not standard | Make skill available to [[Claude Code Subagents]]                                                                      |

Example: 
```md
---
name: pr-review
description: Reviews pull requests for code quality. Use when reviewing PRs or checking code changes.
model: sonnet
---
```
### Content
- Isn't loaded except if the tool is used
### Progressive Disclosure
- Put links in `SKILL.MD`
- Use folders
	- `SKILL.MD`
	- `scripts/`: Executable code
		- Tell the LLM to *run* the script, not *read*
	- `references/`: Additional documentation
	- `assets/`: Images, templates, or other data files

Example:
![[Claude Skills-1780665876661.webp]]
## Usage
- Skills are loaded at Claude Code startup
- *What skills are available?*
### Troubleshooting
 - Try [Skill Validator](https://github.com/agentskills/agentskills/tree/main/skills-ref)
 - Try `claude --debug`
 - Clear Claude cache in `~/.claude/plugins/cache`