This is a [[Guide]] to publish an extract of an [[Obsidian]] Vault to a [[GitHub]] Pages website:
1. Setup an [[Obsidian]] Vault
2. Setup [[Material for MkDocs]] with some plugins - take a look at [my mkdocs.yml](https://github.com/Chouffy/chouffy.github.io/blob/main/mkdocs.yml)
3. Publish the [[Material for MkDocs]] site to [[GitHub]], then GitHub Pages
4. Clone the repo ([[Git]]) with [[Git#Partial sync - Sparse checkout|partial sync]] to only fetch the `docs` folder
5. Configure [[Git#`.gitignore`|.gitgnore]] to ignore everything except the `docs` folder
6. Copy the cloned repo to your [[Obsidian]] Vault
7. Setup [Obsidian Git](https://github.com/denolehov/obsidian-git) plugin