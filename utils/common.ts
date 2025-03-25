const validPhones = [
  '90',
  '91',
  '33',
  '50',
  '93',
  '94',
  '88',
  '95',
  '97',
  '98',
  '99',
  '77',
  '20',
  '88',
  '50',
]
export const isValidPhone = (val: string) => {
  // Remove spaces, parentheses, and dashes
  const phone = val.replace(/[\s)(-]/g, '')

  // Check for the country code '+998'
  if (!phone.startsWith('+998')) {
    return false
  }

  // Extract the phone number without the country code
  const localPhone = phone.substring(4)

  // Validate length and the first two digits of the local phone number
  return (
    localPhone.length === 9 && validPhones.includes(localPhone.substring(0, 2))
  )
}

export const convertToBreadCrumbStr = (str: string) => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
export function formatDateToValid(date: string) {
  if (date) {
    const [day, month, year] = date.split('.')
    return new Date(`${month}/${day}/${year}`)
  }
}

export const richTextPurify = (str: string, count = 120) => {
  const text = str?.replace(/<\/?[^>]+(>|$)|&[^\s]*;/gi, '')
  if (count === 0) {
    return text
  }
  return text?.substring(0, count)
}

export const socialShare = (network: string) => {
  const url = window?.location?.href
  switch (network) {
    case 'telegram':
      return window.open(`https://t.me/share/url?url=${url}`, '_blank')
    case 'twitter':
      return window.open(
        `https://twitter.com/intent/tweet?text=${url}`,
        '_blank'
      )
    case 'facebook':
      return window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        '_blank'
      )
  }
}
export function formatPhoneNumber(number: string) {
  const format = number
    ?.replace(/\D/g, '')
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
  return `+${format && format[1] ? format[1] : ''}
          ${format && format[2] ? format[2] : ''}
          ${format && format[3] ? format[3] : ''}
          ${format && format[4] ? format[4] : ''}
          ${format && format[5] ? format[5] : ''}`
}
