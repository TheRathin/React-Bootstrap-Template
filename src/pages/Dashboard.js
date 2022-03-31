import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const styles = {
  root: {
    marginTop: 30
  }
}

const Dashboard = () => {
  return (
    <div style={styles.root}>
      <Container>
        <Row>
          <Col md={12}>
            <h1>Dashboard</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
