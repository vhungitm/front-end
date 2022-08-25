import { useEffect, useState } from 'react';
import { FieldFeedback, FieldLabel, FieldSelect } from '.';

export const FieldSelectGroup = props => {
	const { label, element, error, ...groupProps } = props;
	const { value } = element;

	// Group value
	const [groupValue, setGroupValue] = useState('');

	// Effect update group value
	useEffect(() => {
		if (value !== undefined) setGroupValue(value);
	}, [value]);

	// Return JSX
	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}
			<FieldSelect {...element} value={groupValue} setValue={setGroupValue} />
			{error && <FieldFeedback {...error} />}
		</div>
	);
};
