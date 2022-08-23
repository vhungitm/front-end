import { FieldFeedback, FieldLabel } from 'components/Field';
import { useState } from 'react';
import { FormFieldSelect } from '.';

export const FormFieldSelectGroup = props => {
	const { label, element, ...groupProps } = props;
	const [error, setError] = useState(null);

	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}
			<FormFieldSelect {...element} setError={setError} />
			{error && <FieldFeedback {...error} />}
		</div>
	);
};
