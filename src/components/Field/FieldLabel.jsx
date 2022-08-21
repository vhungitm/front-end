import { FormLabel } from 'react-bootstrap';

export const FieldLabel = props => {
	const { element, required, ...labelProps } = props;

	return (
		<FormLabel as="div" {...labelProps}>
			{element}
			{required && <span className="text-danger"> * </span>}
		</FormLabel>
	);
};
