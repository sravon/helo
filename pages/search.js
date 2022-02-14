import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import Axios from '../Axios/Axios';
import Results from '../components/Results';
import Seotag from '../components/Seotag';

export default function Search({ intialresults }) {
    const [result, setResults] = useState(intialresults)
    const searchKey = async (keyword = null) => {
        //if (keyword.length > 4) {
            const request = await Axios.post(`movie/keywords`,{keyword});
            setResults(request.data) 
    }
    


  return (
    <div>
      <Seotag title="Search" />
        <div className="flex items-center container mx-auto bg-slate-900 p-2">
            <SearchIcon className="h-8"/>
            <input type="text" className="h-8 bg-slate-900" onChange={ e =>searchKey(e.target.value) } />
        </div>
        <Results results={result} />
    </div>
    );
}

  export async function getServerSideProps(){
  
    const request = await Axios.post(`movie/keywords`,{keyword: ""});
    
    console.log(request.data)
    return {
      props: {
        intialresults: request.data
      }
    }
  
  }