import { ButtonIconSplit } from 'components/Button';
import { FormFieldCheckGroup, FormFieldControlGroup } from 'components/FormField';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import './App.scss';

const App = () => {
  const defaultValues: FieldValues = {
    username: '',
    password: '',
    isRemember: true
  };

  const { control, handleSubmit } = useForm({
    defaultValues
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (value: FieldValues) => {
    console.log(value);
  };

  return (
    <div className="App">
      <form className="App-login" onSubmit={handleSubmit(onSubmit)}>
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
        <FormFieldCheckGroup
          element={{
            control,
            name: 'isRemember',
            options: [{ value: true, label: 'Remmeber Account' }]
          }}
          className="mb-3"
        />
        <ButtonIconSplit icon={<i className="fas fa-check" />} element="Login" type="submit" className="btn-block" />
      </form>
    </div>
  );
};

export default App;
