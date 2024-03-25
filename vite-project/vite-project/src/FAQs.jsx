import React from 'react'
import Footer from './Footer'

const FAQs = () => {
  return (
        <div  className=" h-screen w-full">
            <div className="bg-black h-fit w-full border-y-8 border-gray-700">
                <h1 className='text-5xl font-nsans-bold text-center mt-20'>Frequently Asked Questions</h1>
                <div className="faq1 w-4/5 h-20 bg-gray-700 ml-36 flex justify-between mt-10">
                    <p className='font-nsans-light text-2xl p-5'>What is Netflix? </p>
                    <span className='mr-5 text-7xl'>&#43;</span>
                </div>
                <div className="faq1 w-4/5 h-20 bg-gray-700 ml-36 flex justify-between mt-3">
                    <p className='font-nsans-light text-2xl p-5'>Is Netflix good for children? </p>
                    <span className='mr-5 text-7xl'>&#43;</span>
                </div>
                <div className="faq1 w-4/5 h-20 bg-gray-700 ml-36 flex justify-between mt-3">
                    <p className='font-nsans-light text-2xl p-5'>How much does Netflix cost?</p>
                    <span className='mr-5 text-7xl'>&#43;</span>
                </div>
                <div className="faq1 w-4/5 h-20 bg-gray-700 ml-36 flex justify-between mt-3">
                    <p className='font-nsans-light text-2xl p-5'>Where can I watch?</p>
                    <span className='mr-5 text-7xl'>&#43;</span>
                </div>
                <div className="faq1 w-4/5 h-20 bg-gray-700 ml-36 flex justify-between mt-3">
                    <p className='font-nsans-light text-2xl p-5'>How do I cancel? </p>
                    <span className='mr-5 text-7xl'>&#43;</span>
                </div>
                <div className="faq1 w-4/5 h-20 bg-gray-700 ml-36 flex justify-between mt-3 mb-8">
                    <p className='font-nsans-light text-2xl p-5'>What can I watch on Netflix? </p>
                    <span className='mr-5 text-7xl'>&#43;</span>
                </div>
                <button type="button" className='font-nsans-medium bg-red-600 px-4 py-2 rounded relative text-center top-1/4 left-1/3 ml-36 mt-5 text-2xl mb-10'>
            Finish Sign Up &nbsp; &gt; </button>
            </div>
            <Footer/>
        </div>
  )
}

export default FAQs
