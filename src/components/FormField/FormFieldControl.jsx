import { useEffect } from 'react';
import { FormControl } from 'react-bootstrap';
import { useController } from 'react-hook-form';

export const FormFieldControl = props => {
	// Field props
	const { control, name, size, iconStart, iconEnd, setError, ...controlProps } =
		props;

	// Update control group className
	const controlGroupClassName = size
		? `form-control-group form-control-group-${size}`
		: 'form-control-group';

	// Use controller
	const {
		field,
		fieldState: { invalid, error }
	} = useController({ control, name });

	// Effect update error
	useEffect(() => {
		setError({ ...error, type: 'invalid' });
	}, [error, setError]);

	// Return JSX
	return (
		<div className={controlGroupClassName}>
			{iconStart && iconStart}
			{iconEnd && iconEnd}
			<FormControl
				size={size}
				{...field}
				{...controlProps}
				isInvalid={invalid}
			/>
		</div>
	);
};
