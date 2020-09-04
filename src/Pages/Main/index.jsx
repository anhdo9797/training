import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Input } from 'antd';

import './style.scss';
import Loading from '../../components/Loading';
import actionFetchCov from '../../store/covi/action';
import Flag from 'react-world-flags';
import CardCov from '../../components/Card/CardCov';
import LoadingContainer from '../../components/Loading/loading';

const formatNumber = (number) => String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,');

const Main = (props) => {
    //redux
    let dispatch = useDispatch();
    const loading = useSelector((state) => state.cov.loading);
    const data = useSelector((state) => state.cov.data);
    const total = data
        ? {
              totalCase: formatNumber(data[data.length - 1].total_cases),
              deaths: formatNumber(data[data.length - 1].deaths),
              recovered: formatNumber(data[data.length - 1].recovered),
          }
        : {};

    //state
    const [scroll, setScroll] = useState({
        prevScrollpos: window.pageYOffset,
        visible: true,
    });

    const [showCase, setShowCase] = useState(false);
    const [showTotal, setShowTotal] = useState(false);
    const [visible, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(actionFetchCov.fetchData());
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const { prevScrollpos } = scroll;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos ? true : false;

        setScroll({
            prevScrollpos: currentScrollPos,
            visible,
        });
    };

    return (
        <div className="main">
            <header>
                <div style={{ margin: 'auto auto', width: '100%' }} className="container">
                    <Input.Search
                        placeholder="Search nation"
                        onSearch={(value) => console.log(value)}
                        style={{ height: 50 }}
                    />
                </div>
            </header>
            {200 - scroll.prevScrollpos > 0 ? null : (
                // on Show when scroll down => hidden header
                <div className="fixedCard" style={{ top: 0 }}>
                    <div className="container">
                        <CardCov
                            name={'Nation'}
                            changeCase={''}
                            totalCase={'Total Case'}
                            totalDeaths={'Total Deaths'}
                            changeDeaths={''}
                            recovered={'Recovered'}
                            style="noneHove"
                            showCase={showCase}
                            backgroundColor={'#446d67'}
                            getShowCase={() => setShowCase(!showCase)}
                        />
                    </div>
                </div>
            )}
            {loading ? <LoadingContainer /> : null}
            {data && data.length > 0 ? (
                <div className="container">
                    <div className="wrapCard" style={{ marginBottom: showTotal ? 60 : 20 }}>
                        <CardCov
                            name={'Nation'}
                            changeCase={''}
                            totalCase={'Total Case'}
                            totalDeaths={'Total Deaths'}
                            changeDeaths={''}
                            recovered={'Recovered'}
                            style="noneHove"
                            backgroundColor={'#fff'}
                            showCase={showCase}
                            getShowCase={() => setShowCase(!showCase)}
                        />

                        {data.slice(0, data.length - 1).map((e, i) => (
                            <CardCov
                                key={i}
                                name={e.name}
                                changeCase={formatNumber(e.changeCase)}
                                totalCase={formatNumber(e.totalCase)}
                                totalDeaths={formatNumber(e.totalDeaths)}
                                changeDeaths={formatNumber(e.deaths)}
                                flag={e.flag}
                                recovered={formatNumber(e.recovered)}
                                backgroundColor="#fff"
                                changeRecovered={formatNumber(e.changeRecovered)}
                                showCase={showCase}
                                visible={visible}
                                hiddenModal={() => setShowModal(false)}
                                showModal={() => setShowModal(true)}
                            />
                        ))}
                    </div>
                </div>
            ) : null}

            <div className="fixedCard" style={{ bottom: 0, backgroundColor: 'transparent' }}>
                <div style={{ backgroundColor: '#F6F7F9', backgroundColor: 'transparent' }}>
                    <button onClick={() => setShowTotal(!showTotal)} style={{ marginLeft: '3vw' }}>
                        {showTotal ? (
                            <ion-icon name="chevron-down-outline" />
                        ) : (
                            <ion-icon name="chevron-up-outline" />
                        )}
                    </button>
                </div>

                {showTotal ? (
                    <div style={{ backgroundColor: '#446d67' }}>
                        <div className="container totalAllCase">
                            <CardCov
                                name={'Total'}
                                changeCase={''}
                                changeDeaths={''}
                                totalCase={total.totalCase}
                                totalDeaths={total.deaths}
                                recovered={total.recovered}
                                style="noneHove"
                                showCase={showCase}
                                backgroundColor={'#446d67'}
                                hiddenIcon={true}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

Main.propTypes = {};

export default Main;
