import React from 'react'

function JoinQuiz() {
  return (
    // <div>JoinQuiz</div>

    <>
    <div className="bg-red-600 h-96 min-h-screen flex justify-center">
      <div className="container mx-auto py-12 my-40">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Join a Quiz</h1>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Enter Quiz Code"
            className="border border-gray-400 rounded-md py-2 px-4 mr-2"
            // defaultValue={code == 'undefined' ? null : code}
            // onChange={(e) => setQuizCode(e.target.value)}
          />
          <button
            className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
            Join Quiz
          </button>
        </div>

      </div>
    </div>
    {/* <ToastContainer /> Add this line to render the ToastContainer */}
  </>
  )
}

export default JoinQuiz