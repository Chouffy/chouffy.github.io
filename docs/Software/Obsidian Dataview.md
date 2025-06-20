Is an [[Obsidian]] plugin that allows you to you to [[database]] everything in a Vault.
## Usage
- [Official documentation](https://blacksmithgu.github.io/obsidian-dataview/)
	- [Data commands: FROM, WHERE, ...](https://blacksmithgu.github.io/obsidian-dataview/queries/data-commands/)
	- Metadata [on tasks and lists](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-tasks/) and [pages](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/)
	- [Functions: list(), string(), ...](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/)
	- [Literals: dates, duration, ...](https://blacksmithgu.github.io/obsidian-dataview/reference/literals/)
- [Visual Query Builder](https://s-blu.github.io/basic-dataview-query-builder/)
	- Add a space ` ` at the end of the command if it doesn't work
- [Cheatsheet](https://github.com/seburbandev/obsidian-dataview-cheatsheet)
## Metadata
Are data about the data, like context

To add then in [[Obsidian]]
- `key:: value` right in the text
- In the [[Front Matter]], in [[YAML]]
### Types of metadata
- Explicit (user-defined in [[YAML]]): [List of all data types](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/)
- Implicit related to [the page](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/)
	- `file.name`
	- `file.ctime`
	- `file.mtime`
	- `file.day`
	- `file.tags` an array of all tags in note, with subtags broken down: `#tag/1/A` will be `[#tag, #tag/1, #tag/1/A]`
- Implicit related to [the task or list](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-tasks/)
## Queries
Are done in a thing similar to [[SQL]]
### In note
- Do a [[Markdown#Code snippet]] with `dataview` as language
	- `TABLE key FROM XXX`
		- `key` is the key defined in the annotation
		- `xxx` is to sort where it search
	- `WHERE type = "person"`
	- `SORT file.name ASC`
### [Queries type](<https://blacksmithgu.github.io/obsidian-dataview/queries/query-types/)
- `/```dataview` to start the query - without the `/`
- `list`: Create a list of all specified notes 
	-  `list "File path: " + file.path` to add the file path after the note name
	- `list list_indented` to add indented [[YAML#Lists]] sub-list defined as metadata
- `task`: searches for all checkboxes `-[ ]`
- `table` shows a table of various metadata field linked to a note
	- `table fieldA, fieldB` for multiple metadata
- `from`: Define where you get the notes 
	- `from #tag`
	- `from "folder/sub"`
	- `from [[noteA]]` all notes with links coming into `noteA` 
		- `from [[]]` is the self note
	- `from outgoing([[noteA]])` all notes with links coming out of (leaving) `noteA`
	- Operators
		- And: `from #a and #b`
		- Or: `from "Uni" or "Work"`
		- Not: `from -#tag` 
- `where`: to narrow down the list further using comparison operators
	- operators: `>`, `>=`, `<`, `<=`, `=`, `!=`
	- `where file.size > 1000` to have all big files
	- `where !complete` to show all notes without the complete metadata field
- `sort` to define which order to list the result
	- `sort field asc/desc`
	- `sort field1 asc, field2 desc` for multiple sorts
- `flatten` to unroll lists
	- `flatten list_indented` to have one row for each item in `list_indented`, in every notes
- `group by` to gather together results based on a field value
	- `group by fieldA` will only show the different value of `fieldA`, not the content inside each note
	-  the `rows` object allow you to access each notes
	- `table rows.file.name from #tag group by intensity` gives a table of each `intensity` with the `name` of each notes that have the corresponding intensity
	- Group by is difficult, so try to concatenate several groups with `+`
- `/``` to start the query - without the `/`
### Functions
Goal is to evaluate whether something is `true` or `false`
- [Reference page](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/)
- `contains(key, value)` will search in `key` for `value` 
- `regexmatch(pattern, string)` with `pattern` the regex and `string` the string to be tested against (example: `file.name`)

Examples:
- `list where contains(file.name, "2022")` will return all notes with 2022 in the name
- `GROUP BY split(tags[0],"/")[1]` will extract from the 1st tag the 1st thing after `/`

Group by the 2nd sub-item of the `#area` tag (for example `#area/a` and `#area/b`)
```
GROUP BY "Task: " +
	 split(
		 filter(
			 tags, 
			 (x) => 
				 startswith(x, "#area")
		 )[0],                           // extract only the 1st match
		 "/",
		 2                               // stop at the 2nd split occurence
	 )[1]                                // extract only the 1st tag
```

## Ressources
- [An Introduction to Dataview - Part 1](https://www.youtube.com/watch?v=sEgzrRNkgsE)
- [An Introduction to Dataview - Part 2](https://www.youtube.com/watch?v=jW5pD4SioFM)
### Examples
- [Make a query for meetings within a project](https://youtu.be/JTObSymEvWA?t=557)