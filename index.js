const redent = require('redent')

module.exports = function ({host, repo, title, body, assignee, labels}) {
  let queries = []
  if (typeof title === 'string') {
    queries.push(`title=${encodeURIComponent(title.trim())}`)
  }

  if (typeof body === 'string') {
    queries.push(`body=${encodeURIComponent(redent(body).trim())}`)
  }

  if (labels) {
    labels = Array.isArray(labels) ? labels : [labels]
    queries.push(labels.map((l) => `labels[]=${encodeURIComponent(l)}`).join('&'))
  }

  if (typeof assignee === 'string') {
    queries.push(`assignee=${assignee}`)
  }

  if (repo) return `${host || 'https://github.com'}/${repo}/issues/new?${queries.join('&')}`
  else return queries.join('&')
}
