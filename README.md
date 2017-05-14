# github-issue-url

### Usage

```js
const githubIssueUrl = require('github-issue-url')
githubIssueUrl({
  repo: 'marcbachmann/github-issue-url',
  title: 'Bug: <Title>',
  body: `
    Foo
    bar
     baz
  `,
  labels: ['bug'],
  assignee: 'marcbachmann'
})
// That returns such a url:
// https://github.com/marcbachmann/github-issue-url/issues/new?title=Bug%3A%20%3CTitle%3E&body=Foo%0Abar%0A%20baz&labels[]=bug&assignee=marcbachmann


// If you don't pass the repo, it returns a query string:
githubIssueUrl({
  title: 'Bug: <Title>',
  labels: ['bug'],
  assignee: 'marcbachmann'
})
// title=Bug%3A%20%3CTitle%3E&labels[]=bug&assignee=marcbachmann
```
