import { FieldFeedback, FieldLabel } from 'components/Field';
import { useEffect, useState } from 'react';
import { FormSelect } from 'react-bootstrap';

export const FieldSwitchGroup = props => {
	const {
		label,
		element: { name, value, checked, ...elementProps },
		error,
		...groupProps
	} = props;

	// group valud
	const [groupValue, setGroupValue] = useState(false);

	useEffect(() => {
		if (value !== undefined) setGroupValue(value);
	}, [value]);

	// return
	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}
			<FormSelect
				value={value}
				checked={value}
				groupValue={groupValue}
				setGroupValue={setGroupValue}
				{...elementProps}
				type="switch"
			/>
			{error && <FieldFeedback {...error} />}
		</div>
	);
};
