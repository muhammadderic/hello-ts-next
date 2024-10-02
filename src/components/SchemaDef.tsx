"use client"

import { z, ZodError } from 'zod';
import { useState } from 'react';

// Define Zod schema
const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  age: z.number().min(18, 'You must be at least 18 years old'),

  // Schema with refine method for custom validation
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // This specifies where the error should appear
});

// Define the shape of error messages
type FormErrors = {
  username?: string[];
  age?: string[];
  password?: string[];
  confirmPassword?: string[];
};

export default function SchemaDef() {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate using Zod schema
    try {
      const parsedData = formSchema.parse({
        username: formData.username,
        age: Number(formData.age),
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      console.log('Valid data:', parsedData);
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        // If the error is a ZodError, update the errors state with field errors
        setErrors(error.formErrors.fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username[0]}</p>}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p>{errors.age[0]}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password[0]}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword[0]}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
