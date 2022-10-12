import React from 'react'
import Button from '../shared/Button'
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

	const auth = getAuth()
	const [user] = useAuthState(auth)
	const navigate = useNavigate()


	return (
		<header className='mb-8'>
			<nav className='flex justify-between items-center'>
				<Link to={'/'}>
					<img src={'/logo.webp'} alt='logo' className='h-16 w-16 mt-5' />
				</Link>
				<ul className='flex items-center space-x-3'>
					<li>
						<Link to={'/household'}>
							<span className='text-black cursor-pointer'>Household</span>
						</Link>
					</li>
					{
						user ? (<Button onClick={() => signOut(auth)}>
							Sign Out
						</Button>) : (
							<Button onClick={() => navigate('/login')}>Login</Button>
						)
					}

				</ul>
			</nav>
		</header>
	)
}

export default Navbar