import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type ButtonProps<T extends ElementType> = {
  isLoading?: boolean
  isCompleted?: boolean
  disabled?: boolean
  children: ReactNode
} & ComponentPropsWithoutRef<T>

// 💡 In generic the HTML type of component will be specified. And by default it is button
const Button = <T extends ElementType = 'button'>({
  renderAs,
  isLoading,
  isCompleted,
  children,
  ...props
}: ButtonProps<T>): JSX.Element => {
  return (
    <button
      {...props}
      className={`bg-primary text-white p-2 rounded-md w-fit px-6 ${isLoading ? 'bg-gray-200' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button