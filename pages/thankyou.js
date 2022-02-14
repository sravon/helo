import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { checkStatus, paymentDetails } from '../Axios/AxiosData';
import Seotag from '../components/Seotag';

export default function Thanks(props) {
    const sessionData = JSON.stringify(props.results.session, null, 4)
    const paymentData = JSON.stringify(props.results.payment, null, 4)

    return (
    <> 
        <Seotag title="Tahnk You" />
        <div> Session Data : {sessionData}</div>
        <div>=============================</div>
        <div> Payment Data : {paymentData}</div>
    </>
    )
}

export async function getServerSideProps(context){
    const clientSecret = context.query.session_id;
    const request = await checkStatus(`checkout/sessions/${clientSecret}`);
    const result = await request.hasOwnProperty("error");
     console.log(request)
    let request1 = ""
    if (!result) {
        request1 = await paymentDetails(`payment_intents/${request.payment_intent}`);
    }else{
        return {notFound:true}
    }
    console.log(request1)
    return {
        props: {
            results: Object.assign({session: request}, {payment: request1 })
        }
        
    }
}
