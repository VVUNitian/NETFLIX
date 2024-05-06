import React from 'react'

const HomePage = () => {
  return(
    <div className='Container h-dvh relative'>
        <header className=" bg-netflixback h-dvh w-dvw absolute text-center ">
          <img src="/netflix.svg" alt="logo" className='h-12 mt-6 ml-44' />
          <button type="button" className='font-nsans-medium bg-red-600 px-3 py-1.5 rounded relative left-1/3 ml-44 top- -inset-11 '>
            Sign Out</button>
           <div className='inline-flex bg-slate-900 px-2.5 py-1.5 rounded relative top- -inset-10 left-64 
            justify-evenly justify-items-center align-items-center border-inherit border-2 '>
            <div role="img" aria-hidden="true" className="default-ltr-cache-iyxs8w e1vkmu654 pr-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-labelledby=":R135dajalalbd:" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor">
                </path>
              </svg>
            </div>
            <select id=":R5ajalalbd:" name="LanguageSelect" data-uia="language-picker-header" className=' bg-slate-900 pr-2 cursor-pointer'><option lang="en" label="English" value="en-IN" selected="">English</option><option lang="hi" label="हिन्दी" value="hi-IN">हिन्दी</option></select>
              <div aria-hidden="true" class="default-ltr-cache-emv211 ea3diy33">
              </div>
              </div>
            <div className='relative top-1/4 text-center '>
              <h1 className='text-2xl mb-4'>Welcome back!</h1>
              <h1 className='text-5xl font-nsans-bold tracking-wide'>Unlimited movies,TV shows and more</h1>
              <h1 className='text-2xl mt-8 tracking-wide' >Watch anywhere. Cancel anytime.</h1>
            </div> 
            <button type="button" className='font-nsans-medium bg-red-600 px-4 py-2 rounded relative text-center top-1/4 mt-5 text-2xl '>
            Finish Sign Up &nbsp; &gt; </button>
        </header>
        </div>
    ) 
}

export default HomePage
