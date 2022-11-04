import { ButtonHTMLAttributes } from 'react';
import { Button } from 'react-bootstrap';
import './ButtonIconSplit.scss';

interface ButtonIconSplitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: any;
  element: any;
  className?: string;
  [key: string]: any;
}

export const ButtonIconSplit = (props: ButtonIconSplitProps) => {
  let { icon, element, className, ...buttonProps } = props;
  className = className ? `btn-icon-split ${className}` : 'btn-icon-split';

  return (
    <Button {...buttonProps} className={className}>
      <div className="icon">{icon}</div>
      <div className="content">{element}</div>
    </Button>
  );
};
