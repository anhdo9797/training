import React, { useState } from 'react';

import './CardCovi.scss';
import Flag from 'react-world-flags';
import { Tooltip, message, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';

const nationStyle = {
    width: '35%',
    display: 'flex',
    margin: 0,
    height: '100%',
    alignItems: 'center',
};

const CardCov = ({
    flag,
    totalCase,
    totalDeaths,
    changeCase,
    changeDeaths,
    name,
    style,
    backgroundColor,
    recovered,
    changeRecovered,
    showCase,
    getShowCase,
    hiddenIcon,
    showModal,
    hiddenModal,
    visible,
}) => {
    const followNation = () => {
        message.success('Added to watch list');
        // setVisible(false);
    };

    const textH3 = (text, textSmall, change) => (
        <h3
            style={{
                width: '15%',
                fontWeight: style ? 'bold' : 500,
                color: backgroundColor === '#fff' ? 'black' : 'white',
            }}
        >
            {text}
            {showCase && textSmall ? (
                <span style={{ color: change ? 'blue' : 'red', fontSize: 12 }}>
                    <ion-icon name="arrow-up-outline" />
                    {textSmall}
                </span>
            ) : null}
        </h3>
    );

    const buttonShowCase = () => (
        <Tooltip title={showCase ? 'Hidden case today' : 'Show case today'} placement="bottom">
            <button
                onClick={getShowCase}
                style={{ color: backgroundColor === '#fff' ? 'black' : 'white' }}
            >
                {showCase ? <ion-icon name="eye-outline" /> : <ion-icon name="eye-off-outline" />}
            </button>
        </Tooltip>
    );

    const wrapNation = () => (
        <div style={nationStyle} className="nation">
            <Flag code={flag} width="40px" height="30px" />
            <h3
                style={{
                    fontWeight: 'bold',
                    color: backgroundColor === '#fff' ? 'black' : 'white',
                }}
            >
                {name}
            </h3>
        </div>
    );

    return (
        <div
            onClick={showModal}
            className="CardCov"
            style={{
                transform: style ? 'none' : null,
                backgroundColor: backgroundColor,
            }}
        >
            {wrapNation()}
            {textH3(totalCase, changeCase)}
            {textH3(totalDeaths, changeDeaths)}
            {textH3(recovered, changeRecovered, 'change')}

            <div style={{ width: '5%' }}>
                {hiddenIcon ? null : style ? (
                    buttonShowCase()
                ) : (
                    <Tooltip placement="topRight" title={'Follow nation'}>
                        <button onClick={followNation}>
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </button>
                    </Tooltip>
                )}
            </div>
        </div>
    );
};

CardCov.prototype = {};

export default CardCov;
