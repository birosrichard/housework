import React from 'react'

type AuthWrapperProps = {
	children: React.ReactNode
}
const AuthWrapper = ({children}: AuthWrapperProps) => {
	return (
		<div className='bg-white rounded-md p-5 space-y-5'>
			<div className='space-y-2'>
			<h1 className='text-4xl flex flex-col'>Welcome back to
				<span className='text-primary font-black'>{' '}Houseworks!</span></h1>
			<h2>Sign into your account below</h2>
			</div>
			{children}
		</div>
	)
}

export default AuthWrapper