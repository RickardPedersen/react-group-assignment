import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CustomerContext } from '../contexts/CustomerContext'
import { H3, P, Div } from '../components/partials/GeneralStyles'
import Container from '../components/partials/Container'
import Modal from '../components/partials/Modal'


export default function CustomerDetailPage() {
    const {id} = useParams();

    const { 
        customerDataList, 
    } = useContext(CustomerContext)
    const [customer, setCustomer] = useState(null)
    
    useEffect(() => {
        const index = customerDataList.findIndex(customer => customer.id == id);
        setCustomer(customerDataList[index]);
    }, [])
    
    return (
        <Container>
            <Modal open={true} width="400px"></Modal>
            {customer &&
                <Div background="gray1" padding="1em" borderRadius="borderRadius">
                    <H3>{customer.name}</H3>
                    {Object.entries(customer).map((entry, i) => {
                        if(typeof entry[1] == 'string') {
                            return <P key={i}>{`${entry[0]}: ${entry[1]}`}</P>
                        }
                    })}              
                </Div>
            }
        </Container>
    )
}
