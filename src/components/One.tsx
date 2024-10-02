import { z } from "zod"

// Basic Zod Schema Definitions
const One = () => {
  // Define a schema for validation
  const basicSchema = z.object({
    username: z.string(),
    age: z.number(),
    isAdmin: z.boolean(),
  })

  // Sample data to validate
  const validData = {
    username: "John",
    age: 30,
    isAdmin: true,
  }

  // Parse and validate data using the schema
  const validatedData = basicSchema.parse(validData);
  console.log(validatedData);

  return (
    <div>

    </div>
  )
}

export default One
