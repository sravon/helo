import Head from 'next/head'
import Axios from '../Axios/Axios'
import Nav from '../components/Nav'
import Results from '../components/Results'
import Seotag from '../components/Seotag'
//import Slider from '../components/Slider'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import Loader from './loader'

const Slider = dynamic(() => import('../components/Slider'))

export default function Home({ results }) {
  const [first, setfirst] = useState(false)
  const optimizeSlide = () => {
    if(!first){
      setTimeout(() => {
        setfirst(true);
      }, 3000);
    }
  }

  useEffect(() => {
    optimizeSlide()
  
  }, [])
  
  
  return (
    <div >
      <Seotag title="Home"/>
      {(first)?<Slider results={results} />:<Loader/>}
      
      <Nav/>
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await Axios(`movie/${genre || 2 }`);
  

  return {
    props: {
      results: request.data
    }
  }

}