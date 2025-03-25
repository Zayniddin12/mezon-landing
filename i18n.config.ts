import uz from './locales/uz.json'
import en from './locales/en.json'
import ru from './locales/ru.json'

export default defineI18nConfig(() => ({
  legacy: true,
  locale: 'en',
  messages: {
    ru,
    uz,
    en,
  },
}))
