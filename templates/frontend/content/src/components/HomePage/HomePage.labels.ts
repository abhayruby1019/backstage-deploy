import Labels, { getLabelByLocale } from '@/utils/labels'

const labels: Labels = {
  default: {
    title: 'Poonawala Fincop Ltd - demo',
  },
}

export default (locale: string) => getLabelByLocale(labels, locale)
