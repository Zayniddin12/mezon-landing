export interface IInput {
  id: string
  min?: number | string
  max?: number | string
  minlength?: number | string
  maxlength?: number | string
  inputClass?: string
  label?: string
  placeholder?: string
  wrapperClass?: string
  error?: string
  loading?: boolean
  type?: string
  inputmode?:
    | 'search'
    | 'text'
    | 'email'
    | 'tel'
    | 'url'
    | 'none'
    | 'numeric'
    | 'decimal'
    | undefined
  keyup?: KeyboardEvent
  input?: Event
  required?: boolean
}
