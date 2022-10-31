import { FieldControlGroup } from 'components/Field';
import { useController } from 'react-hook-form';

export const FormFieldControlGroup = props => {
  const { label, element, ...groupProps } = props;
  const { control, name, ...elementProps } = element;
  let {
    field: { ref, ...fieldProps },
    fieldState: { error }
  } = useController({ control, name });
  error = error && { type: 'invalid', message: error.message };

  return <FieldControlGroup label={label} element={{ ...fieldProps, ...elementProps }} error={error} {...groupProps} />;
};
