import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner';

AddEdit.propTypes = {

};

function AddEdit(props) {
    return (
        <div className='photo-edit'>
            <Banner title='pick your amazing photo'></Banner>
        </div>
    );
}

export default AddEdit;