import { parseChangelogToHtml } from '../../helpers/markdown'
import Parser from 'html-react-parser'
import './Changelog.css'

const Changelog = async () => {
  const { value } = await parseChangelogToHtml()

  return <div className="changelog">{Parser(value as string)}</div>
}

export default Changelog
