import React from 'react';
import { useForm } from 'react-hook-form';

// Define form data type for TypeScript
interface AdvancedFormInputs {
  username: string;
  email: string;
}

export default function AdvancedForm() {
  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    watch,
    reset
  } = useForm<AdvancedFormInputs>();

  // Watch specific input values
  const watchedUsername = watch('username');

  const onSubmit = async (data: AdvancedFormInputs) => {
    // Simulate form submission delay (e.g., async API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    reset(); // Reset the form after submission
  };

  return (
    <div>
      <h1>React Hook Form with Advanced Features</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username Field */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters long',
              },
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
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

        {/* Display watched value of the username */}
        <div>
          <p>Watched Username: {watchedUsername}</p>
        </div>

        {/* Display form status */}
        <div>
          <p>{isDirty ? 'Form has been modified' : 'Form is untouched'}</p>
          {isSubmitting && <p>Submitting the form...</p>}
        </div>

        {/* Submit Button (disabled while submitting) */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
