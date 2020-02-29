import React, { useEffect, useState, Fragment } from 'react'
import axios from '../config/axios'
import Header from '../header/header'
import SingleDetailPage from './SingleDetailPage'
import Displaydata from '../Displaydata/Displaydata'
function Details(props) {
    const [tedData, setData] = useState(null)
    const [details, setDetails] = useState(null)
    const [searchedValue, setValue] = useState(null)
    const [error, setsearchError] = useState(null)

    const getSearchData = (e) => {
        setValue(e.target.value)
    }
    const submitSearch = (e) => {
        e.preventDefault()
        const fetchSearchedValue = async () => {
            setDetails(null)
            try {
                let result = await axios.get(`search/${searchedValue}`)
                setData(result.data)
            } catch (err) {
                setsearchError(err)
            }
        }
        fetchSearchedValue()
    }
    useEffect(() => {
        console.log('helo')
        const fetchData = async () => {
            let param = Number(props.match.params.id)
            try {
                let result = await axios.get(`/details/${param}`)
                setDetails(result.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
    return (
        <Fragment>
            <Header getSearchData={getSearchData} submitSearch={submitSearch} />
            <div className="container app-content">
                {details ? <div>
                    {details ? <div>
                        {details.map((data, index) => {
                            return <div key={index}>
                                <h3 className="content">Url for Video</h3>
                                <li>{data.url}</li>
                                <h3 className="content">Description</h3>
                                <li>{data.description}</li>
                                <h3 className="content mt-3">Tags</h3>
                                <li>{data.tags.slice(1, -1)}</li>
                                <h3 className="content mt-3">View Count</h3>
                                <li>{data.views}</li>
                                <h3 className="content mt-3">Speaker Occupation</h3>
                                <li>{data.speaker_occupation}</li>
                            </div>
                        })
                        }
                    </div> : null
                    }
                </div>
                    :
                    <div>
                        {tedData?<Displaydata tedData={tedData} />:null}
                    </div>
                }

            </div>
        </Fragment>
    )
}
export default Details