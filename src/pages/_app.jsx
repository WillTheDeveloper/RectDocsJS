import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'

import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'

const navigation = [
  {
    title: 'Introduction to Rect',
    links: [
      { title: 'Getting started', href: '/' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Setting up a project', href: '/docs/setting-up-a-project'},
      { title: 'Hello world', href: '/docs/hello-world'}
    ],
  },
  {
    title: 'Core concepts',
    links: [
      { title: 'Variables', href: '/docs/variables' },
      { title: 'Data types', href: '/docs/datatypes'},
      { title: 'If statements', href: '/docs/if-statements'},
      { title: 'Loops', href: '/docs/loops'},
      { title: 'Functions', href: '/docs/functions'},
      { title: 'Casts', href: '/docs/casts'}
    ],
  },
  {
    title: 'Advanced concepts',
    links: [
      { title: 'System packages', href: '/docs/system-packages'},
      { title: 'Threading', href: '/docs/threading' },
      { title: 'Exception handlers', href: '/docs/exception-handlers' },
      { title: 'Lambda', href: '/docs/lambda'},
      { title: 'Preprocessor statements', href: '/docs/preprocessor-statements'},
      { title: 'Binary / Hex literals', href: '/docs/binary-hex'}
    ],
  },
  {
    title: 'Contributing',
    links: [
      { title: 'How to contribute', href: '/docs/how-to-contribute' },
      { title: 'Public roadmap', href: '/docs/public-roadmap' },
      { title: 'Versioning information', href: '/docs/versioning-information' },
    ],
  },
]

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (/^h[23]$/.test(node.name)) {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Docs`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout
        navigation={navigation}
        title={title}
        tableOfContents={tableOfContents}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
