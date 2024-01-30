import React, { useState } from 'react';

const Form = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    try {
      const response = await fetch('https://facedetectorbackend.onrender.com/', {
        method: 'POST',
        body: formData
      });
      console.log("Able to fetch the data");
      const data = await response.json();
      setResponse(data);
    } catch (error) {
        console.log("Not able to fetch the data");
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image:</label>
            <input type="file" id="image" name="file" className="border-2 border-gray-300 rounded-lg p-2 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
        {response && (
          <div className="mt-4">
            <h2>Response from Backend:</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
