import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {



    constructor(props) {
        super(props);
        console.log("cunstructor called.")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `The Fresh Presh - ${this.props.category}`
    }
    async updatePage(page = 1) {
        this.props.setprogress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.page}&page=${page}`
        this.setState({ loading: true })


        let data = await fetch(url);
        this.props.setprogress(30);
        let parseData = await data.json()
        console.log(parseData);
        this.props.setprogress(60);
        this.setState({ articles: parseData.articles, page: page, totalArticles: parseData.totalResults, loading: false })
        this.props.setprogress(100);

    }
    async componentDidMount() {
        this.updatePage()
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.countryName !== this.props.countryName) {
            await this.updatePage();
        }
    }



    handleNextClick = async () => {
        console.log(this.state.page)
        console.log("Next")
        console.log(this.state.page + 1)
        this.setState({
            page: this.state.page + 1,
        })
        this.updatePage(this.state.page + 1)





    }
    handlePreviousClick = async () => {
        console.log(this.state.page)
        console.log("Previous")
        console.log(this.state.page - 1)
        this.setState({
            page: this.state.page - 1,
        })
        this.updatePage(this.state.page - 1)

    }
    render() {
        console.log("render")
        return (
            <>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <div className="container my-5">
                    <h1 className='text-center' style={{ marginTop: "90px" }}>The Fress Press - Top {this.props.category} headlines in {this.props.countryName}</h1>

                    <div className='row my-5'>
                        {this.state.articles && this.state.articles.map((element) => {
                            return <div className="col my-2" key={element.url}>
                                <NewsItem title={!element.title ? "" : element.title} desc={!element.description ? "" : element.description.slice(0, 60)} imgurl={!element.urlToImage ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png" : element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>


                        })}


                    </div>
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}> Previous</button>
                        <button disabled={this.state.page >= Math.ceil(this.state.totalArticles / this.props.page)} className="btn btn-dark" onClick={this.handleNextClick}>Next</button>

                    </div>
                </div>}
            </>

        )
    }
}

export default News 