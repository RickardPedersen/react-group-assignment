import React, { useContext } from 'react'
import { CustomerContext } from '../contexts/CustomerContext'

export default function CustomerDetailPage() {
    const { 
        customerDataList, 
        setCustomerDataList 
    } = useContext(CustomerContext)
    return (
        <div>

        </div>
    )
}
