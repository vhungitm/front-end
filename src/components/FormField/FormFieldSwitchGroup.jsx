import { FieldFeedback, FieldLabel } from 'components/Field';
import { useState } from 'react';
import { FormFieldSwitch } from './FormFieldSwitch';

export const FormFieldSwitchGroup = props => {
	const { label, element, ...groupProps } = props;
	const [error, setError] = useState(null);

	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}
			<FormFieldSwitch {...element} setError={setError} />
			{error && <FieldFeedback {...error} />}
		</div>
	);
};
