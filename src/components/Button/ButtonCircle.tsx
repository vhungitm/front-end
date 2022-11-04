import { ButtonHTMLAttributes } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './ButtonCircle.scss';

interface ButtonCircleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: any;
  title: string;
  className?: string;
  [key: string]: any;
}

export const ButtonCircle = (props: ButtonCircleProps) => {
  let { icon, title, className, ...buttonProps } = props;
  className = 'btn-circle' + (className ? ` ${className}` : '');

  return (
    <OverlayTrigger placement="bottom" overlay={<Tooltip>{title}</Tooltip>}>
      <Button className={className} {...buttonProps}>
        {icon}
      </Button>
    </OverlayTrigger>
  );
};
