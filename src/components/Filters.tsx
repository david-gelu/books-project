import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import Favorite from './Favorite'
import Sort from './Sort'
import { Book } from 'src/types'
import * as _ from 'lodash'


const Filters = (
  props: any
) => {
  const [showSort, setShowSort] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [showAuthors, setShowAuthors] = useState(true)
  const [showTitles, setShowTitles] = useState(true)
  const [showEntireList, setShowEntireList] = useState(false)
  const [showEntireListTitle, setShowEntireListTitle] = useState(false)
  const { showFiltersDiv, setFilterBook, jsData, filterBook, search, setSearch, favArr, setFavArr } = props

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilterBook(
        jsData.filter(
          (d: any) =>
            d.author.toLowerCase().includes(search.toLowerCase()) ||
            d.title.toLowerCase().includes(search.toLowerCase()) ||
            d.country.toLowerCase().includes(search.toLowerCase())
        )
      )
    }, 1000)
    return () => clearTimeout(timeout)
  }, [jsData, setFilterBook, search])

  const dataAuthor = filterBook.map((a: Book) => a.author)
  const uniqAuthor = _.uniq(dataAuthor)
  const sortedAuthor = uniqAuthor.sort((a: string, b: string) => a.localeCompare(b))
  const filterAuthor = (author: string) => {
    setFilterBook(filterBook.filter((a: Book) => a.author === author));
  }

  const dataTitle = filterBook.map((a: Book) => a.title)
  const uniqTitle = _.uniq(dataTitle)
  const sortedTitle = uniqTitle.sort((a: string, b: string) => a.localeCompare(b))
  const filterTitle = (title: string) => {
    setFilterBook(filterBook.filter((a: Book) => a.title === title));
  }

  const sizeOpt = 6
  const displayedOpt = sortedAuthor.filter((o: string[]) => o).slice(0, sizeOpt)
  const visibleOpt = sortedAuthor.map((o: string[]) => o)

  const displayedOptTitle = sortedTitle.filter((o: string[]) => o).slice(0, sizeOpt)
  const visibleOptTitle = sortedTitle.map((o: string[]) => o)

  const cancelFilters = () => {
    setFilterBook(jsData)
    setSearch('')
  }
  return (
    <div className='d-flex flex-column mt-3 filters-container' aria-expanded={!showFiltersDiv}>
      <Form className='position-relative'>
        <FormControl size='sm' className='position-relative w-100 pr-4' type='search' placeholder="Search" value={search}
          aria-label="Search user" onChange={(e) => setSearch(e.target.value ?? null)}></FormControl>
        <i className="fas fa-search search-icon"></i>
      </Form>
      <div className='dropdown-container'>
        <Button size='sm' className='filter-btn font-weight-bold' onClick={() => setShowSort(!showSort)}>Sort by</Button>
        {!showSort && <div className='drop-items'>
          <Sort filterBook={filterBook} setFilterBook={setFilterBook} />
        </div>
        }
      </div>
      <Button size='sm' className='filter-btn font-weight-bold' onClick={() => setShowFilters(!showFilters)}>Filters</Button>
      {showFilters &&
        <>
          <div className='dropdown-container'>
            <Button size='sm' className='filter-btn' onClick={() => setShowAuthors(!showAuthors)}>Filter by Author</Button>
            {!showAuthors && <div className='drop-items filter-cont'>
              {!showEntireList ? displayedOpt.map((author: string, idx: number) =>
                <div onClick={() => filterAuthor(author)} key={`${idx}-${author}`}>{author}</div>
              ) : visibleOpt.map((author: any, idx: number) =>
                <div onClick={() => filterAuthor(author)} key={`${idx}-${author}`}>{author}</div>
              )}
              {visibleOpt.length - 1 > sizeOpt && (
                <div className='text-color' onClick={() => { setShowEntireList(!showEntireList); displayedOpt.map((o: string[]) => o) }}>
                  {showEntireList ? `Hide ${visibleOpt.length - sizeOpt} authors ` : `Show all ${visibleOpt.length} authors`}
                </div>
              )}
            </div>
            }
          </div>
          <div className='dropdown-container'>
            <Button size='sm' className='filter-btn' onClick={() => setShowTitles(!showTitles)}>Filter by Title</Button>
            {!showTitles && <div className='drop-items filter-cont'>
              {!showEntireListTitle ? displayedOptTitle.map((title: string, idx: number) =>
                <div onClick={() => filterTitle(title)} key={`${idx}-${title}`}>{title}</div>
              ) : visibleOptTitle.map((title: any, idx: number) =>
                <div onClick={() => filterTitle(title)} key={`${idx}-${title}`}>{title}</div>
              )}
              {visibleOptTitle.length - 1 > sizeOpt && (
                <div className='text-color' onClick={() => { setShowEntireListTitle(!showEntireListTitle); displayedOptTitle.map((o: string[]) => o) }}>
                  {showEntireList ? `Hide ${visibleOptTitle.length - sizeOpt} authors ` : `Show all ${visibleOptTitle.length} authors`}
                </div>
              )}
            </div>
            }
          </div>
        </>
      }
      <Button size='sm' className='filter-btn font-weight-bold' onClick={() => cancelFilters()}>Remove filters</Button>
      <Favorite favArr={favArr} setFavArr={setFavArr} setFilterBook={setFilterBook} filterBook={filterBook} />
    </div>
  )
}
export default Filters