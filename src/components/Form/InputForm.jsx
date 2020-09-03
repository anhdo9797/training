import React from 'react';
import { Input } from 'antd';

const InputForm = ({ label, placeholder, onChange, value, iconName, type, condition }) => (
    <>
        {type == 'password' ? (
            <>
                <label>{label} </label>
                <Input.Password
                    size="large"
                    placeholder={placeholder}
                    prefix={<ion-icon name={iconName} />}
                    style={{ backgroundColor: 'transparent', margin: '15px 0' }}
                    value={value}
                    onChange={onChange}
                    className={condition != '' && condition ? 'error' : null}
                />
            </>
        ) : (
            <>
                <label>{label} </label>
                <Input
                    size="large"
                    placeholder={placeholder}
                    prefix={<ion-icon name={iconName} />}
                    style={{ backgroundColor: 'transparent', margin: '15px 0' }}
                    value={value}
                    onChange={onChange}
                    className={condition ? 'error' : null}
                />
            </>
        )}
    </>
);

export default InputForm;
