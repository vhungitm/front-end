import { FormCheck } from 'react-bootstrap';

export const FieldRadio = props => {
	const { name, value, options, groupValue, setGroupValue, ...radioProps } =
		props;

	// handle change
	const handleChange = e => {
		const { value: eventValue } = e.target;
		setGroupValue(eventValue);
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
		/>
	);
};
