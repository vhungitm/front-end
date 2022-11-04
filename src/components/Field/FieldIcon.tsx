import { HTMLAttributes } from 'react';

export interface FieldIconProps extends HTMLAttributes<HTMLElement> {
	name: 'iconStart' | 'iconEnd';
	type: 'css' | 'img';
}

export const FieldIcon = (props: FieldIconProps) => {
	let { name = 'iconEnd', type = 'css', className, ...iconProps } = props;

	className =
		type === 'css'
			? name === 'iconEnd'
				? `icon-end ${className}`
				: `icon-start ${className}`
			: name === 'iconEnd'
			? 'icon-end'
			: 'icon-start';

	const imgTypeJSX = <img className={className} alt={name} {...iconProps} />;
	const cssTypeJSX = <div className={className} {...iconProps} />;
	const JSX = type === 'img' ? imgTypeJSX : cssTypeJSX;

	return JSX;
};
