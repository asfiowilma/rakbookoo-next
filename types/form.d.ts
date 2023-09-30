interface RakInputProps {
  name: string
  defaultValue?: string | number
  placeholder?: string
  label?: string
  validation?: RegisterOptions
  cols?: number
  rows?: number
  leftAdornment?: ReactNode
  rightAdornment?: ReactNode
  className?: string
  errors?: FieldErrors
  [key: string]: any
}
