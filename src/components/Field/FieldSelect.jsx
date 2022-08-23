import { useEffect, useState } from 'react';
import Select from 'react-select';

export const FieldSelect = props => {
	// Field props
	let {
		value,
		options,
		className,
		placeholder = '',
		onChange,
		...selectProps
	} = props;

	// Update className
	className = className
		? `react-select-container ${className}`
		: 'react-select-container';

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
		<Select
			value={selected}
			options={options}
			placeholder={placeholder}
			className={className}
			classNamePrefix="react-select"
			onChange={handleChange}
			{...selectProps}
		/>
	);
};
