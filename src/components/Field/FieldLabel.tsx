import { FormLabel } from 'react-bootstrap';
import { FormLabelOwnProps } from 'react-bootstrap/esm/FormLabel';

export interface FieldLabelProps extends FormLabelOwnProps {
	element: any;
	required?: boolean;
}

export const FieldLabel = (props: FieldLabelProps) => {
	const { element, required, ...labelProps } = props;

	return (
		<FormLabel as="div" {...labelProps}>
			{element}
			{required && <span className="text-danger"> * </span>}
		</FormLabel>
	);
};
