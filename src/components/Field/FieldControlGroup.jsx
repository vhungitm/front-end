import { FieldControl } from '.';
import { FieldFeedback } from './FieldFeedback';
import { FieldLabel } from './FieldLabel';

export const FieldControlGroup = props => {
  let { label, element, error, ...groupProps } = props;

  return (
    <div {...groupProps}>
      {label && <FieldLabel {...label} />}
      <FieldControl {...element} />
      {error && <FieldFeedback {...error} />}
    </div>
  );
};
