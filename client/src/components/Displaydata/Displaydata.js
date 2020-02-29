import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
function Displaydata(props) {
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(8)
    const previous = () => {
        setStart(start - 8)
        setEnd(end - 8)
    }
    const next = () => {
        setStart(start + 8)
        setEnd(end + 8)
    }
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Tile</th>
                        <th scope="col">main_speaker</th>
                        <th scope="col">Event</th>
                        <th scope="col">Date</th>
                        {/* <th scope="col">Rela</th> */}
                    </tr>
                </thead>
                {props.tedData.slice(start, end).map((data, index) => {
                    const dateToFormat = Number(data.published_date)
                    return <tbody key={index}>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.title}</td>
                            <td>{data.main_speaker}</td>
                            <td>{data.event}</td>
                            <td>{moment.unix(dateToFormat).format("DD-MM-YYYY")}</td>
                            <td><Link to={`details/${data.id}`}>View more</Link></td>
                        </tr>

                    </tbody>
                })}
            </table>
            <div className="row">
                {start !== 0 ?
                    <div className='col-sm-6' style={{ "marginLeft": "40%" }}>
                        <button onClick={previous} className="btn btn-primary">Previous</button>
                    </div>
                    : null
                }
                {end <= props.tedData.length ?
                    <div className='col-sm-6' style={{ "position": "absolute", "right": "0" }}>
                        <button onClick={next} className="btn btn-primary" style={{ "float": "left" }}>Next</button>
                    </div>
                    : null}
            </div>
        </div>
    )
}
export default Displaydata