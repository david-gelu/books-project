import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import data from './data'
import Filters from './Filters'
import Header from './Header'

export default function App() {
  const [jsData, setJsData] = useState([])
  const [filterBook, setFilterBook] = useState(jsData)
  const[count, setCount] = useState(9)
  const [showFiltersDiv, setShowFiltersDiv] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
      const makejsData = async () => {
          await setJsData(data)
      }
      makejsData()
  }, [jsData])

  const cancelFilters = () =>{
    setFilterBook(jsData)
    setSearch('')
  }

  return (
        <>
        <Header />
          <div className='d-flex' >
            <div className='scroll-top'>
            { filterBook.length === 0 ? <div className='filter-left' id='top' aria-expanded={!showFiltersDiv}>
                <Filters search={search} setSearch={setSearch} cancelFilters={cancelFilters} showFiltersDiv={showFiltersDiv} filterBook={filterBook} setFilterBook={setFilterBook} jsData={jsData}/>
                <div className='filters-collapse'
                  onClick={()=> {setShowFiltersDiv(!showFiltersDiv); cancelFilters()}}>
                  <i className={`fas ${showFiltersDiv ? 'fa-filter' :'fa-times-circle'}`}></i>
                </div>
              </div>:
              <div className='filter-left' id='top' aria-expanded={!showFiltersDiv}>
              {!showFiltersDiv && <Filters search={search} setSearch={setSearch} cancelFilters={cancelFilters} showFiltersDiv={showFiltersDiv} filterBook={filterBook} setFilterBook={setFilterBook} jsData={jsData}/>}
              <div className='filters-collapse'
                onClick={()=> {setShowFiltersDiv(!showFiltersDiv); cancelFilters()}}>
                <i className={`fas ${showFiltersDiv ? 'fa-filter' :'fa-times-circle'}`}></i>
              </div>
            </div>}
              <a href='#top' className='back-top'><i className="fas fa-arrow-circle-up"></i></a>
            </div>
            {filterBook.length !== 0 ? 
            <div className="container-books">
              {filterBook
                .filter((title) => filterBook.title !== title)
                .slice(0, count)
                .map(({title, imageLink, author, country, language, link, pages, year, idx}) => (
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
                        <div key={`${idx}-btn`} size='sm' className="detail-btn align">
                          {title}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
          </div> : <div className='loader'>Library is opening</div>}
        </div>
        <div className='show-more'>
          {count < filterBook.length ? <Button size='sm' className='detail-btn' onClick={() => {setCount(count + 9)} }>Show more </Button> : <></>}
        </div>
    </> 
  )
}
