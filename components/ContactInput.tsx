import { FormValues } from './ContactForm';
import { UseFormRegister, ValidationRule } from 'react-hook-form';

type InputType = 'input' | 'textarea';

interface Props {
  inputType: InputType;
  register: UseFormRegister<FormValues>;
  errors: any;
  label: string;
  required: string;
  id: string;
  placeholder?: string;
  pattern?: ValidationRule<RegExp>;
  maxLength?: ValidationRule<number>;
}

function ContactInput({
  inputType,
  id,
  register,
  errors,
  label,
  placeholder = '',
  required,
  pattern,
  maxLength,
}: Props) {
  return (
    <div className='relative flex flex-col gap-8pxr'>
      <label htmlFor={id} className='!font-normal font-body1'>
        {label}
      </label>
      {inputType === 'input' ? (
        <input
          id={id}
          className='rounded-[0.875rem] border border-[#707070] bg-[#323232] p-20pxr outline-none font-body2 focus:border-[#69dcff]'
          {...register(id, {
            required: `${required}`,
            ...(pattern ? { pattern: pattern } : {}),
            ...(maxLength ? { maxLength: maxLength } : {}),
          })}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          id={id}
          className='min-h-184pxr rounded-[0.875rem] border border-[#707070] bg-[#323232] p-20pxr outline-none font-body2 focus:border-[#69dcff] mobile:min-h-130pxr'
          {...register(id, {
            required: `${required}`,
            ...(pattern ? { pattern: pattern } : {}),
            ...(maxLength ? { maxLength: maxLength } : {}),
          })}
          placeholder={placeholder}
        />
      )}
      {errors[id] && (
        <p className='absolute -bottom-30pxr text-red-400'>
          {errors[id].message}
        </p>
      )}
    </div>
  );
}

export default ContactInput;
