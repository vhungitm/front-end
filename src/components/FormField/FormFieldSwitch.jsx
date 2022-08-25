import { useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';
import { useController } from 'react-hook-form';

export const FormFieldSwitch = props => {
	const { control, name, setError, ...switchProps } = props;

	// use controller
	const {
		field: { value, onChange, ...fieldProps },
		fieldState: { invalid, error }
	} = useController({ control, name });

	// update error
	useEffect(() => {
		setError({ ...error, type: 'invalid' });
	}, [error, setError]);

	// handle change
	const handleChange = e => {
		const { checked } = e.target;
		onChange(checked);
	};

	// return
	return (
		<FormCheck
			checked={value}
			onChange={handleChange}
			{...fieldProps}
			{...switchProps}
			type="switch"
			isInvalid={invalid}
		/>
	);
};
