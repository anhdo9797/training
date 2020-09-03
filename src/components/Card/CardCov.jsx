import React, { useState } from 'react';

import './CardCovi.scss';
import Flag from 'react-world-flags';
import { Tooltip, message } from 'antd';

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
    information,
    recovered,
    changeRecovered,
    showCase,
    onClick,
}) => {
    const followNation = () => {
        message.success('Added to watch list');
    };

    const [showCaseToday, setShowCase] = useState(false);

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

    return (
        <div
            className={`CardCov `}
            style={{
                transform: style ? 'none' : null,
                backgroundColor: backgroundColor,
            }}
        >
            <div style={nationStyle}>
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

            {textH3(totalCase, changeCase)}
            {textH3(totalDeaths, changeDeaths)}
            {textH3(recovered, changeRecovered, 'change')}

            <div style={{ width: '5%' }}>
                {style ? (
                    <Tooltip
                        placement="topRight"
                        title={showCase ? 'Hidden case today' : 'Show case today'}
                    >
                        <button onClick={onClick}>
                            {showCaseToday ? (
                                <ion-icon name="eye-outline" />
                            ) : (
                                <ion-icon name="eye-off-outline" />
                            )}
                        </button>
                    </Tooltip>
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

export default CardCov;
