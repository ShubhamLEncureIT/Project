import React from 'react';

import { useEffect, useState } from 'react';

export default function ReactExample() {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //Built in function 1000 means 1 second 
    setTimeout(()=>{
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  },[]);

    return (
      <div>
        <h1>I've rendered {seconds} times!</h1>
      </div>
    );  
}

