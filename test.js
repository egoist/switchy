import test from 'ava'
import switchy from './'

test('main', t => {
  const find = switchy({
    foo() {
      return 'foo'
    },
    bar() {
      return 'bar'
    }
  })
  t.is(find('foo'), 'foo')
  t.is(find('bar'), 'bar')
})

test('fallback to default', t => {
  const find = switchy({
    default() {
      return 'default'
    }
  })
  t.is(find('nope'), 'default')
})
