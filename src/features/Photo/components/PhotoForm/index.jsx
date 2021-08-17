import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputFields';
import SelectField from 'custom-fields/SelectField';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import * as Yup from 'yup'
import { Button, FormGroup } from 'reactstrap';
import RandomPhotoField from 'custom-fields/RandomPhotoField';

PhotoForm.propTypes = {

};

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('this file is required').nullable(),
        categoryId: Yup.number().required(),
        photoId: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('this file is required'),
            otherwise: Yup.string().notRequired()
        })
    })
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={value => console.log(value)}>
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
                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />
                        <FormGroup>
                            <Button type="submit" color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;