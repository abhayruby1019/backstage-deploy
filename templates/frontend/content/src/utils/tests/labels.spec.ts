import Labels, { getLabelByLocale } from '../labels'

describe('getLabelByLocale', () => {
  // Mock data for testing
  const labels: Labels = {
    default: {
      title: 'Default Title',
    },
    en_US: {
      title: 'English Title',
    },
  }

  it('should return the default labels when the locale is not found', () => {
    const locale = 'fr_FR'
    const result = getLabelByLocale(labels, locale)
    expect(result).toEqual(labels.default)
  })

  it('should return the default labels when the locale is not passed', () => {
    const locale = ''
    const result = getLabelByLocale(labels, locale)
    expect(result).toEqual(labels.default)
  })

  it('should return empty object if labels not passed in correct format', () => {
    const locale = ''
    const result = getLabelByLocale({}, locale)
    expect(result).toEqual({})
  })

  it('should merge and return the labels for the specified locale', () => {
    const locale = 'en_US'
    const result = getLabelByLocale(labels, locale)
    expect(result).toEqual({ title: 'English Title' })
  })

  it('should return an empty object when the default labels are empty', () => {
    const emptyLabels: Labels = {
      default: {},
    }
    const locale = 'en_US'
    const result = getLabelByLocale(emptyLabels, locale)
    expect(result).toEqual({})
  })
})
