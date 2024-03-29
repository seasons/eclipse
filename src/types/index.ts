export interface PopUpData {
  title?: string
  icon?: JSX.Element
  note?: string
  component?: JSX.Element
  buttonText?: string
  onClose: any
  theme?: "light" | "dark"
  secondaryButtonText?: string
  secondaryButtonOnPress?: () => void
}
