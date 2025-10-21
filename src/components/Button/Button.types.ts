export interface ButtonProps {
    children: React.ReactNode
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void

    variant?: 'base' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success'
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    className?: string
    outline?: boolean

    disabled?: boolean
    type?: 'submit' | 'button' | 'reset'
}