const BASE_URL = 'https://frebi.willandskill.eu'
const LOGIN_URL = `${BASE_URL}/api-token-auth/`
const CREATE_ACCOUNT_URL = `${BASE_URL}/auth/users/create/`
const ACTIVATE_ACCOUNT_URL = `${BASE_URL}/auth/users/activate/`
const USER_INFO_URL = `${BASE_URL}/api/v1/me`
const VERIFY_URL = `${BASE_URL}/api-token-verify/`

export default class UserKit {
	static createAccount(formData) {
		const {
			email,
			password,
			firstName,
			lastName,
			organisationName,
			organisationKind,
		} = formData

		return fetch(CREATE_ACCOUNT_URL, {
			headers: this.getPublicHeaders(),
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
				firstName,
				lastName,
				organisationName,
				organisationKind,
			}),
		})
	}

	static activateAccount(activation) {
		const { uid, token } = activation
		return fetch(ACTIVATE_ACCOUNT_URL, {
			headers: this.getPublicHeaders(),
			method: 'POST',
			body: JSON.stringify({
				uid,
				token,
			}),
		})
	}

	static login(formData) {
		const { email, password } = formData
		return fetch(LOGIN_URL, {
			headers: this.getPublicHeaders(),
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
		})
	}

	static getMe() {
		return fetch(USER_INFO_URL, {
			headers: this.getPrivateHeaders(),
		})
	}

	static getPublicHeaders() {
		return {
			'Content-Type': 'application/json',
		}
	}

	static getPrivateHeaders() {
		return {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${this.getToken()}`,
		}
	}

	static getToken() {
		return localStorage.getItem('token')
	}

	static setToken(token) {
		return localStorage.setItem('token', token)
	}

	static removeToken() {
		return localStorage.removeItem('token')
	}

	static verifyToken() {
		return fetch(VERIFY_URL, {
			headers: this.getPublicHeaders(),
			method: 'POST',
			body: JSON.stringify({
				token: this.getToken(),
			}),
		})
	}
}
