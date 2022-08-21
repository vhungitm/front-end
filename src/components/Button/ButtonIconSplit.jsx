import React from 'react';
import { Button } from 'react-bootstrap';

export const ButtonIconSplit = props => {
	let { icon, element, className, ...buttonProps } = props;
	className = className ? `btn-icon-split ${className}` : 'btn-icon-split';

	return (
		<Button {...buttonProps} className={className}>
			<span className="icon">{icon}</span>
			<span className="content">{element}</span>
		</Button>
	);
};
