import { useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';
import { useController } from 'react-hook-form';

export const FormFieldCheck = props => {
	const { control, name, type, value, options, setError, ...checkProps } =
		props;

	// use controller
	const {
		field: { value: groupValue, onChange, ...fieldProps },
		fieldState: { error, invalid }
	} = useController({ control, name });

	// update value
	useEffect(() => {
		onChange(
			type === 'radio'
				? groupValue
				: options.length >= 2
				? groupValue
				: Boolean(groupValue)
		);
	}, [groupValue, type, options.length, onChange]);

	// update error
	useEffect(() => {
		setError({ ...error, type: 'invalid' });
	}, [error, setError]);

	// handle change
	const handleChange = e => {
		let { value: eventValue, checked } = e.target;

		if (checked)
			onChange(
				type === 'radio'
					? eventValue
					: options.length >= 2
					? [...groupValue, eventValue]
					: true
			);
		else
			onChange(
				options.length >= 2
					? groupValue.filter(item => item !== eventValue)
					: false
			);
	};

	// return
	return (
		<FormCheck
			type={type}
			value={
				type === 'radio' ? value : options.length >= 2 ? value : Boolean(value)
			}
			checked={
				type === 'radio'
					? groupValue === value
					: options.length >= 2
					? groupValue.findIndex(item => item === value) >= 0
					: groupValue
			}
			onChange={handleChange}
			{...fieldProps}
			{...checkProps}
			isInvalid={invalid}
		/>
	);
};
