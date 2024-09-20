"use client"

import Link from "next/link"

const Admin = () => {
  return (
    <div>
      <h2>Admin Page</h2>
      <Link
        href={"/"}
        className="border-2 border-black py-2 px-4 rounded-lg"
      >
        Back
      </Link>
    </div>
  )
}

export default Admin
