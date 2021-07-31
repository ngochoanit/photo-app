import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import './AddEdit.scss'

AddEdit.propTypes = {

};

function AddEdit(props) {
    return (
        <div className='photo-edit'>
            <Banner title='pick your amazing photo'></Banner>
            <div className="photo-edit__form">
                <PhotoForm></PhotoForm>
            </div>
        </div>
    );
}

export default AddEdit;