import { FormCheck } from 'react-bootstrap';

export const FieldSwitch = props => {
	const { groupValue, setGroupValue, ...switchProps } = props;

	// handle change
	const handleChange = e => {
		const { checked } = e.target;
		setGroupValue(checked);
	};

	// return
	return (
		<FormCheck
			value={groupValue}
			checked={groupValue}
			onChange={handleChange}
			{...fieldProps}
			{...switchProps}
			type="switch"
			isInvalid={invalid}
		/>
	);
};
