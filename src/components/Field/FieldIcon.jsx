export const FieldIcon = props => {
	// Field props
	let {
		name = 'iconEnd', // Name: iconStart/iconEnd; Default: iconEnd
		type = 'css', // Type: img/css; Default: css
		className,
		...iconProps
	} = props;

	// Update className
	className =
		type === 'css'
			? name === 'iconEnd'
				? `icon-end ${className}`
				: `icon-start ${className}`
			: name === 'iconEnd'
			? 'icon-end'
			: 'icon-start';

	// JSX
	const imgTypeJSX = <img className={className} alt={name} {...iconProps} />;
	const cssTypeJSX = <div className={className} {...iconProps} />;
	const JSX = type === 'img' ? imgTypeJSX : cssTypeJSX;

	// Return JSX
	return JSX;
};
