import React, { useState, useEffect } from 'react';
import axios from './config/axios'
import Header from './header/header'
import Displaydata from './Displaydata/Displaydata'
function App() {
  const [tedData, setData] = useState(null)
  const [isError, setError] = useState(false)
  const [searchedValue, setValue] = useState(null)
  const [error,setsearchError] = useState(null)

  const getSearchData = (e) => {
      setValue(e.target.value)
  }
  const submitSearch = (e) => {
      e.preventDefault()
      const fetchSearchedValue = async () => {
         try{
             let result = await axios.get(`search/${searchedValue}`)
             setData(result.data)
         }catch(err){
          setsearchError(err)
         }
      }
      fetchSearchedValue()
  }
  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      try {
        let result = await axios.get('/getData')
        setData(result.data)
      } catch (err) {
        setError(true)
      }
    }
    fetchData()
  }, [])
  return (
    <React.Fragment>
      {tedData ?
        <div>
          <Header getSearchData={getSearchData} submitSearch = {submitSearch}/>
          <div className="container app-content">
            <Displaydata tedData={tedData} />
          </div>
        </div>
        : <div className="row app-content">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <h1>Loading...</h1>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default App;
