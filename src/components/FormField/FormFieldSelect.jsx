import { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import Select from 'react-select';

export const FormFieldSelect = props => {
	// Field props
	let {
		control,
		name,
		options,
		className,
		placeholder = '',
		onChange,
		setError,
		...selectProps
	} = props;

	// Use controller
	const {
		field: { value, onChange: updateValue, ...fieldProps },
		fieldState: { error, invalid }
	} = useController({ control, name });

	// Effect update error
	useEffect(() => {
		setError({ ...error, type: 'invalid' });
	}, [error, setError]);

	// Update className
	className = className
		? `react-select-container ${className}`
		: 'react-select-container';
	className = invalid ? `${className} is-invalid` : className;

	// Selected
	const [selected, setSelected] = useState();

	// Effect update selected
	useEffect(() => {
		setSelected(options.find(item => item.value === value));
	}, [value, options]);

	// Handle change
	const handleChange = selectedValue => {
		updateValue(selectedValue.value);
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
			{...fieldProps}
			{...selectProps}
		/>
	);
};
