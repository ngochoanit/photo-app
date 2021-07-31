import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputFields';
import SelectField from 'custom-fields/SelectField';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';

PhotoForm.propTypes = {

};

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null
    }
    return (
        <Formik initialValues={initialValues}>
            {formikProps => {
                const { values, errors, touched } = formikProps
                console.log({ values, errors, touched });
                return (
                    <Form>
                        <FastField
                            name='title'
                            component={InputField}

                            label='title'
                            placeholder='Eg:Wow nature ...'>
                        </FastField>

                        <FastField
                            name='categoryId'
                            component={SelectField}

                            label='Category'
                            placeholder="what's your photo category"
                            options={PHOTO_CATEGORY_OPTIONS}>
                        </FastField>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;