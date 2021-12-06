import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import data from './data'
import Filters from './Filters'
import Header from './Header'

const BooksRender = () => {
  const [jsData, setJsData] = useState([])
  const [filterBook, setFilterBook] = useState(jsData)
  const [count, setCount] = useState(9)
  const [showFiltersDiv, setShowFiltersDiv] = useState(true)
  const [search, setSearch] = useState('')
  const [favArr, setFavArr] = useState([])
  const [favArr2, setFavArr2] = useState(favArr)

  useEffect(() => {
    const makejsData = async () => {
      await setJsData(data)
    }
    makejsData()
  }, [jsData])

  const favBtn = (title) => {
    setFavArr(jsData.filter((a) => a.title === title).map(t => t.title))
  }
  const value = favArr.map(a => a)
  const setDataFav = () => setFavArr2(prevArr => [...prevArr, value])

  return (
    <>
      <Header />
      <div className='d-flex' >
        <div className='scroll-top'>
          {filterBook.length === 0 ? <div className='filter-left' id='top' aria-expanded={!showFiltersDiv}>
            <Filters favArr2={favArr2} search={search} setSearch={setSearch} showFiltersDiv={showFiltersDiv} filterBook={filterBook} setFilterBook={setFilterBook} jsData={jsData} />
            <div className='filters-collapse'
              onClick={() => setShowFiltersDiv(!showFiltersDiv)}>
              <i className={`fas ${showFiltersDiv ? 'fa-filter' : 'fa-times-circle'}`}></i>
            </div>
          </div> :
            <div className='filter-left' id='top' aria-expanded={!showFiltersDiv}>
              {!showFiltersDiv && <Filters favArr2={favArr2} search={search} setSearch={setSearch} showFiltersDiv={showFiltersDiv} filterBook={filterBook} setFilterBook={setFilterBook} jsData={jsData} />}
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
              .filter((title) => filterBook.title !== title)
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
                      <div key={`${idx}-fav-btn`} onClick={() => { favBtn(title); setDataFav() }} className="fav-btn align">
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