import { FieldControlGroup } from 'components/Field';
import { useController } from 'react-hook-form';

export const FormFieldControlGroup = props => {
	const { label, element, ...groupProps } = props;
	const { control, name, ...elementProps } = element;

	// Controller
	let {
		field: { ref, ...fieldProps },
		fieldState: { error }
	} = useController({ control, name });

	// Error
	error = error && { type: 'invalid', message: error.message };

	// Return JSX
	return (
		<FieldControlGroup
			label={label}
			element={{ ...fieldProps, ...elementProps }}
			error={error}
			{...groupProps}
		/>
	);
};
