"use client"

import { useForm, SubmitHandler } from "react-hook-form"

// Define the shape of the form
interface FormOneInputs {
  name: string;
  email: string;
}

const FormOne = () => {
  const { register, handleSubmit } = useForm<FormOneInputs>();

  // Define the submit handler type
  const onSubmit: SubmitHandler<FormOneInputs> = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
      </div>

      {/* Email Field */}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Enter a valid email',
          },
        })}
      />

      {/* Submit Button */}
      <button type="submit">Submit</button>

      {/* Reset Button */}
    </form>
  )
}

export default FormOne
