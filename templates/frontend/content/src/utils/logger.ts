import pino, { Logger } from 'pino'

export function getLogger(name: string): Logger {
  return pino({
    name,
    timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
  })
}
