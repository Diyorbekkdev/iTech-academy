'use client';

import { useState } from 'react';

import { Input } from '@nextui-org/react';
import { FieldProps } from 'formik';
import { get, isFunction } from 'lodash';

interface IMainInput extends FieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  inputProps?: any;
  isValid?: any;
  size?: string;
  addonBefore?: string;
}

export const MainInput = (props: IMainInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    label,
    type = 'text',
    placeholder,
    field,
    form,
    inputProps,
    isValid = () => true,
  } = props;
  return (
    <div className="input__wrapper">
      <label
        className={` ${get(form.touched, field.name) && get(form.errors, field.name) ? 'text_validator text-base  font-semibold' : 'text_invalidator text-base font-semibold'}`}
      >
        {label}
      </label>
      <Input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        {...field}
        autoComplete="off"
        placeholder={placeholder}
        classNames={{
          inputWrapper:
            'bg-white border border-[#ccc] hover-none w-full rounded-lg py-2 h-[52px] shadow-none mt-1',
        }}
        onChange={(event) => {
          if (isValid(event)) {
            isFunction(get(inputProps, 'onChange')) && inputProps.onChange(event);
            field.onChange(event);
          }
        }}
      />
    </div>
  );
};
