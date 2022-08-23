import { FormControl } from 'react-bootstrap';

export const FieldControl = props => {
	let { size, iconStart, iconEnd, ...controlProps } = props;

	// Update control group className
	const controlGroupClassName = size
		? `form-control-group form-control-group-${size}`
		: 'form-control-group';

	// Return JSX
	return (
		<div className={controlGroupClassName}>
			{iconStart && iconStart}
			{iconEnd && iconEnd}
			<FormControl size={size} {...controlProps} />
		</div>
	);
};
