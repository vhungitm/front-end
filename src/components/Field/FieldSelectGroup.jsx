import { useEffect, useState } from 'react';
import { FieldFeedback, FieldLabel, FieldSelect } from '.';

export const FieldSelectGroup = props => {
  const { label, element, error, ...groupProps } = props;
  const { value } = element;
  const [groupValue, setGroupValue] = useState('');

  useEffect(() => value !== undefined && setGroupValue(value), [value]);

  return (
    <div {...groupProps}>
      {label && <FieldLabel {...label} />}
      <FieldSelect {...element} value={groupValue} />
      {error && <FieldFeedback {...error} />}
    </div>
  );
};
