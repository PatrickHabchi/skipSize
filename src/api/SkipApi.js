import React, { useState } from 'react'
import axios from 'axios';

function useSkipApi() {
    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllSkips = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
            console.log(response);
            
            setSkips(response.data)
            setLoading(false);
        } catch (error) {
            console.error(error);
            
        }
    }

  return {
    getAllSkips,
    skips,
    loading
  }
}

export default useSkipApi;