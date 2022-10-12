import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../shared/Input'
import Button from '../shared/Button'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {

	const auth = getAuth()
	const navigate = useNavigate();

	const validationSchema = yup.object().shape({
		email: yup.string().email('Email has incorect format').required('Email is required'),
		password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
	})

	const { control, handleSubmit, formState: { errors }, } = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		}
	})

	const onSubmit = async (data: FormValues) => {
		console.log(data)

		// createUserWithEmailAndPassword(auth, data.email, data.password)
		// 	.then((userCredential) => {
		// 		console.log(userCredential)
		// 		navigate('/')
		// 	})
		// 	.catch((error) => {
		// 		console.error(error)
		// 	})
	}

	return (
		<div className=''>
			<form className='flex flex-col  space-y-5' onSubmit={handleSubmit(onSubmit)}>
				<Input name='email' label={'Email'} errorMessage={errors && errors['email']?.message} control={control} />
				<Input name='password' label={'Password'} errorMessage={errors && errors['password']?.message} control={control} type={'password'} />
				<Button type="submit">Login</Button>
			</form>
			<div className='flex'>
				<p>Don&lsquo;t have an account? <span className='text-primary font-bold cursor-pointer'>{' '}Register</span></p>
			</div>
		</div>
	)
}

export default LoginForm


type FormValues = {
	email: string
	password: string
}