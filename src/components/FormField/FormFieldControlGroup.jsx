import { FieldFeedback, FieldLabel } from 'components/Field';
import { useState } from 'react';
import { FormFieldControl } from '.';

export const FormFieldControlGroup = props => {
	const { label, element, ...groupProps } = props;
	const [error, setError] = useState(null);

	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}
			<FormFieldControl {...element} setError={setError} />
			{error && <FieldFeedback {...error} />}
		</div>
	);
};
