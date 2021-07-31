import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
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
        field, options, label, disabled, placeholder,
    } = props;
    const { name, value } = field;
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
                options={options}>

            </Select>
        </FormGroup>
    );
}
export default SelectField;