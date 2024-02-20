import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        {/* Footer
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        */}
        <p>
          This website is licensed under <a href="https://github.com/chouffy/chouffy.github.io/tree/master/LICENSE.txt">CC BY 4.0</a> and is built using <a href="https://quartz.jzhao.xyz/">Quartz</a> & <a href="https://obsidian.md/">Obsidian</a>.
          <br/>
          Did you spot an error? Please <a href="https://github.com/Chouffy/chouffy.github.io/issues">open an issue</a>!
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
