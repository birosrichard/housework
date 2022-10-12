import React from 'react'
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoutes = () => {
	const auth = getAuth()
	const [user] = useAuthState(auth)

	return !user ? <Navigate to={'/login'} /> : <Outlet />
}

export default ProtectedRoutes