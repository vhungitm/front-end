import { FieldSelectGroup } from 'components/Field';
import { useController } from 'react-hook-form';

export const FormFieldSelectGroup = props => {
  const { label, element, ...groupProps } = props;
  const { control, name, ...elementProps } = element;
  let {
    field: { ref, onChange, ...fieldProps },
    fieldState: { error }
  } = useController({ control, name });
  error = error && { type: 'invalid', message: error.message };

  const handleChange = e => onChange(e.target.value);

  return (
    <FieldSelectGroup
      label={label}
      element={{ ...fieldProps, onChange: handleChange, ...elementProps }}
      error={error}
      {...groupProps}
    />
  );
};
