import React, { useState } from 'react';
import style from './style.scss';

import PropTypes from 'prop-types';
import { Input, Row, Button } from 'antd';
import { Route, useHistory, useRouteMatch, Link, Switch } from 'react-router-dom';

const Auth = ({ props, match }) => {
  const [inputSI, setInputSI] = useState({
    userName: '',
    password: '',
  });

  const [inputSU, setInputSU] = useState({
    userName: '',
    password: '',
  });

  const [showFrom, setShowForm] = useState(true);

  const signInForm = () => {
    return (
      <form className="formAuth">
        <label>Username</label>
        <Input
          size="large"
          placeholder="Enter User Name"
          prefix={<ion-icon name="person-circle-outline" />}
          style={{ backgroundColor: 'transparent', margin: '20px 0' }}
          value={inputSI.userName}
          onChange={(text) => setInputSI({ ...inputSI, userName: text.target.value })}
        />
        <label>Password</label>
        <Input.Password
          size="large"
          placeholder="Enter Password"
          prefix={<ion-icon name="lock-closed-outline" />}
          style={{ backgroundColor: 'transparent', margin: '20px 0' }}
          value={inputSI.password}
          onChange={(text) => setInputSI({ ...inputSI, password: text.target.value })}
        />
        <Row justify="space-between">
          <button type="button" className="outline" onClick={() => setShowForm(false)}>
            Sign up for an account
          </button>
          {/* <Link to={`${url}sig-up`}>Sign up for an account</Link> */}
          <button className="outline">Forgot password ?</button>
        </Row>

        <button className="complete">Sign In</button>
      </form>
    );
  };

  const signUpForm = () => {
    return (
      <form className="formAuth">
        <label>Username</label>
        <Input
          size="large"
          placeholder="Enter User Name"
          prefix={<ion-icon name="person-circle-outline" />}
          style={{ backgroundColor: 'transparent', margin: '20px 0' }}
          value={inputSU.userName}
          onChange={(text) => setInputSI({ ...inputSU, userName: text.target.value })}
        />
        <label>Password</label>
        <Input.Password
          size="large"
          placeholder="Enter Password"
          prefix={<ion-icon name="lock-closed-outline" />}
          style={{ backgroundColor: 'transparent', margin: '20px 0' }}
          value={inputSU.password}
          onChange={(text) => setInputSI({ ...inputSU, password: text.target.value })}
        />
        <Row justify="space-between">
          <button className="outline" onClick={() => setShowForm(false)}>
            Already have an account
          </button>
        </Row>

        <button className="complete">Sign Up</button>
      </form>
    );
  };

  return (
    <div className={'background'}>
      <div className="maskCover" />
      {showFrom ? signInForm() : signUpForm()}
    </div>
  );
};

Auth.propTypes = {};

export default Auth;
