import { FieldCheckGroup } from 'components/Field';
import { useController } from 'react-hook-form';

export const FormFieldCheckGroup = props => {
  const { label, element, ...groupProps } = props;
  const { control, name, ...elementProps } = element;
  let {
    field: { ref, onChange, ...fieldProps },
    fieldState: { error }
  } = useController({ control, name });
  error = error && { type: 'invalid', message: error.message };

  const handleChange = e => {
    const { value: eventValue, checked } = e.target;
    const { value } = fieldProps;
    const { type, options } = elementProps;

    if (checked) onChange(type === 'radio' ? eventValue : options.length >= 2 ? [...value, eventValue] : true);
    else onChange(options.length >= 2 ? value.filter(item => item !== eventValue) : false);
  };

  return (
    <FieldCheckGroup
      label={label}
      element={{ ...fieldProps, onChange: handleChange, ...elementProps }}
      {...groupProps}
      error={error}
    />
  );
};
