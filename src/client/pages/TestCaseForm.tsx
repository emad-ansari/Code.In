import { useState } from "react";

export const TestCaseForm = () => {
  const [problemTitle, setProblemTitle] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const testCaseData = {
  //     problemTitle,
  //     input,
  //     output,
  //   };
  //   console.log("Test Case Submitted:", testCaseData);
  //   // Add your form submission logic here
  // };

  return (
    <div className="bg-PRIMARY  fixed top-16  bottom-0 left-0 right-0 ">
      <div className="max-w-3xl mx-auto p-8 bg-darkGray shadow-lg rounded-lg border border-[#334155]">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Add New Test Case
        </h2>
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="problemTitle"
            >
              Problem Title
            </label>
            <input
              type="text"
              id="problemTitle"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-offset-[#81E291] bg-transparent text-white"
              value={problemTitle}
              onChange={(e) => setProblemTitle(e.target.value)}
              placeholder="Enter the problem title"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="input"
            >
              Input
            </label>
            <textarea
              id="input"
              className=" text-white w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-offset-[#81E291] bg-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter the test case input"
              rows={3}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="output"
            >
              Output
            </label>
            <textarea
              id="output"
              className=" text-white w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-offset-[#81E291] bg-transparent"
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              placeholder="Enter the expected output"
              rows={3}
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-cyan text-black font-medium px-4 py-2 rounded-md hover:bg-[#a5f3fc] focus:outline-none focus:ring focus:ring-offset-[#81E291]"
            >
              Submit Test Case
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};