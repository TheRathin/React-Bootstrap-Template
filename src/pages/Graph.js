import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const styles = {
  root: {
    marginTop: 30
  }
}

const Graph = () => {
  return (
    <div style={styles.root}>
      <Container>
        <Row>
          <Col md={12}>
            <h1>Graph Page</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Graph
