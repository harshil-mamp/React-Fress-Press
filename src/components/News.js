import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export default function News(props) {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalarticles, settotalarticles] = useState(0)
    document.title = ` ${props.category.toUpperCase()} -The Fresh Presh`

    const updatePage = async (page = 1) => {
        props.setprogress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.page}&page=${page}`
        // this.setState({ loading: true })
        setloading(true)


        let data = await fetch(url);
        props.setprogress(10);
        let parseData = await data.json()
        props.setprogress(30);
        console.log(parseData);
        props.setprogress(50);
        // this.setState({ articles: parseData.articles, page: page, totalArticles: parseData.totalResults, loading: false })
        setarticles(parseData.articles)
        setpage(page)
        settotalarticles(parseData.totalResults)
        setloading(false)
        props.setprogress(100);

    }
    useEffect(() => {
        updatePage()
    }, [props.country])


    // async componentDidUpdate(prevProps) {
    //     if (prevProps.countryName !== props.countryName) {
    //         await this.updatePage();
    //     }
    // }



    const handleNextClick = async () => {
        console.log(page)
        console.log("Next")
        console.log(page + 1)
        setpage(page + 1)
        updatePage(page + 1)





    }
    const handlePreviousClick = async () => {
        console.log(page)
        console.log("Previous")
        console.log(page - 1)
        setpage(page - 1)
        updatePage(page - 1)

    }
    return (
        <>
            {loading && <Spinner />}
            {!loading && <div className="container my-5">
                <h1 className='text-center' style={{ marginTop: "90px" }}>The Fress Press - Top {props.category} headlines of {props.country === "us" ? "USA" : null}
                    {props.country === "in" ? "INDIA " : null}
                    {props.country === "jp" ? "JAPAN" : null}
                    {props.country === "nz" ? "New Zealand" : null}
                    {props.country === "rs" ? "Russia" : null}
                    {props.country === "it" ? "Itali " : null}</h1>

                <div className='row my-5'>
                    {articles && articles.map((element) => {
                        return <div className="col my-2" key={element.url}>
                            <NewsItem title={!element.title ? "" : element.title} desc={!element.description ? "" : element.description.slice(0, 60)} imgurl={!element.urlToImage ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png" : element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>


                    })}


                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={page <= 1} className="btn btn-dark" onClick={handlePreviousClick}> Previous</button>
                    <button disabled={page >= Math.ceil(totalarticles / props.page)} className="btn btn-dark" onClick={handleNextClick}>Next</button>

                </div>
            </div>}
        </>
    )
}





