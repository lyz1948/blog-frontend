// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/agate.css'
import 'highlight.js/styles/dracula.css'
// import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'
import md from 'markdown-it'

const markdown = md({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        // eslint-disable-next-line prettier/prettier
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
      } catch (__) {}
    }

    // eslint-disable-next-line prettier/prettier
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  },
})

export default markdown
