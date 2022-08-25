import { useEffect, useState } from 'react';
import { FormCheck } from 'react-bootstrap';
import { FieldFeedback, FieldLabel } from '.';

export const FieldRadioGroup = props => {
	const {
		label,
		element: { name, value, options, ...elementProps },
		error,
		...groupProps
	} = props;

	// This group value
	const [groupValue, setGroupValue] = useState();

	useEffect(() => {
		if (value !== undefined) setGroupValue(value);
	}, [value]);

	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}

			{options.map((item, id) => (
				<FormCheck
					key={`${name}-${id}`}
					id={`${name}-${id}`}
					name={name}
					checked={groupValue === item.value}
					groupValue={groupValue}
					setGroupValue={setGroupValue}
					{...elementProps}
					{...item}
					type="radio"
				/>
			))}

			{error && <FieldFeedback {...error} />}
		</div>
	);
};
