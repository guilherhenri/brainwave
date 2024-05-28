import { ReactNode } from 'react'

import { ButtonSvg } from '@/assets/svg/ButtonSvg'

interface ButtonProps {
  className?: string
  href?: string
  onClick?: () => void
  children: string | ReactNode
  px?: string
  white?: boolean
}

export function Button({
  className,
  href,
  onClick,
  children,
  px,
  white,
}: ButtonProps) {
  const classes = `button relative inline-flex h-11 items-center justify-center 
    transition-colors hover:text-color-1 ${px ?? 'px-7'} 
    ${white ? 'text-n-8' : 'text-n-1'} ${className ?? ''}`

  const spanClasses = 'relative z-10'

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  )

  return href ? renderLink() : renderButton()
}
