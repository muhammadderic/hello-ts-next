"use client"

import { useState } from "react";
import Link from "next/link";
import { updateRole } from "./actions";

type SettingPageProps = {
  role: string;
};

const SettingPage = ({ role }: SettingPageProps) => {
  const [roleState, setRoleState] = useState<string>(role);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAdminCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setRoleState("admin");
    } else {
      setRoleState("");
    }
  };
  const handleUserCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setRoleState("user");
    } else {
      setRoleState("");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (roleState === null) {
      setError("At least one role must be selected");
      setIsSubmitting(false);
      return;
    }

    // // Log the selected roles
    // console.log({ roles });

    await updateRole({ role: roleState });

    // Simulate a submit and reset form state
    setTimeout(() => {
      setIsSubmitting(false);
      setRoleState("");
    }, 1000);
  };

  return (
    <div>
      <Link
        href={"/"}
        className="border-2 border-black py-2 px-4 rounded-lg"
      >
        Back
      </Link>
      <h1>Setting Page</h1>
      <h3>Change your power to be an Admin, yohohoho</h3>
      <form onSubmit={handleSubmit} className="max-w-sm space-y-2.5">
        {/* Checkbox Field for Roles */}
        <div>
          <label className="block font-medium">Select Roles</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="admin"
                checked={roleState === "admin"}
                onChange={handleAdminCheckbox}
                className="mr-2"
              />
              Admin
            </label>
          </div>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="admin"
                checked={roleState === "user"}
                onChange={handleUserCheckbox}
                className="mr-2"
              />
              User
            </label>
          </div>
          {error && (
            <span className="text-red-600 text-sm">{error}</span>
          )}
          <p className="text-gray-500 text-sm">Select your role(s)</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-3 inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SettingPage
