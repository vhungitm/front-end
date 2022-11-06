import Select, { Props } from 'react-select';
import { FieldIcon, FieldIconStartProps, FieldIconEndProps } from '.';

import './FieldSelect.scss';

export interface FieldSelectOptionsProps {
  label: string;
  value: any;
}

export type FieldSelectProps = Props & {
  isInvalid?: boolean;
  value?: any;
  size?: 'sm' | 'lg';
  iconStart?: FieldIconStartProps;
  iconEnd?: FieldIconEndProps;
  options?: FieldSelectOptionsProps[];
  onChange?: any;
};

export const FieldSelect = (props: FieldSelectProps) => {
  let {
    isInvalid,
    size,
    value,
    options = [],
    className,
    placeholder = '',
    iconStart,
    iconEnd,
    onChange,
    ...selectProps
  } = props;

  const controlGroupClassName = size
    ? `form-control-group form-control-group-${size} react-select`
    : 'form-control-group react-select';

  className = className ? `react-select-container ${className}` : 'react-select-container';
  className = size ? `${className} react-select-container-${size}` : className;

  if (isInvalid) className += ' is-invalid';

  const handleChange = (selectedValue: any) => {
    if (onChange)
      onChange({
        target: {
          name: selectProps.name,
          value: selectedValue.value
        }
      });
  };

  return (
    <div className={controlGroupClassName}>
      {iconStart && <FieldIcon {...iconStart} name="iconStart" />}
      <Select
        value={options.find((item: any) => item.value === value)}
        options={options}
        placeholder={placeholder}
        className={className}
        classNamePrefix="react-select"
        noOptionsMessage={() => 'Không có'}
        onChange={handleChange}
        {...selectProps}
      />
      {iconEnd && <FieldIcon {...iconEnd} name="iconEnd" />}
    </div>
  );
};
