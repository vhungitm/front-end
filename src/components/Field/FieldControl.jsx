import { FormControl } from 'react-bootstrap';
import { FieldIcon } from '.';
import './FieldControl.scss';

export const FieldControl = props => {
  let { size, iconStart, iconEnd, ...controlProps } = props;

  let controlGroupClassName = 'form-control-group';
  if (size) controlGroupClassName += ` form-control-group-${size}`;
  if (iconStart) controlGroupClassName += ' icon-start';
  if (iconEnd) controlGroupClassName += ' icon-end';

  return (
    <div className={controlGroupClassName}>
      {iconStart && <FieldIcon {...iconStart} name="iconStart" />}
      <FormControl size={size} {...controlProps} />
      {iconEnd && <FieldIcon {...iconEnd} name="iconEnd" />}
    </div>
  );
};
