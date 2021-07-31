import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss'

Header.propTypes = {

};

function Header(props) {
    return (
        <div className="header">
            <Container>
                <Row className='justify-content-between'>
                    <Col xs='auto'>
                        <a className='header__link header__title' href='https://www.facebook.com/pnh.it/'
                            target='_blank' rel='noopener noreferrer'>
                            <img className="header__link-img" src='https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-1/p320x320/94541117_2709832912475906_8713513338115457024_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=slPUuNT8J2wAX-zILMy&_nc_ht=scontent.fhan5-2.fna&oh=adb42f6461a8673cb6e8ff4d978452ae&oe=612A755F'
                                alt='Pham Ngoc Hoan' ></img>
                            <span className='header__link-label'>Phạm Ngọc Hoàn</span>
                        </a>
                    </Col>
                    <Col xs='auto'>
                        <NavLink exact className='header__link' to='/photos' activeClassName='header__link--active'>
                            Photo App
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;