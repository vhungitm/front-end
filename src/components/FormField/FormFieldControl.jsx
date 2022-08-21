import { useEffect } from 'react';
import { FormControl } from 'react-bootstrap';
import { useController } from 'react-hook-form';

export const FormFieldControl = props => {
	const { control, name, size, iconStart, iconEnd, setError, ...controlProps } =
		props;

	// control gorup className
	const controlGroupClassName = size
		? `form-control-group form-control-group-${size}`
		: 'form-control-group';

	// use controller
	const {
		field,
		fieldState: { invalid, error }
	} = useController({ control, name });

	// update error
	useEffect(() => {
		setError({ ...error, type: 'invalid' });
	}, [error, setError]);

	// return
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
