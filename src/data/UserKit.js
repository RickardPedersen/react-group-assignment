const BASE_URL = "https://frebi.willandskill.eu"
const LOGIN_URL = `${BASE_URL}/api-token-auth/`

export default class UserKit {
    static login(formData) {
        const { email, password } = formData
        return fetch(LOGIN_URL, {
            headers: this.getPublicHeaders(),
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        })
    }

    static getPublicHeaders() {
        return {
            'Content-Type': 'application/json' 
        }
    }

    static getPrivateHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`
        }
    }

    static getToken() {
        return localStorage.getItem('token')
    }

    static setToken(token) {
        return localStorage.setItem('token', token)
    }
}