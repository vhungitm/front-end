import { useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';

export const FieldCheck = props => {
	const {
		name,
		type,
		value,
		options,
		groupValue,
		setGroupValue,
		...checkProps
	} = props;

	// update group value
	useEffect(() => {
		setGroupValue(
			type === 'radio'
				? groupValue
				: options.length >= 2
				? groupValue
				: Boolean(groupValue)
		);
	}, [groupValue, type, options, setGroupValue]);

	// handle change
	const handleChange = e => {
		let { value: eventValue, checked } = e.target;

		if (checked)
			setGroupValue(
				type === 'radio'
					? eventValue
					: options.length >= 2
					? [...groupValue, eventValue]
					: true
			);
		else
			setGroupValue(
				options.length >= 2
					? groupValue.filter(item => item !== eventValue)
					: false
			);
	};

	console.log({
		groupValue
	});

	// return
	return (
		<FormCheck
			name={name}
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
			{...checkProps}
		/>
	);
};
