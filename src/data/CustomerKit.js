const BASE_URL = "https://frebi.willandskill.eu";
const CUSTOMER_URL = `${BASE_URL}/api/v1/customers/`;

export default class CustomerKit {
  static getCustomerList() {
    return fetch(CUSTOMER_URL, {
      headers: this.getPrivateHeaders(),
      method: "GET",
    });
  }

  static postNewCustomer(formData) {
    const {
      name,
      organisationNr,
      vatNr,
      paymentTerm,
      reference,
      website,
      email,
      phoneNumber,
		} = formData

		const payload = {
      name,
			...organisationNr && {organisationNr},
			...vatNr && {vatNr},
			...paymentTerm && {paymentTerm},
			...reference && {reference},
			...website && {website},
			...email && {email},
			...phoneNumber && {phoneNumber},
		}

    return fetch(CUSTOMER_URL, {
      headers: this.getPrivateHeaders(),
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  static editCustomer(formData, customerId) {
    return fetch(`${CUSTOMER_URL}${customerId}/`, {
      headers: this.getPrivateHeaders(),
      method: "PATCH",
      body: JSON.stringify(formData),
    });
  }

  static deleteCustomer(customerId) {
    return fetch(`${CUSTOMER_URL}${customerId}/`, {
      headers: this.getPrivateHeaders(),
      method: "DELETE",
    });
  }

  static getPublicHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  static getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    };
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static setToken(token) {
    return localStorage.setItem("token", token);
  }
}
