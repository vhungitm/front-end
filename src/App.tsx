import { ButtonCircle, ButtonIconSplit } from 'components/Button';
import {
	FormFieldCheckGroup,
	FormFieldControlGroup
} from 'components/FormField';
import { FieldValues, useForm } from 'react-hook-form';

const App = () => {
	const defaultValues: FieldValues = {
		username: '',
		password: '',
		isRemember: true
	};

	const { control, handleSubmit } = useForm({
		defaultValues
	});

	const onSubmit = (value: FieldValues) => {
		console.log(value);
	};

	return (
		<div className="App" style={{ width: 500, height: '100vh' }}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mx-auto"
				style={{ width: 500 }}
			>
				<FormFieldControlGroup
					label={{ element: 'Username:', required: true }}
					element={{
						control,
						name: 'username'
					}}
					className="mb-3"
				/>
				<FormFieldControlGroup
					label={{ element: 'Password:', required: true }}
					element={{
						control,
						name: 'password',
						type: 'password'
					}}
					className="mb-3"
				/>
				<FormFieldCheckGroup
					element={{
						control,
						name: 'isRemember',
						options: [{ value: true, label: 'Remmeber Account' }]
					}}
					className="mb-3"
				/>
				<ButtonIconSplit
					icon={<i className="fas fa-check" />}
					element="Login"
					type="submit"
					className="btn-block"
				/>
				<ButtonCircle icon={<i className="fas fa-check" />} title="Hoc" />
			</form>
		</div>
	);
};

export default App;
