"use client"

import FormOne from "@/components/Form";
import ValidationForm from "@/components/ValidationForm";
import { useState } from "react";

export default function Home() {
  const [selectedForm, setSelectedForm] = useState<string>('form1');

  return (
    <div>
      <h1>React Hook Form</h1>

      {/* Buttons to select the form */}
      <div>
        <button onClick={() => setSelectedForm('form1')}>Form 1</button>
        <button onClick={() => setSelectedForm('form2')}>Form 2</button>
      </div>

      {/* Conditional Rendering of Forms */}
      <div>
        {selectedForm === 'form1' && <FormOne />}
        {selectedForm === 'form2' && <ValidationForm />}
      </div>
    </div>
  );
}
