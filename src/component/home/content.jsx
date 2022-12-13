import React from 'react'
import { Card, Container , Row , Col } from 'react-bootstrap';

function Content() {
  return (
    <Container>
        <Row>
            <Col xl='4'>
                <Card>
                    <Card.Body>
                        Content 1
                    </Card.Body>
                </Card>
            </Col>
            <Col xl='4'>
                <Card>
                    <Card.Body>
                        Content 2
                    </Card.Body>
                </Card>
            </Col>
            <Col xl='4'>
                <Card>
                    <Card.Body>
                        Content 3
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Content