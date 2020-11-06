import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CreateAccountForm from '../components/CreateAccountForm'
import LoginForm from '../components/LoginForm'
import Container from '../components/partials/Container'
import UserKit from '../data/UserKit'

export default function LoginPage() {
    const history = useHistory()
    const searchParams = new URLSearchParams(history.location.search)

    useEffect(() => {
        if (searchParams.has('uid') && searchParams.has('token')) {
            UserKit.activateAccount({
                uid: searchParams.get('uid'),
                token: searchParams.get('token')
            })
            .then(res => {
                console.log(res)
                history.push('/login')
            })
        }
    }, [])

	return (
		<>
            <Container width="600px">
                <LoginForm />
                <CreateAccountForm />
            </Container>
		</>
	)
}
