"use client"

import AdvancedForm from "@/components/AdvancedForm";
import BasicForm from "@/components/BasicForm";
import ValidationForm from "@/components/ValidationForm";
import { useState } from "react";

export default function Home() {
  const [selectedForm, setSelectedForm] = useState<string>('form1');

  return (
    <div>
      <h1>React Hook Form</h1>

      {/* Buttons to select the form */}
      <div>
        <button onClick={() => setSelectedForm('form1')}>BasicForm</button>
        <button onClick={() => setSelectedForm('form2')}>Form ValidationForm</button>
        <button onClick={() => setSelectedForm('form3')}>AdvancedForm</button>
      </div>

      {/* Conditional Rendering of Forms */}
      <div>
        {selectedForm === 'form1' && <BasicForm />}
        {selectedForm === 'form2' && <ValidationForm />}
        {selectedForm === 'form3' && <AdvancedForm />}
      </div>
    </div>
  );
}
