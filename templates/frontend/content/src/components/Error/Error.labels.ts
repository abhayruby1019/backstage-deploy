import Labels, { getLabelByLocale } from '@/utils/labels'

const labels: Labels = {
  default: {
    notFound: 'Page Not Found',
    systemFailure: 'Technical Error',
  },
}

export default (locale: string) => getLabelByLocale(labels, locale)
