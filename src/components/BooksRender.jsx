import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import data from './data'
import Filters from './Filters'
import Header from './Header'

export default function App() {
    const [jsonData, setJsonData] = useState([])
    const [filterBook, setFilterBook] = useState(jsonData)
    const[count, setCount] = useState(9)
  

    useEffect(() => {
        const makeJsonData = async () => {
            await setJsonData(data)
        }
        makeJsonData()
    }, [jsonData])

    return (
        <>
            <Header />
            <div className='d-flex flex-wrap'>
                <Filters  setFilterBook={setFilterBook} jsonData={jsonData}/>
                <div className="container-books">
          
                    {filterBook
                        .filter((title) => filterBook.title !== title)
                        .slice(0, count)
                        .map(
                            ({title,imageLink,author,country,language,link,pages,year,idx,}) => (
                                <>
                                    <div className="content-books card-item" key={idx}>
                                        <div className="img-container">
                                            <img src={imageLink} alt={author} />
                                        </div>
                                        <div className="details-book card-text">
                                            <div>Title: {title}</div>
                                            <div>Author: {author}</div>
                                            <div>Country: {country}</div>
                                            <div>Language: {language}</div>
                                            <div>Pages: {pages}</div>
                                            <div>Year of publish: {year}</div>
                                            <div>
                                                <a href={link}target="_blank" rel="noreferrer"className="fab fa-wikipedia-w"> Info </a>
                                            </div> 
                                            <Button size='sm' className="detail-btn align">
                                                {title}
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            ))}
                </div>
            </div>
            <div className='show-more'>
                {count < filterBook.length ? <Button size='sm' className='detail-btn' onClick={() => {setCount(count + 9)} }>Show more </Button> : <></>}
            </div>
        </>
    )
}
