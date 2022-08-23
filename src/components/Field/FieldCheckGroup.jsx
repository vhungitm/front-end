import { useEffect, useState } from 'react';
import { FieldFeedback, FieldLabel } from '.';
import { FieldCheck } from './FieldCheck';

export const FieldCheckGroup = props => {
	// Group props
	const { label, element, error, ...groupProps } = props;
	const { name, value, options, ...elementProps } = element;

	// Effect update group value
	const [groupValue, setGroupValue] = useState(options.length >= 2 ? [] : '');
	useEffect(() => {
		if (value !== undefined) setGroupValue(value);
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
					type="checkbox"
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
