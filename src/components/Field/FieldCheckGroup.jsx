import { useEffect, useState } from 'react';
import { FieldFeedback, FieldLabel } from '.';
import { FieldCheck } from './FieldCheck';

export const FieldCheckGroup = props => {
  const { label, element, error, ...groupProps } = props;
  const { name, value, type, options, ...elementProps } = element;
  const [groupValue, setGroupValue] = useState(value || options.length >= 2 ? [] : false);

  useEffect(() => value !== undefined && setGroupValue(value), [value]);

  return (
    <div {...groupProps}>
      {label && <FieldLabel {...label} />}

      {options.map((item, id) => (
        <FieldCheck
          key={`${name}-${id}`}
          id={`${name}-${id}`}
          name={name}
          type={type}
          options={options}
          groupValue={groupValue}
          setGroupValue={setGroupValue}
          {...elementProps}
          {...item}
        />
      ))}

      {error && <FieldFeedback {...error} />}
    </div>
  );
};
