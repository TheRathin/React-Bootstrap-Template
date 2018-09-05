import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

const styles = {
    root: {
        marginTop: 30
    }
}

class Home extends Component {
    render() {
        return (
            <div style={styles.root}>
                <Container>
                    <Row>
                        <Col md={12}>
                        <h1>Home Page</h1>
                        </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Home;