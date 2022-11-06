import { yupResolver } from '@hookform/resolvers/yup';
import { selectAuth } from 'app/authSlice';
import { useAppSelector } from 'app/store';
import { ButtonIconSplit } from 'components/Button';
import { FormFieldCheckGroup, FormFieldControlGroup, FormFieldSelectGroup } from 'components/FormField';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';

import './App.scss';

const App = () => {
  const auth = useAppSelector(selectAuth);
  console.log(auth);

  const defaultValues: FieldValues = {
    username: '',
    password: '',
    isRemember: true
  };

  const loginValidation = yup.object().shape({
    username: yup.string().required('Vui lòng nhập tài khoản!'),
    password: yup.string().required('Vui lòng nhập mật khẩu!'),
    roles: yup.string().required('Vui lòng chọn quyền!')
  });

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(loginValidation)
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (value: FieldValues) => {
    console.log(value);
  };

  return (
    <div className="App">
      <form className="App-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-header">
          <img src="/images/icons/no-avatar.png" alt="Login-icon" className="login-icon" />
        </div>

        <div className="login-body">
          <FormFieldControlGroup
            label={{ element: 'Username:', required: true }}
            element={{
              control,
              name: 'username',
              iconStart: {
                type: 'css',
                className: 'fas fa-user'
              }
            }}
            className="mb-3"
          />
          <FormFieldControlGroup
            label={{ element: 'Password:', required: true }}
            element={{
              control,
              name: 'password',
              type: showPassword ? 'text' : 'password',
              iconStart: {
                type: 'css',
                className: 'fas fa-lock'
              },
              iconEnd: {
                type: 'css',
                className: showPassword ? 'fas fa-eye-slash' : 'fas fa-eye',
                onClick: () => {
                  setShowPassword(!showPassword);
                }
              }
            }}
            className="password mb-3"
          />
          <FormFieldSelectGroup
            label={{ element: 'Quyền:', required: true }}
            element={{
              control,
              name: 'roles',
              options: [
                { value: 'Admin', label: 'Admin' },
                { value: 'Basic', label: 'Basic' }
              ]
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
            icon={<i className="fas fa-sign-in" />}
            element="Login"
            type="submit"
            className="btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default App;
