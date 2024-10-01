import React from 'react';
import { useForm } from 'react-hook-form';

// Define form data type for TypeScript
interface ValidationFormInputs {
  username: string;
  email: string;
  password: string;
  age: number;
  website: string;
}

export default function ValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationFormInputs>();

  const onSubmit = (data: ValidationFormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Username: Required and minimum length */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters',
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      {/* Email: Required and must be a valid email */}
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

      {/* Password: Required, minimum length, and custom validation */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
            validate: (value) => {
              return /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter';
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* Age: Required, must be a number and between 18 and 100 */}
      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          {...register('age', {
            required: 'Age is required',
            min: {
              value: 18,
              message: 'You must be at least 18 years old',
            },
            max: {
              value: 100,
              message: 'Age cannot exceed 100 years',
            },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      {/* Website: Must match a valid URL pattern */}
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          {...register('website', {
            pattern: {
              value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
              message: 'Enter a valid URL',
            },
          })}
        />
        {errors.website && <p>{errors.website.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
}
