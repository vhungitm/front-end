import { FieldFeedback, FieldLabel } from 'components/Field';
import { useState } from 'react';
import { FormFieldCheck } from './FormFieldCheck';

export const FormFieldCheckGroup = props => {
	const {
		label,
		element: { control, name, options, ...elementProps },
		...groupProps
	} = props;
	const [error, setError] = useState();

	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}

			{options.map((item, id) => (
				<FormFieldCheck
					key={`${name}-${id}`}
					id={`${name}-${id}`}
					type="checkbox"
					control={control}
					name={name}
					options={options}
					setError={setError}
					{...elementProps}
					{...item}
				/>
			))}

			{error && <FieldFeedback {...error} />}
		</div>
	);
};
