import React, { useState, useEffect } from 'react'

const UsePopMenu = () => {
    const [isShowing, setIsShowing] = useState(false);

    function modalClickLocation(){
        console.log('worked')
      }

    function toggle() {
        setIsShowing(!isShowing)
       
    }

    

    return {
        isShowing,
        toggle, 
    }
}

export default UsePopMenu