import React from 'react'

function CreateQuiz() {
  return (

    // <div>CreateQuiz</div>

    <div className='min-h-screen bg-red-600'>
      
      <div>
        <h1 className="text-3xl text-center font-bold tracking-tight text-white pt-5">Create Your Quiz</h1>
        <form className='mx-auto py-6 sm:px-6 lg:px-8 text-left flex justify-center'>
          <div className="w-4/5 md:w-3/5 lg:w-2/5 py-20 border border-black/30 rounded-lg p-4 flex flex-col gap-4 bg-white mt-5">
            <div>
              <label
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="title"
              >
                Quiz Title
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter quiz title"
                id="title" required
                name='title'
              
              />
            </div>
            <div>
              <label
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="time"
              >Time</label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                id="time"
                placeholder='Enter Time in Seconds'
                min={1} required
                name='time'
               
              />
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="my-2 py-3 px-4 w-full items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Add Questions
              </button>
            </div>
          </div>
        </form>
      </div >
    
    </div >
  )
}

export default CreateQuiz