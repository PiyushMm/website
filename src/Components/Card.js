import React from 'react'

export default function Card(props) {
    const {image,title,text} = props
    return (
        <div>

            <div className="card" style={{width: "18rem"}}>
                <img style={{height:"200px"}} src={image} className="card-img-top p-2 shadow" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}
