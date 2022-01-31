import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import data from '../data'
import Filters from './Filters'
import Header from './Header'
import { Book } from 'src/types'

const BooksRender = () => {
  const [jsData, setJsData] = useState([])
  const [filterBook, setFilterBook] = useState(jsData)
  const [count, setCount] = useState(9)
  const [showFiltersDiv, setShowFiltersDiv] = useState(true)
  const [search, setSearch] = useState('')
  const [favArr, setFavArr] = useState([])

  useEffect(() => {
    const makejsData = () => {
      setJsData(data)
    }
    makejsData()
  }, [jsData])

  const favBtn = (title: string) => {
    setFavArr(filterBook.filter((a) => a.title === title).map(t => t.title))
  }

  const value = favArr.map(a => a)
  const setDataFav = () => setFavArr(prev => prev.concat(value))

  return (
    <>
      <Header />
      <div className='d-flex' >
        <div className='scroll-top'>
          {filterBook.length === 0 ? <div className='filter-left' id='top' aria-expanded={!showFiltersDiv}>
            <Filters favArr={favArr} search={search} setSearch={setSearch} showFiltersDiv={showFiltersDiv} filterBook={filterBook} setFilterBook={setFilterBook} jsData={jsData} />
            <div className='filters-collapse'
              onClick={() => setShowFiltersDiv(!showFiltersDiv)}>
              <i className={`fas ${showFiltersDiv ? 'fa-filter' : 'fa-times-circle'}`}></i>
            </div>
          </div> :
            <div className='filter-left' id='top' aria-expanded={!showFiltersDiv}>
              {!showFiltersDiv && <Filters favArr={favArr} search={search} setSearch={setSearch} showFiltersDiv={showFiltersDiv} filterBook={filterBook} setFilterBook={setFilterBook} jsData={jsData} />}
              <div className='filters-collapse'
                onClick={() => setShowFiltersDiv(!showFiltersDiv)}>
                <i className={`fas ${showFiltersDiv ? 'fa-filter' : 'fa-times-circle'}`}></i>
              </div>
            </div>}
          <a href='#top' className='back-top'><i className="fas fa-arrow-circle-up"></i></a>
        </div>
        {filterBook.length !== 0 ?
          <div className="container-books">
            {filterBook
              .filter((title: any) => filterBook.map((t: any) => t.title) !== title)
              .slice(0, count)
              .map(({ title, imageLink, author, country, language, link, pages, year, idx }) => (
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
                        <a href={link} target="_blank" rel="noreferrer" className="fab fa-wikipedia-w"> Info </a>
                      </div>
                      <div key={`${idx}-btn`} size='sm' className="detail-btn align">
                        {title}
                      </div>
                      <div key={`${idx}-fav-btn`} className="fav-btn align"
                        onClick={() => {
                          favBtn(title)
                          setDataFav()
                        }}>
                        Add to favorite
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div> : <div className='loader'>
            <h1>Library is opening</h1>
          </div>}
      </div>
      <div className='show-more'>
        {count < filterBook.length ? <Button size='sm' className='detail-btn' onClick={() => { setCount(count + 9) }}>Show more </Button> : <></>}
      </div>
    </>
  )
}


export default BooksRender