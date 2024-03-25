import React from 'react'

const Features2 = () => {
  return (
        <div  className=" h-fit w-full">
            <div className="bg-black flex h-4/5 w-full border-y-8 border-gray-700">
            <div class="relative left-40">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="Feature image"
              class="feature__image "
            />
            <div class="bg-black flex justify-items-center items-center border-2 border-gray-500 max-w-fit rounded-xl relative bottom-24 left-36">
              <div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="poster"
                  class="h-24 w-20 p-2 rounded"
                />
              </div>
              <div class="ml-1">
                <h4 className='tracking-wide font-nsans-medium'>Stranger Things</h4>
                <h6 className='font-nsans-medium text-sm text-blue-700'>Downloading...</h6>
              </div>
              <div class="download__gif__container">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt="downloading gif"
                  class="h-10 w-10 ml-16 mr-5"
                />
              </div>
            </div>
            </div>
            <span className='relative left-36 top-44'>
        <h1 className='text-5xl font-nsans-bold tracking-wide'>Download your shows<br></br> to watch offline.</h1>
        <p className='text-2xl mt-8 tracking-wide'>Save your favourites easily and always have something <br></br>to watch.</p>
    </span>
            </div>
            </div>
  )
}

export default Features2
