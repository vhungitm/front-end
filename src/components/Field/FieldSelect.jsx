import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FieldIcon } from '.';

export const FieldSelect = props => {
	// Field props
	let {
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

	// Update control group className
	const controlGroupClassName = size
		? `form-control-group form-control-group-${size} react-select`
		: 'form-control-group react-select';

	// Update className
	className = className
		? `react-select-container ${className}`
		: 'react-select-container';
	className = size ? `${className} react-select-container-${size}` : className;

	// Selected
	const [selected, setSelected] = useState();

	// Effect update selected
	useEffect(() => {
		setSelected(options.find(item => item.value === value));
	}, [value, options]);

	// Handle change
	const handleChange = selectedValue => {
		if (onChange) onChange(selectedValue.value);
	};

	// Return JSX
	return (
		<div className={controlGroupClassName}>
			{iconStart && <FieldIcon {...iconStart} name="iconStart" />}
			{iconEnd && <FieldIcon {...iconEnd} name="iconEnd" />}
			<Select
				value={selected}
				options={options}
				placeholder={placeholder}
				className={className}
				classNamePrefix="react-select"
				noOptionsMessage={() => 'Không có'}
				onChange={handleChange}
				{...selectProps}
			/>
		</div>
	);
};
