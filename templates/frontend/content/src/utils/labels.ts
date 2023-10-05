import merge from 'lodash.merge'

interface Labels {
  [key: string]: {
    [key: string]: string
  }
}

export const getLabelByLocale = (
  labels: Labels,
  locale: string
): Record<string, string> => {
  const mergedLabels = { ...labels.default }
  if (labels[locale]) {
    merge(mergedLabels, labels[locale])
  }
  return mergedLabels
}

export default Labels
