import { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import Button from '../components/shared/Button'
import LoginForm from '../components/Auth/LoginForm'

const Login = () => {
	const auth = getAuth()
	const navigate = useNavigate()
	const [authing, setAuthing] = useState(false)

	const signInWithGoogle = async () => {
		setAuthing(true)
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth, provider)
			.then(response => {
				console.log(response.user)
				navigate('/')
			})
			.catch(error => {
				console.error(error)
				setAuthing(false)
			})
	}




	return (
		<div>
			<LoginForm />
			<Button onClick={() => signInWithGoogle()} disabled={authing}>
				Sign in with google
			</Button>
		</div>
	)
}

export default Login