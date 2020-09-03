import React, { useState } from 'react';
import { Row, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import actionAuth from '../../store/auth/action';

import Loading from '../../components/Loading';
import InputForm from '../../components/Form/InputForm';
import { checkPassword } from '../../tools/checkpass';
import { useHistory } from 'react-router-dom';

const Auth = ({ props, match }) => {
    const [inputSI, setInputSI] = useState({
        userName: '',
        password: '',
    });
    const [inputSU, setInputSU] = useState({
        userName: '',
        password: '',
        confirmPass: '',
    });
    const [showFrom, setShowForm] = useState(true);
    let history = useHistory();

    // redux
    let loading = useSelector((state) => state.auth.loading);
    let dispatch = useDispatch();

    const signIn = async () => {
        let { userName, password } = inputSI;

        if (userName === '' || password === '' || checkPassword(password) == false) {
            message.error('Please enter the correct information');
        } else {
            let payload = { email: inputSI.userName + '@gmail.com', password, history };
            dispatch(actionAuth.login(payload));
            let email = userName + '@gmail.com';
        }
    };

    const signInForm = () => {
        return (
            <div className="formAuth showFormSignIn">
                <InputForm
                    placeholder="Enter User Name"
                    iconName="person-circle-outline"
                    label="Username"
                    value={inputSI.userName}
                    onChange={(text) => setInputSI({ ...inputSI, userName: text.target.value })}
                />
                <InputForm
                    type="password"
                    placeholder="Enter Password"
                    iconName="lock-closed-outline"
                    label="Password"
                    value={inputSI.password}
                    onChange={(text) => setInputSI({ ...inputSI, password: text.target.value })}
                    condition={
                        inputSI.password.length > 0 && checkPassword(inputSI.password) === false
                    }
                />
                <Row justify="space-between">
                    <button type="button" className="outline" onClick={() => setShowForm(false)}>
                        Sign up for an account
                    </button>
                    <button className="outline">Forgot password ?</button>
                </Row>
                <Loading loading={loading} />
                <button onClick={signIn} className="complete">
                    Sign In
                </button>
            </div>
        );
    };

    const signUp = () => {
        let { userName, password, confirmPass } = inputSU;

        if (
            userName === '' ||
            password === '' ||
            checkPassword(password) == false ||
            confirmPass !== password
        ) {
            message.error('Please enter the correct information');
        } else {
            let payload = { email: userName + '@gmail.com', password, callback: setData };
            dispatch(actionAuth.signUp(payload));
        }
    };

    const setData = () => {
        //change => sign in form
        setInputSI({ ...inputSI, userName: inputSU.userName });
        setInputSU({ ...inputSU, password: '', confirmPass: '' });
        setShowForm(true);
    };

    const signUpForm = () => {
        return (
            <div className="formAuth showFomSignUp">
                <InputForm
                    placeholder="Enter User Name"
                    iconName="person-circle-outline"
                    label="Username"
                    value={inputSU.userName}
                    onChange={(text) => setInputSU({ ...inputSU, userName: text.target.value })}
                />
                <InputForm
                    type="password"
                    placeholder="Enter Password"
                    iconName="lock-closed-outline"
                    label="Password"
                    value={inputSU.password}
                    onChange={(text) => setInputSU({ ...inputSU, password: text.target.value })}
                    condition={
                        inputSU.password.length > 0 && checkPassword(inputSU.password) === false
                    }
                />

                <InputForm
                    type="password"
                    placeholder="Confirm password"
                    iconName="lock-open-outline"
                    label="Confirm password"
                    value={inputSU.confirmPass}
                    onChange={(text) => setInputSU({ ...inputSU, confirmPass: text.target.value })}
                    condition={
                        inputSU.confirmPass.length > 0 && inputSU.password !== inputSU.confirmPass
                    }
                />
                <Row justify="space-between">
                    <button className="outline" onClick={() => setShowForm(true)}>
                        Already have an account
                    </button>
                </Row>
                <Loading loading={loading} />
                <button className="complete" onClick={signUp}>
                    Sign Up
                </button>
            </div>
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
