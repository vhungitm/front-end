import { EventType } from '@testing-library/react';
import { FormCheck, FormCheckProps } from 'react-bootstrap';
import { array } from 'yup';

interface FieldCheckProps extends FormCheckProps {
  name: string;
  type: 'radio' | 'checkbox' | 'switch';
  value: string;
  options: [];
  groupValue: [];
  setGroupValue: () => {};
  [key: string]: any;
}

export const FieldCheck = (props: FieldCheckProps) => {
  const { name, type, value, options, groupValue, setGroupValue, ...checkProps } = props;

  const handleChange = (e: any) => {
    if (!setGroupValue) return;

    let { value: (eventValue:any), (checked:boolean) } = e.target;

    setGroupValue(
      checked
        ? type === 'radio'
          ? eventValue
          : options.length >= 2
          ? [...groupValue, eventValue]
          : true
        : options.length >= 2
        ? groupValue.filter(item => item !== eventValue)
        : false
    );
  };

  return (
    <FormCheck
      name={name}
      type={type}
      value={type === 'radio' ? value : options.length >= 2 ? value : Boolean(value)}
      checked={
        type === 'radio'
          ? groupValue !== undefined
            ? groupValue === value
            : value
          : options.length >= 2
          ? groupValue.findIndex(item => item === value) >= 0
          : groupValue
      }
      onChange={handleChange}
      {...checkProps}
    />
  );
};
