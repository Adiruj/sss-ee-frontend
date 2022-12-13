import React from 'react'
import { Card, Container } from 'react-bootstrap';

import '../../assets/css/home.css'

function Cover() {
    return (
        <Container>
            <div>
                <Card className='cover container'>
                    <Card.Body>
                        <Card.Title><h2>MAIN MENU</h2></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Cover