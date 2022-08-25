import { useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';
import { useController } from 'react-hook-form';

export const FormFieldRadio = props => {
	const { control, name, value, options, setError, ...radioProps } = props;

	// use controller
	const {
		field: { value: groupValue, onChange, ...fieldProps },
		fieldState: { error, invalid }
	} = useController({ control, name });

	// update error
	useEffect(() => {
		setError({ ...error, type: 'invalid' });
	}, [error, setError]);

	// handle change
	const handleChange = e => {
		const { value: eventValue } = e.target;
		onChange(eventValue);
	};

	// return
	return (
		<FormCheck
			value={value}
			checked={groupValue === value}
			onChange={handleChange}
			{...fieldProps}
			{...radioProps}
			type="radio"
			isInvalid={invalid}
		/>
	);
};
