const BASE_URL = "https://frebi.willandskill.eu"
const CUSTOMER_URL = `${BASE_URL}/api/v1/customers/`


export default class CustomerKit {

    static getCustomerList() {
        return fetch(CUSTOMER_URL, {
            headers: this.getPrivateHeaders(),
            method: 'GET',
        })
    }

    static postNewCustomer(formData) {
        return fetch(CUSTOMER_URL, {
            headers: this.getPrivateHeaders(),
            method: 'POST',
            body: JSON.stringify(formData)

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