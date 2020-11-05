import React from 'react'
import { H1, H2, H6, P, Button } from '../components/partials/GeneralStyles'
import Container from '../components/partials/Container'

export default function HomePage() {
    return (
        <Container>
            <H1 color="danger">THE HELLO</H1>
            <H2 color="success">i am smoler</H2>
            <P color="primary">mr roboto</P>
            <Button background="danger">Danger</Button>
            <Button background="gray3">Warning</Button>
            <Button background="success">Success</Button>
            <Button background="primary">Primary</Button>
        </Container>
    )
}
