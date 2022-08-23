import { FieldFeedback, FieldLabel, FieldSelect } from '.';

export const FieldSelectGroup = props => {
	const { label, element, error, ...groupProps } = props;

	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}
			<FieldSelect {...element} />
			{error && <FieldFeedback {...error} />}
		</div>
	);
};
