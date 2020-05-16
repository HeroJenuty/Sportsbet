import React from 'react';
import MainSection from '../components/MainSection';
import PromoContainer from '../components/promo-banner/PromoContainer';
import HeaderLogo from '../components/HeaderLogo';
import Categories from '../components/Categories';
import Popular from '../components/Popular';

class Home extends React.Component {


    render() {
        return <>
            <div className="row">
                <div className="col">
                    <HeaderLogo />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PromoContainer />
                </div>
            </div>
            <div className="sport-categories">
                Sport Categories
            </div>
            <div className="row">
                <div className="col">
                    <Categories />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Popular />
                </div>
            </div>
        </>
    }
}



export default Home;


