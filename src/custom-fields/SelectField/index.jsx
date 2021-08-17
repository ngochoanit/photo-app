import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';
SelectField.propTypes = {
    fields: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
};
SelectField.defaultProps = {
    type: 'text',
    label: '',
    disabled: false,
    options: []
}


function SelectField(props) {
    const {
        field, form, options, label, disabled, placeholder,
    } = props;
    const { name, value } = field;
    const { errors, touched } = form
    const showError = errors[name] && touched[name];
    const selectedOption = options.find(option => option.value === value);
    const handleSelectOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            }
        }
        field.onChange(changeEvent)
    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectOptionChange}

                isDisabled={disabled}
                placeholder={placeholder}
                options={options}
                className={showError ? 'is-invalid' : ''}>
            </Select>
            <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
        </FormGroup>
    );
}
export default SelectField;