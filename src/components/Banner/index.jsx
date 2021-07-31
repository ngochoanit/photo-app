import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss'

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string
};
Banner.defaultProps = {
    title: '',
    backgroundUrl: ''
}

function Banner(props) {
    const { title, backgroundUrl } = props;
    const bannerStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {}
    return (
        <div>
            <section className='banner' style={bannerStyle}>
                <h1 className='banner__title'>{title}</h1>
            </section>
        </div>
    );
}

export default Banner;