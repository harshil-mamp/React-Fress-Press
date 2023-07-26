import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        return (
            <div>
                <div className="card" style={{ width: "20rem" }}>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <span className="visually-hidden"> {this.props.source}</span>
                    </span>

                    <img src={this.props.imgurl} height="150px" className="card-img-top" alt="..." />


                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{!this.props.desc ? "Discovery of chemical means to reverse aging and restore cellular function" : this.props.desc} ...</p>

                        <p>
                            <small className=" text-danger" >By {!this.props.author ? "Unknown" : this.props.author} on {Date(this.props.date)}</small></p>
                        <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
