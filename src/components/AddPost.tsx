"use client"

import { createPost } from "@/actions/actions";

const PostForm = () => {
  return (
    <form action={createPost} className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          rows={4}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="published" className="block text-sm font-medium text-gray-700">
          Published
        </label>
        <input
          type="checkbox"
          id="published"
          name="published"
          className="form-checkbox h-4 w-4 text-blue-600"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Create Post
      </button>
    </form>
  );
};

export default PostForm;
