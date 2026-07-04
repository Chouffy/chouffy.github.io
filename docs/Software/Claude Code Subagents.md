Is a feature of [[Claude Code]]
## Notes
- Used to delegate tasks to
	- Avoid messing up with the context window
	- Receive system prompt + task from orchestrating agent 
- Called by *Use a subagent to …*
- Built-in agents ([documentation](https://code.claude.com/docs/en/sub-agents#built-in-subagents))
	- General
	- Discover
	- Plan
## Manage
- With `/agents`, it's possible to create or maintain agents
- Defined similarly than [[Claude Code Skills#Skill File]]
### Description
 - One line
 - Use *Proactively* to get the agent called more often
 - Use *You must tell the agent precisely the filename* to pass an argument 
#### Define output
 - Define an output format, sometimes numbered
	 - Add *Obstacle encountered* to avoid future issues

```markdown
Provide your review in a structured format:

1. Summary: Brief overview of what you reviewed and overall assessment
2. Critical Issues: Any security vulnerabilities, data integrity risks, or logic errors that must be fixed immediately
3. Major Issues: Quality problems, architecture misalignment, or significant performance concerns
4. Minor Issues: Style inconsistencies, documentation gaps, or minor optimizations
5. Recommendations: Suggestions for improvement, refactoring opportunities, or best practices to apply
6. Approval Status: Clear statement of whether the code is ready to merge/deploy or requires changes
7. Obstacles Encountered: Report any obstacles encountered during the review process. This can be: setup issues, workarounds discovered or environment quirks. Report commands that needed a special flag or configuration. Report dependencies or imports that caused problems.
```
### Tool access
- Research / read-only subagent -- Only needs Glob, Grep, and Read. Cannot accidentally modify files.
- Code reviewer -- Needs Bash access to run git diff and see what changed, but still doesn't need Edit or Write.
- Styling / code modification agent -- This is where you give Edit and Write access, because the subagent's job is to actually change your code.
## Usage
- Excel when you need *just* the answer, not the process
- Research & investigation
	- Find a file 
- Code review
	- Review implemented changes with "fresh eyes"
- Custom system prompts 
	- (Claude Code ship with rules for code creation)
	- Copywriting work
	- Style agent (think of loading an external guide file)
### To avoid
- Expert claims
	- Like "you are an expert on Python" → not required as the Claude already have the knowledge, no need of agent
- Multi-step / Sequential pipelines
	- Pipelines works when one step is truly independent from the previous ones
- Test runners
	- Failing tests won't be as visible than the main thread