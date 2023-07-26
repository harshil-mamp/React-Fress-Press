import React from 'react'


export default function NewsItem(props) {
    return (
        <div>
            <div className="card" style={{ width: "20rem" }}>
                <span className="position-absolute top-0 start-100 translate-middle badge  text-white bg-dark" style={{ opacity: "0.5" }}>
                    <span className="visually-hidden"> {props.source}</span>
                </span>

                <img src={props.imgurl} height="150px" className="card-img-top" alt="..." />


                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{!props.desc ? "Discovery of chemical means to reverse aging and restore cellular function" : props.desc} ...</p>

                    <p>
                        <small className=" text-danger" >By {!props.author ? "Unknown" : props.author} on {Date(props.date)}</small></p>
                    <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>

                </div>
            </div>
        </div>
    )
}


