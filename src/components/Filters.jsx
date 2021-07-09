import { useEffect, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import Favorite from './Favorite'
import Sort from './Sort'


const Filters =({showFiltersDiv, setFilterBook, jsData, filterBook, search, setSearch, favArr2, setFavArr2}) =>{

  const [showSort, setShowSort] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [showAuthors, setShowAuthors] = useState(true)
  const [showTitles, setShowTitles] = useState(true)
  const [showEntireList,setShowEntireList] = useState(false)
  const [showEntireListTitle,setShowEntireListTitle] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilterBook(
        jsData.filter(
          (d) =>
            d.author.toLowerCase().includes(search.toLowerCase()) ||
            d.title.toLowerCase().includes(search.toLowerCase()) ||
            d.country.toLowerCase().includes(search.toLowerCase())
        )
      )
    }, 1000)
    return () => clearTimeout(timeout)
  }, [jsData, setFilterBook, search])

  const uniqAuthor = filterBook.map(({author}) => {
  return {count: 1, author: author}
  }).reduce((a, b) => {
    a[b.author] = (a[b.author] || 0) + b.count
    return a}, {}
  )

  const sortedAuthor = Object.keys(uniqAuthor).sort((a, b) => uniqAuthor[a] < uniqAuthor[b]).filter(a => a.author === uniqAuthor.author)

  const filterAuthor = (author) => {
    setFilterBook(filterBook.filter((a) => a.author === author));
  }

  const uniqTitle = filterBook.map(({title}) => {
  return {count: 1, title: title}
  }).reduce((a, b) => {
    a[b.title] = (a[b.title] || 0) + b.count
    return a}, {}
  )

  const sortedTitle = Object.keys(uniqTitle).sort((a, b) => uniqTitle[a] < uniqTitle[b]).filter(a => a.title === uniqTitle.title)

  const filterTitle = (title) => {
    setFilterBook(filterBook.filter((a) => a.title === title));
  }
  

  const sizeOpt = 6
  const displayedOpt = sortedAuthor.filter(o => o).slice(0, sizeOpt)
  const visibleOpt = sortedAuthor.map(o => o)
  
  const displayedOptTitle = sortedTitle.filter(o => o).slice(0, sizeOpt)
  const visibleOptTitle = sortedAuthor.map(o => o)

  const cancelFilters = () =>{
    setFilterBook(jsData)
    setSearch('')
  }
  return(
    <div className='d-flex flex-column mt-3 filters-container' aria-expanded={!showFiltersDiv}>
      <Form className='position-relative'>
        <FormControl size='sm' className='position-relative w-100 pr-4' type='search' placeholder="Search" value={search}
          aria-label="Search user" onChange={(e) => setSearch(e.target.value ?? null)}></FormControl>
        <i className="fas fa-search search-icon"></i>
      </Form>
      <div className='dropdown-container'>
        <Button size='sm' className='filter-btn font-weight-bold' onClick={()=>setShowSort(!showSort)}>Sort by</Button>
        {!showSort && <div className='drop-items'>
          <Sort filterBook={filterBook} setFilterBook={setFilterBook} />
        </div>
        }
      </div>
      <Button size='sm' className='filter-btn font-weight-bold' onClick={()=>setShowFilters(!showFilters)}>Filters</Button>
      {showFilters &&
      <>
        <div className='dropdown-container'>
          <Button size='sm' className='filter-btn' onClick={()=>setShowAuthors(!showAuthors)}>Filter by Author</Button>
          {!showAuthors && <div className='drop-items filter-cont'>
            {!showEntireList? displayedOpt.map((author, idx) =>
              <div onClick={()=> filterAuthor(author)} key={`${idx}-${author}`}>{author}</div>
            ) : visibleOpt.map((author, idx) =>
            <div onClick={()=> filterAuthor(author)} key={`${idx}-${author}`}>{author}</div>
            )}
            {visibleOpt.length -1 > sizeOpt && (
              <div className='text-color' onClick={() => {setShowEntireList(!showEntireList); displayedOpt.map(o => o)}}>
                {showEntireList ? `Hide ${visibleOpt.length - sizeOpt} authors ` : `Show all ${visibleOpt.length} authors`}
              </div>
            )}
            </div>
          }
        </div>
        <div className='dropdown-container'>
          <Button size='sm' className='filter-btn' onClick={()=>setShowTitles(!showTitles)}>Filter by Title</Button>
          {!showTitles && <div className='drop-items filter-cont'>
            {!showEntireListTitle ? displayedOptTitle.map((title, idx) =>
                <div onClick={()=> filterTitle(title)} key={`${idx}-${title}`}>{title}</div>
              ) : visibleOptTitle.map((title, idx) =>
              <div onClick={()=> filterTitle(title)} key={`${idx}-${title}`}>{title}</div>
              )}
              {visibleOptTitle.length -1 > sizeOpt && (
                <div className='text-color' onClick={() => {setShowEntireListTitle(!showEntireListTitle); displayedOptTitle.map(o => o)}}>
                  {showEntireList ? `Hide ${visibleOptTitle.length - sizeOpt} authors ` : `Show all ${visibleOptTitle.length} authors`}
                </div>
              )}
            </div>
          }
          </div>
        </>
        }
        <Button size='sm' className='filter-btn font-weight-bold' onClick={()=>cancelFilters()}>Remove filters</Button>
        <Favorite favArr2={favArr2} setFavArr2={setFavArr2} setFilterBook={setFilterBook} filterBook={filterBook} />
    </div>
  )
}
export default Filters