import React, {  useRef } from 'react'
import { MicrophoneIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

const Googlebody = () => {
  const router = useRouter()
  const search = e => {
    e.preventDefault();
    const result = SearchInput.current.value;
    if (!result)return;
    router.push(`/search?result=${result}`)
  }
  const SearchInput = useRef(null)
  return (
<form className="flex flex-col items-center mt-44 flex-grow">
<img height={100}
width={300}  src="https://pngimg.com/uploads/google/small/google_PNG19631.png"/>
<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-Ig
max-w-md rounded-full border border-gray-200 px-5 ру-3 items-center
sm:max-w-xl lg:max-w-2x1">
{/* <SearchIcon className="h-5 mr-3 text-gray-500"/> */}
<svg className="h-5 mr-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

<input ref={SearchInput} type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding   rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
<MicrophoneIcon className="h-5" />
</div>
<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:py-7
sm:flex-row sm:space-x-4">
                         
{/* <button className="bg-gray-200 p-3 rounded-md ring-gray-200 text-sm text-gray-800  hover:shadow-md"></button> */}
<button onClick={search} class="text-center relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Google Search</span>
</button>



<button class="text-center  relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">I'm Feeling Lucky</span>
</button>
{/* <button className="bg-gray-200 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:shadow-md"></button> */}
</div>
</form>

  );
};

export default Googlebody;
