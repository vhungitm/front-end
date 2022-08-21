import { useEffect, useState } from 'react';
import Select from 'react-select';

export const FieldSelect = props => {
	// select props
	let {
		value,
		options,
		className,
		placeholder = '',
		onChange,
		...selectProps
	} = props;

	// className
	className = className
		? `react-select-container ${className}`
		: 'react-select-container';

	// selected
	const [selected, setSelected] = useState();

	useEffect(() => {
		setSelected(options.find(item => item.value === value));
	}, [value, options]);

	// handle change
	const handleChange = selectedValue => {
		if (onChange) onChange(selectedValue.value);
	};

	// return
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
