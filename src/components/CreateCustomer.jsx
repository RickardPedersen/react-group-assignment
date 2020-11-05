import React, {useState} from 'react'

import {Button} from "./partials/GeneralStyles"
import Modal from './partials/Modal'


export default function CreateCustomer() {

    const [isOpen, setIsOpen] = useState(false)

    
    function handleOnClick(){
        setIsOpen(true)
    }
    return (
        <div>
            <Button onClick={handleOnClick}>Add Customer</Button>
            {isOpen &&  <Modal open={isOpen}></Modal>}
        </div>
    )
}
