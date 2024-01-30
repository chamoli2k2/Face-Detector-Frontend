import React, { useState } from "react";

const Form = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch(import.meta.env.VITE_URL, {
        method: "POST",
        body: formData,
      });
      console.log("Able to fetch the data");
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.log("Not able to fetch the data");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="file"
              className="border-2 border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        {response && (
          <div className="mt-4 bg-gray-100 rounded-lg p-4 shadow-inner">
            <h2 className="text-lg font-semibold mb-2">Information:</h2>
            <div>
              <span className="text-gray-700">
                Face detected: {response.message}
              </span>
              <br />
              <span className="text-gray-700">
                No of faces: {response.num_faces}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
