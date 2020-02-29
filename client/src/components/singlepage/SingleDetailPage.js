import React, { Fragment } from 'react'

function SingleDetailPage({ details }) {
    return (
        <Fragment>
            {details ? <div>
                {details.map((data, index) => {
                    return <div key={index}>
                    <h3 className="content">Url for Video</h3>
                    <li>{data.url}</li>
                    <h3 className="content">Description</h3>
                    <li>{data.description}</li>
                    <h3 className="content mt-3">Tags</h3>
                    <li>{data.tags.slice(1,-1)}</li>
                    <h3 className="content mt-3">View Count</h3>
                    <li>{data.views}</li>
                    <h3 className="content mt-3">Speaker Occupation</h3>
                    <li>{data.speaker_occupation}</li>
                </div>
                })
                }
            </div> : null
            }
        </Fragment>
    )
}
export default SingleDetailPage