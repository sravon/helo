
import Subsitems from "../components/Subsitems";
import {useState} from "react";
import { lowerCase } from 'lodash';
import Loader from "./loader";
import Seotag from "../components/Seotag";
import { AContext } from "../context/AdminContext";
import { useContext } from "react";
import cookies from 'js-cookie';

export default function Subscripe() {
  const [value, setvalue] = useState("")
  const [loading, setloading] = useState(false)

  const sliber = {one: "1 Mobile",two:"1 Ipad", three:"1 computer/laptop"}
  const golder = {one: "3 Mobile",two:"2 Ipad", three:"4 computer/laptop"}
  const diamond = {one: "unlimited",two:"unlimited", three:"unlimited"}


  const slectPackage = (data) => {
    const packge = lowerCase(data)
    
    setloading(true)
    if (packge === "silber") {
      setvalue("price_1KMFjVFfBeM207CoVgB8aacm")
    } else if (packge === "golden"){
      setvalue("price_1KS3C8FfBeM207CoR5UgsdLo")
    }else if (packge === "diamond"){
      setvalue("price_1KSOCBFfBeM207CoqAzuv374")
    }
    
    setTimeout(() => {
      document.getElementById('ltiLaunchForm').submit();
    }, 3000);
  }


  console.log(loading)
  return (
    <div>
      <Seotag title="Subscribe" />
      {!loading?
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        <Subsitems title="Silber" price="20" package={sliber} data={slectPackage}/>
        <Subsitems title="Golden" price="30" package={golder} data={slectPackage}/>
        <Subsitems title="Diamond" price="40" package={diamond} data={slectPackage}/>
      </div>: null}
      {loading? <Loader/> : null}
      <form action="/api/checkout_sessions" method="POST" id="ltiLaunchForm" className="hidden">
      <section>
        <div>
          <input type="text" className="text-black" name="check" value={value} readOnly />
        </div> 
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
    </form>
    </div>
  );
}

export async function getServerSideProps({ req }){
  
  const checkToken = req.cookies.token;
  if (typeof(checkToken) === "undefined"){
    
    return {redirect: { destination: '/login'} }
  }
  return {
    props: {
      intialresults: ""
    }
  }

}
