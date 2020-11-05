import React, { useState, useContext } from 'react'
import { Button } from "./partials/GeneralStyles"
import Modal from './partials/Modal'
import FormComponent from '../components/partials/FormComponent'
import InputComponent from '../components/partials/InputComponent'
import CustomerKit from '../data/CustomerKit'


export default function CreateCustomer(props) {
    const inputNameList = ["name", "organisationNr", "vatNr", "reference", "website", "email", "phoneNumber"]

    const [formData, setFormData] = useState(
        {
            name: "",
            organisationNr: "",
            vatNr: "",
            reference: "",
            website: "",
            email: "",
            phoneNumber: ""
        })
    const [isOpen, setIsOpen] = useState(false)

    function handleOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleOnSubmit() {
        if(formData.name.length > 0){
        CustomerKit.postNewCustomer(formData)
            .then((res) => res.json())
            .then((data) => {
                setFormData({
                    name: "",
                    organisationNr: "",
                    vatNr: "",
                    reference: "",
                    website: "",
                    email: "",
                    phoneNumber: ""
                })
                props.fetchCustomers()
            })
        }

        setIsOpen(false)

    }

    function handleOnClick() {
        setIsOpen(true)
    }
    return (
        <div>
            <Button onClick={handleOnClick}>Add Customer</Button>
            {isOpen && <Modal open={isOpen}>
                <FormComponent handleOnSubmit={handleOnSubmit}>
                    {inputNameList.map((inputNameItem, index) => {
                        return (
                            <InputComponent
                                key={index}
                                type={'text'}
                                name={inputNameItem}
                                value={formData[inputNameItem]}
                                placeholder={`enter ${inputNameItem}`}
                                handleOnChange={handleOnChange} />)

                    })}
                    {Object.keys(formData).map((inputNameItem, index) => {
                        return (
                            <InputComponent
                                key={index}
                                type={'text'}
                                name={inputNameItem}
                                value={formData[inputNameItem]}
                                placeholder={`enter ${inputNameItem}`}
                                handleOnChange={handleOnChange} />)

                    })}

                </FormComponent>
            </Modal>}
        </div>
    )
}
