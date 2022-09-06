import { FieldSelectGroup } from 'components/Field';
import { useController } from 'react-hook-form';

export const FormFieldSelectGroup = props => {
	const { label, element, ...groupProps } = props;
	const { control, name, ...elementProps } = element;

	// Controller
	let {
		field: { ref, onChange, ...fieldProps },
		fieldState: { error }
	} = useController({ control, name });

	// Error
	error = error && { type: 'invalid', message: error.message };

	// Handle change
	const handleChange = e => {
		onChange(e.target.value);
	};

	// Return JSX
	return (
		<FieldSelectGroup
			label={label}
			element={{ ...fieldProps, onChange: handleChange, ...elementProps }}
			error={error}
			{...groupProps}
		/>
	);
};
