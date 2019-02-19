import React from 'react'
import fetch from 'isomorphic-unfetch'

export const Page1 = (props) => {
   
    return(
        <div>
            {props.rest}
            Soy page  1
        </div>
    )
}

Page1.getInitialProps = async function(context) {
    const rest = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( r => r.json() )
    .then( data => {
        console.log(data);
    });
    console.log(rest)
    return {rest}
  }

export default Page1
