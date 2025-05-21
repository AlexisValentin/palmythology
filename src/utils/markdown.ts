import remarkGfm from 'remark-gfm'
import { read } from 'to-vfile'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const { version } = require('../../package.json')

export const parseChangelogToHtml = async () =>
  await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    // @ts-ignore
    .use(rehypeStringify)
    .process(await read(`changelog/CHANGELOG_${version}.md`))
