import { useEffect, useState } from 'react';
import { FieldFeedback, FieldLabel } from '.';
import { FieldCheck } from './FieldCheck';

export const FieldCheckGroup = props => {
	// Group props
	const { label, element, error, ...groupProps } = props;
	const { name, value, type, options, ...elementProps } = element;

	// Group value
	const [groupValue, setGroupValue] = useState(
		value || options.length >= 2 ? [] : false
	);

	// Effect update group value
	useEffect(() => {
		if (value !== undefined) {
			setGroupValue(value);
		}
	}, [value]);

	// Return JSX
	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}

			{options.map((item, id) => (
				<FieldCheck
					key={`${name}-${id}`}
					id={`${name}-${id}`}
					name={name}
					type={type}
					options={options}
					groupValue={groupValue}
					setGroupValue={setGroupValue}
					{...elementProps}
					{...item}
				/>
			))}

			{error && <FieldFeedback {...error} />}
		</div>
	);
};
