const assert = require('assert')
const url = require('./index.js')

assert.equal(url({title: 'Foo'}), 'title=Foo')
assert.equal(url({
  repo: 'marcbachmann/foo',
  title: 'Foo'
}), 'https://github.com/marcbachmann/foo/issues/new?title=Foo')

assert.equal(url({labels: 'bug'}), 'labels[]=bug')
assert.equal(url({labels: ['bug']}), 'labels[]=bug')
assert.equal(url({
  repo: 'marcbachmann/foo',
  labels: ['bug']
}), 'https://github.com/marcbachmann/foo/issues/new?labels[]=bug')

assert.equal(url({labels: ['bug']}), 'labels[]=bug')
assert.equal(url({
  repo: 'marcbachmann/foo',
  labels: ['bug']
}), 'https://github.com/marcbachmann/foo/issues/new?labels[]=bug')

assert.equal(url({assignee: 'marcbachmann'}), 'assignee=marcbachmann')
assert.equal(url({
  repo: 'marcbachmann/foo',
  assignee: 'marcbachmann'
}), 'https://github.com/marcbachmann/foo/issues/new?assignee=marcbachmann')

assert.equal(url({body: 'Foo bar'}), 'body=Foo%20bar')
assert.equal(url({
  repo: 'marcbachmann/foo',
  body: 'Foo bar'
}), 'https://github.com/marcbachmann/foo/issues/new?body=Foo%20bar')

assert.equal(url({
  repo: 'marcbachmann/foo',
  title: 'Test with some # chars',
  body: 'Foo bar',
  labels: ['bug', 'help wanted']
}), 'https://github.com/marcbachmann/foo/issues/new?title=Test%20with%20some%20%23%20chars&body=Foo%20bar&labels[]=bug&labels[]=help%20wanted')

assert.equal(url({
  repo: 'marcbachmann/foo',
  body: `
    Foo
    bar
     baz
  `,
}), 'https://github.com/marcbachmann/foo/issues/new?body=Foo%0Abar%0A%20baz'
, 'reindents the body')
