// Run only on the common entry page. Explicit language URLs always stay put.
(() => {
  const language = navigator.languages?.[0] || navigator.language || ''
  const target = /^ja(?:-|$)/i.test(language) ? 'ja' : 'en'
  location.replace(new URL(`${target}/index.html${location.hash}`, location.href).href)
})()
