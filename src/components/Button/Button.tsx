import React from 'react'
import type { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ( {children, onclick, className, variant = 'base', size = 'm', icon, outline=false} ) => {
    
    const classes = [
        styles.base,
        styles[variant],
        styles[size],
        outline ? styles.outline : '',
        className
        
    ].filter(Boolean).join(" ")

    return (
        <button 
            className = {classes} 
            onClick = {onclick}
            > 
                { icon }
                { children }        
        </button>
    )
}

export default Button
