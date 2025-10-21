import React from 'react'
import type { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ( {children, onClick, className, variant = 'base', icon, iconPosition = 'left', outline=false} ) => {
    
    const classes = [
        styles.base,
        styles[variant],
        styles[iconPosition],
        outline ? styles.outline : '',
        className
        
    ].filter(Boolean).join(" ")

    return (
        <button 
            className = {classes} 
            onClick = {onClick}
            > 
                { icon }
                { children }        
        </button>
    )
}

export default Button
