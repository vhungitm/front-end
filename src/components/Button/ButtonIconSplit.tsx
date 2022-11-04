import { Button, ButtonProps } from 'react-bootstrap';
import './ButtonIconSplit.scss';

export interface ButtonIconSplitProps extends ButtonProps {
	icon: any;
	element: any;
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
