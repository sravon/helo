import Head from 'next/head'
import Axios from '../Axios/Axios'
import Nav from '../components/Nav'
import Results from '../components/Results'
import Seotag from '../components/Seotag'
import Slider from '../components/Slider'

export default function Home({ results }) {
  
  
  return (
    <div >
      <Seotag title="Home"/>
      <Slider results={results} />
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