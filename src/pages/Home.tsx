import { useState } from 'react'
import { getAuth, signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import Button from '../components/shared/Button'

function Home() {

	const auth = getAuth()
	const [user] = useAuthState(auth)

	return (
		<div className='max-w-xl'>
			<h1 className='text-4xl md:text-5xl lg:text-6xl font-black'>Stop arguing with your partner about <span className='text-primary'>HOUSE WORKS</span></h1>
		</div>
	)
}

export default Home