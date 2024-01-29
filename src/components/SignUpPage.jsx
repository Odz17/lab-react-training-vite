import React, { useState } from 'react';
import { Input, Label, FormGroup, Form, Col, Alert } from 'reactstrap';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  const [emailValidity, setEmailValidity] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordStrength(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailValidity(isValid);
  };

  const checkPasswordStrength = (value) => {
    
    const isStrong = value.length >= 8;
    setPasswordStrength(isStrong);
  };

  return (
    <div>
      <Form>
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={emailValidity === null ? '' : emailValidity ? 'is-valid' : 'is-invalid'}
            />
            {emailValidity !== null && (
              <Alert color={emailValidity ? 'success' : 'danger'}>
                {emailValidity ? 'Valid email!' : 'Invalid email format!'}
              </Alert>
            )}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className={passwordStrength === null ? '' : passwordStrength ? 'is-valid' : 'is-invalid'}
            />
            {passwordStrength !== null && (
              <Alert color={passwordStrength ? 'success' : 'danger'}>
                {passwordStrength ? 'Strong password!' : 'Weak password!'}
              </Alert>
            )}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="nationality" sm={2}>Nationality</Label>
          <Col sm={10}>
            <Input
              type="select"
              name="nationality"
              id="nationality"
              value={nationality}
              onChange={handleNationalityChange}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <p>
              {nationality === 'en' ? 'Hello' : nationality === 'de' ? 'Hallo' : 'Bonjour'}
            </p>
            <p>Your email is {email}</p>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignupPage;
