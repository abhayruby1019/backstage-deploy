import { getLogger } from '../logger'

describe('getLogger', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create a logger with the given name', () => {
    const loggerName = 'testLogger'

    const log = getLogger(loggerName)

    expect(log.bindings().name).toBe(loggerName)
  })
})
