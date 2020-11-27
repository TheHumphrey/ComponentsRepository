import React, { ReactElement } from 'react';

import { Form, Button } from 'react-bootstrap';

import LoginComponentStyle from './style';

const LoginComponent = (): ReactElement => {
  return (
    <LoginComponentStyle>
      <h5>Way Data Solution</h5>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">Yay</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </LoginComponentStyle>
  );
};

export default LoginComponent;
