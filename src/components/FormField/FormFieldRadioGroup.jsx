import { FieldFeedback, FieldLabel } from 'components/Field';
import { useState } from 'react';
import { FormFieldRadio } from './FormFieldRadio';

export const FormFieldRadioGroup = props => {
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
				<FormFieldRadio
					key={`${name}-${id}`}
					id={`${name}-${id}`}
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
