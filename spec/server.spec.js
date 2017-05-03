/* eslint-env node, jest */
import exoServer from './../lib/server'

const appConfig = {
  name: 'Test App',
}

describe('server', () => {
  test('When executing server, should have designated appName and be an express app ready', () => {
    const app = exoServer(appConfig)
    expect(app.appName).toBe('Test App')
    expect(app.use).toBeDefined()
    expect(app.get).toBeDefined()
    expect(app.post).toBeDefined()
  })
})
