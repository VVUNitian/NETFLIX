import React from 'react'

const Features1 = () => {
  return (
    <div  className=" h-fit w-full">
        <div className="bg-black flex h-4/5 w-full border-y-8 border-gray-700">
            <span className='relative left-40 top-80 '>
                <h1 className='text-5xl font-nsans-bold tracking-wide '>Enjoy on your TV</h1>
                <p className='text-2xl mt-8 tracking-wide '>Watch on smart TV's,Playstation,Xbox,Chromecast,<br></br>Apple TV,Blu-ray players and more.</p>
            </span>
        <div class="ml-48 mt-40">
            <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="nmhp-card-animation-asset-image" className=""/>
            <div data-uia="nmhp-card-animation-asset-motion" className="relative bottom-96 left-20">
                <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="true">
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
                </video>
                </div>
                </div>
                </div>
        </div>
  )
}

export default Features1
