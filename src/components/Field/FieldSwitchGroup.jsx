import { FieldFeedback, FieldLabel } from 'components/Field';
import { useEffect, useState } from 'react';
import { FormSelect } from 'react-bootstrap';

export const FieldSwitchGroup = props => {
  const {
    label,
    element: { name, value, checked, ...elementProps },
    error,
    ...groupProps
  } = props;
  const [groupValue, setGroupValue] = useState(false);

  // Effect update group value
  useEffect(() => value !== undefined && setGroupValue(value), [value]);

  return (
    <div {...groupProps}>
      {label && <FieldLabel {...label} />}
      <FormSelect
        value={value}
        checked={value}
        groupValue={groupValue}
        setGroupValue={setGroupValue}
        {...elementProps}
        type="switch"
      />
      {error && <FieldFeedback {...error} />}
    </div>
  );
};
