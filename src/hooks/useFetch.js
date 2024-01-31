import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (countryEndpoint) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [onlyEven, setOnlyEven] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [nextPage, setNextPage] = useState(null);
    const [hasMore, setHasMore] = useState(false);


    const fetchData = async (url) => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData([...data, ...response.data?.results]);
        setFilteredData([...filteredData, ...response.data?.results]);
        if(response.data?.next) {
          setNextPage(response.data?.next);
          setHasMore(true)
        }else{
          setHasMore(false);
        }
        if (response.data) {
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      setLoading(false);
    }
    
    const fetchMoreData = async (nextPage) => {
       try {
        fetchData(nextPage);
       } catch (error) {
         setError(error);
       }
    }

    useEffect(() => {
      fetchData(countryEndpoint);
    }, [countryEndpoint]);
    
    useEffect(() => {
      // Filter contacts based on the even ID condition
      setFilteredData(data.filter((contact) => !onlyEven || contact.id % 2 === 0));
    }, [data, onlyEven]);
  
    const handleChange = () => {
      // Toggle the 'Only even' checkbox state
      setOnlyEven((prevState) => !prevState);
    };
  
    return { filteredData, handleChange, nextPage, loading, error, fetchMoreData, hasMore };
  };

  export default useFetch;