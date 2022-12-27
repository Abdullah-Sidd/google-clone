import React from 'react'

const SearchResults = ({results}) => {
    // console.log(results)
  return (
   <div>
      <p className='text-sm font-semibold p-5 mb-4'>About {results.searchInformation.formattedTotalResults}  , Results ({results.searchInformation.formattedSearchTime}seconds)</p>
      {results.items?.map((result) => (
  <div className="max-w-5xl mb-8 mx-auto" key={result. link}>
    <div>
      <a href={result.link}
      className="text-sml">
        {result. formattedUrl}
      </a>
      <a href={result.link}>
        <h2 className="truncate text-xl
        text-blue-800 font-medium hover:underline cursor-pointer">
          {result.title}
        </h2>
      </a>
    </div>

    <p className='line-clamp-3'>{result.snippet}</p>
  </div>))}
  </div>
  )
}


export default SearchResults
