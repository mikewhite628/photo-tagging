import React, { useState, useEffect } from 'react'

const UseWelcome = () => {
    const [welcomeShowing, setWelcomeShowing] = useState(false);


    function toggleWelcome() {
        setWelcomeShowing(!welcomeShowing)
       
    }

    return {
        welcomeShowing,
        toggleWelcome, 
    }
}

export default UseWelcome