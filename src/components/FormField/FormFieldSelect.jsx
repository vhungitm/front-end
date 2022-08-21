import { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import Select from 'react-select';

export const FormFieldSelect = props => {
	// select props
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

	// useController
	const {
		field: { value, onChange: updateValue, ...fieldProps },
		fieldState: { error, invalid }
	} = useController({ control, name });

	// update error
	useEffect(() => {
		setError({ ...error, type: 'invalid' });
	}, [error, setError]);

	// className
	className = className
		? `react-select-container ${className}`
		: 'react-select-container';
	className = invalid ? `${className} is-invalid` : className;

	// selected
	const [selected, setSelected] = useState();

	useEffect(() => {
		setSelected(options.find(item => item.value === value));
	}, [value, options]);

	// handle change
	const handleChange = selectedValue => {
		updateValue(selectedValue.value);
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
			{...fieldProps}
			{...selectProps}
		/>
	);
};
