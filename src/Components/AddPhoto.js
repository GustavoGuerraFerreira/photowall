import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
class AddPhoto extends Component {
    render() {
        return (
            <Container>
                <h1>PhotoWall</h1>
                <Container className="form">
                    <Form.Control
                        type="text"
                        placeholder="Link"
                    />
                    <Form.Control
                        type="text"
                        placeholder="Description"
                    />
                <Button>Post</Button>
                </Container>
            </Container>
        )
    }
}

export default AddPhoto