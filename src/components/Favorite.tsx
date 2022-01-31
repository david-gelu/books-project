import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Book } from 'src/types'
import * as _ from 'lodash'

const Favorite = (props: any) => {
  const { setFilterBook, filterBook, favArr } = props
  const [showEntireListFav, setShowEntireListFav] = useState(false)
  const [showFav, setShowFav] = useState(false)

  const dataTitle = favArr.map((a: Book) => a)
  const uniqTitle = _.uniq(dataTitle)
  const sortedTitle = uniqTitle.sort((a: string, b: string) => a.localeCompare(b))
  const filterFav = (title: string) => {
    setFilterBook(filterBook.filter((a: Book) => a.title === title));
  }

  const sizeOpt = 6
  const displayedOptFav = sortedTitle.filter((o: string[]) => o).slice(0, sizeOpt)
  const visibleOptFav = sortedTitle.map((o: string[]) => o)

  return (
    <>
      <Button size='sm' className='filter-btn font-weight-bold' onClick={() => setShowFav(!showFav)}>{`Favorite${visibleOptFav.length > 1 ? 's' : ''} ${visibleOptFav.length}`}</Button>
      {!showFav &&
        <div className='dropdown-container'>
          <div className='fav-container'>
            {!showEntireListFav ? displayedOptFav.map((title: string, idx: number) =>
              <div className='fav-detail-btn' onClick={() => filterFav(title)} key={`${idx}-${title}-fav`}>{title}</div>
            ) : visibleOptFav.map((title: any, idx: number) =>
              <div className='fav-detail-btn' onClick={() => filterFav(title)} key={`${idx}-${title}-fav`}>{title}</div>
            )}
            {visibleOptFav.length - 1 > sizeOpt && (
              <div className='text-color' onClick={() => { setShowEntireListFav(!showEntireListFav); displayedOptFav.map((o: string[]) => o) }}>
                {showEntireListFav ? `Hide ${visibleOptFav.length - sizeOpt} titles ` : `Show all ${visibleOptFav.length} titles`}
              </div>
            )}
          </div>
        </div>
      }
    </>
  )
}

export default Favorite