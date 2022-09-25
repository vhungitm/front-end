import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './ButtonCircle.scss';

export const ButtonCircle = props => {
  let { icon, title, className, ...buttonProps } = props;
  className = className ? `btn-circle ${className}` : 'btn-circle';

  return (
    <OverlayTrigger placement="bottom" overlay={<Tooltip>{title}</Tooltip>}>
      <Button className={className} {...buttonProps}>
        {icon}
      </Button>
    </OverlayTrigger>
  );
};
