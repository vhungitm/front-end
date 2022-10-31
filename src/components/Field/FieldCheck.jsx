import { FormCheck } from 'react-bootstrap';

export const FieldCheck = props => {
  const { name, type, value, options, groupValue, setGroupValue, ...checkProps } = props;

  const handleChange = e => {
    if (!setGroupValue) return;

    let { value: eventValue, checked } = e.target;

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
