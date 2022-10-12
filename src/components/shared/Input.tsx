import React from 'react'
import { Controller } from 'react-hook-form'

type InputProps = {
	control: any
	name: string
	errorMessage?: string
	label: string
	disabled?: boolean
	type?: 'text' | 'email' | 'password' | 'number'
}
export const Input = ({
	control,
	name,
	errorMessage,
	label,
	disabled = false,
	type = 'text'
}: InputProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value, name } }) => (
				<div className='flex flex-col relative w-full'>
					<label htmlFor={name} className=''>{label}</label>
					<span className='absolute right-0'>
						{
							errorMessage && <span className='text-error text-xs'>{errorMessage}</span>
						}
					</span>
					<input type={type} disabled={disabled} className={`general-input disabled:bg-gray-200 ${errorMessage ? 'border-error' : ''}`} name={name} value={value} onChange={(e) => onChange(e)} />
				</div>
			)}
		/>
	)
}