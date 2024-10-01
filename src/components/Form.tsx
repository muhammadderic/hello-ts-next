"use client"

import { useForm, SubmitHandler } from "react-hook-form"

// Define the shape of the form
interface FormOneInputs {
  name: string;
  email: string;
}

const FormOne = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormOneInputs>();

  // Define the submit handler type
  const onSubmit: SubmitHandler<FormOneInputs> = (data) => {
    console.log(data);
    reset();
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
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
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
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>

      {/* Reset Button */}
      <button onClick={() => reset()}>Reset</button>
    </form>
  )
}

export default FormOne
