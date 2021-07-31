import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/Images'

MainPage.propTypes = {

};

function MainPage(props) {
    return (
        <div className='photo-main'>
            <Banner title="your awesome photos" backgroundUrl={Images.PINK_BG}></Banner>
        </div>
    );
}

export default MainPage;