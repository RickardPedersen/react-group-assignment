import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomerContext } from "../contexts/CustomerContext";
import { H3, P, Div, Button } from "../components/partials/GeneralStyles";
import Container from "../components/partials/Container";
import CustomerKit from "./../data/CustomerKit";

export default function CustomerDetailPage() {
  const { id } = useParams();

  const { customerDataList } = useContext(CustomerContext);
  const [customer, setCustomer] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false)

  const handleDelete = () => {
    // CustomerKit.deleteCustomer(id)
    //   .then(() => {
    //     // redirect
    //   })
    //   .catch((e) => console.error(e));
  };

  const handleEdit = () => {
    // CustomerKit.editCustomer(payload, id);
    // render changes
  };

  useEffect(() => {
    const index = customerDataList.findIndex((customer) => customer.id == id);
    setCustomer(customerDataList[index]);
    console.log(index);
  }, []);

  return (
    <Container>
      {customer && (
        <Div background="gray1" padding="1em" borderRadius="borderRadius">
          <H3>{customer.name}</H3>

          {Object.entries(customer).map((entry, index) => {
            if (typeof entry[1] == "string") {
              return <P key={index}>{`${entry[0]}: ${entry[1]}`}</P>;
            }
          })}


        <Div flex>
            <Button 
                onClick={handleDelete} 
                background="danger"
                width="50%"
                margin="0 m 0 0"
            >Delete</Button>

            <Button 
                onClick={handleEdit} 
                background="success"
                width="50%"
            >Edit</Button>
          </Div>
        </Div>


      )}
    </Container>
  );
}
