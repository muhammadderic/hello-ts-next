"use client"

import { z, ZodError } from 'zod';
import { useState } from 'react';

// Define Zod schema
const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  age: z.number().min(18, 'You must be at least 18 years old'),
});

// Define the shape of error messages
type FormErrors = {
  username?: string[];
  age?: string[];
};

export default function SchemaDef() {
  const [formData, setFormData] = useState({ username: '', age: '' });
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

      <button type="submit">Submit</button>
    </form>
  );
}
