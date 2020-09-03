import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input } from 'antd';

import './style.scss';
import Loading from '../../components/Loading';
import actionFetchCov from '../../store/covi/action';
import Flag from 'react-world-flags';
import CardCov from '../../components/Card/CardCov';
import LoadingContainer from '../../components/Loading/loading';

const Main = (props) => {
    //redux
    let dispatch = useDispatch();
    const loading = useSelector((state) => state.cov.loading);
    const data = useSelector((state) => state.cov.data);

    //state
    const [scroll, setScroll] = useState({
        prevScrollpos: window.pageYOffset,
        visible: true,
    });
    const [showCase, setShowCase] = useState(false);

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

    const onClick = async () => {
        dispatch(actionFetchCov.fetchStart());
        dispatch(actionFetchCov.fetchData());
    };

    const onClickCard = () => {
        console.log('========onClick=================');

        setShowCase(!showCase);
    };

    const formatNumber = (number) => String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,');
    return (
        <div className="main">
            <header>
                <Input.Search
                    placeholder="Search nation"
                    onSearch={(value) => console.log(value)}
                    style={{ maxWidth: 1140, height: 50, margin: 'auto auto', color: '#000' }}
                />

                {/* <button onClick={() => setShowCase(!showCase)}>
                    {showCase ? 'Hidden case today' : 'Show case today'}
                </button> */}
            </header>
            {200 - scroll.prevScrollpos > 0 ? null : (
                <div
                    style={{
                        position: 'fixed',
                        width: '100%',
                        zIndex: 1,
                        top: 0,
                        // height header - scroll.prevScrollpos
                    }}
                >
                    <div className="container">
                        <CardCov
                            name={'Nation'}
                            changeCase={''}
                            totalCase={'Total Case'}
                            totalDeaths={'Total Deaths'}
                            changeDeaths={''}
                            recovered={'Recovered'}
                            style="noneHove"
                            backgroundColor={200 - scroll.prevScrollpos <= 0 ? '#7db5ad' : '#fff'}
                        />
                    </div>
                </div>
            )}
            {loading ? <LoadingContainer /> : null}

            {data && data.length > 0 ? (
                <div className="container">
                    <div className="wrapCard">
                        <CardCov
                            name={'Nation'}
                            changeCase={''}
                            totalCase={'Total Case'}
                            totalDeaths={'Total Deaths'}
                            changeDeaths={''}
                            recovered={'Recovered'}
                            style="noneHove"
                            backgroundColor={200 - scroll.prevScrollpos <= 0 ? '#cfcfcf' : '#fff'}
                        />

                        {data
                            ? data.map((e, i) => (
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
                                      onClick={onClickCard}
                                  />
                              ))
                            : null}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

Main.propTypes = {};

export default Main;
