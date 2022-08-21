import { ButtonIconSplit } from 'components/Button';
import {
	FormFieldCheckGroup,
	FormFieldControlGroup
} from 'components/FormField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			username: '',
			password: '',
			isRemember: true
		}
	});

	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="App">
			<div
				style={{ minHeight: '100vh', alignItems: 'center' }}
				className="d-flex justify-content-center p-5"
			>
				<div
					style={{
						width: '100%',
						minWidth: 400,
						maxWidth: 400,
						height: 'max-content'
					}}
					className="border rounded"
				>
					<div className="border-bottom" style={{ height: 130 }}>
						<div className="mt-5 pb-5 text-center">
							<img
								src="http://tdmu.somee.com/Images/tdmu-logo.png"
								width="80"
								height="80"
								className="mb-2"
							/>
							<br />
							<img
								src="http://tdmu.somee.com/Images/no-avatar.png"
								width="80"
								height="80"
								className="bg-white rounded-circle"
							/>
						</div>
					</div>
					<form
						onSubmit={handleSubmit(v => console.log(v))}
						className="mt-5 p-5"
					>
						<FormFieldControlGroup
							className="mb-3"
							label={{ element: 'Tài khoản', required: true }}
							element={{
								control,
								name: 'username',
								placeholder: 'Nhập tài khoản',
								iconStart: (
									<img
										className="icon-start"
										alt="user"
										src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
									/>
								)
							}}
						/>
						<FormFieldControlGroup
							className="mb-3"
							label={{ element: 'Mật khẩu', required: true }}
							element={{
								control,
								name: 'password',
								type: showPassword ? 'text' : 'password',
								placeholder: 'Nhập mật khẩu',
								iconStart: (
									<img
										className="icon-start"
										alt="password"
										src="https://cdn-icons-png.flaticon.com/512/1828/1828415.png"
									/>
								),
								iconEnd: (
									<img
										className="icon-end"
										alt="password"
										src={
											!showPassword
												? 'https://cdn-icons.flaticon.com/png/512/829/premium/829117.png?token=exp=1661112891~hmac=dcec4b88ab39885c77b88638cd55568f'
												: 'https://cdn-icons.flaticon.com/png/512/2356/premium/2356734.png?token=exp=1661112891~hmac=b0744a8b7de8aec5b9712e228dbed747'
										}
										onClick={() => setShowPassword(!showPassword)}
									/>
								)
							}}
						/>
						<div className="d-flex justify-content-between">
							<FormFieldCheckGroup
								className="mb-3"
								element={{
									control,
									name: 'isRemember',
									type: 'checkbox',
									options: [{ label: 'Nhớ mật khẩu' }]
								}}
							/>
							<a href="/forgot-password">Quên mật khẩu</a>
						</div>

						<ButtonIconSplit
							type="submit"
							icon={<i className="fas fa-sign-in" />}
							element="Đăng nhập"
							className="block"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
