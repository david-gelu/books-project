import { useState } from 'react'
import { Button } from 'react-bootstrap'

const Favorite = ({ favArr2, setFilterBook, filterBook}) => {
  const [showEntireListFav,setShowEntireListFav] = useState(false)
  const [showFav, setShowFav] = useState(false)
  
  
  const uniqFavTitle = favArr2.map((title) => {
    return {count: 1, title: title}
  }).reduce((a, b) => {
    a[b.title] = (a[b.title] || 0) + b.count
    return a}, {}
  )
const filterFav = (title) => {
    setFilterBook(filterBook.filter((a) => a.title === title));
  }
  const favTitle = Object.keys(uniqFavTitle).sort((a, b) => uniqFavTitle[a] < uniqFavTitle[b]).filter(a => a.title === uniqFavTitle.title)
  const sizeOpt = 6
  const displayedOptFav = favTitle.filter(o => o).slice(0, sizeOpt)
  const visibleOptFav = favTitle.map(o => o)
  
  return(
    <>
      <Button size='sm' className='filter-btn font-weight-bold' onClick={()=>setShowFav(!showFav)}>Favorites</Button>
      {showFav &&
        <div className='dropdown-container'>
          <div className='fav-container'>
            {!showEntireListFav? displayedOptFav.map((title, idx) =>
              <div className='fav-detail-btn' onClick={()=> filterFav(title)} key={`${idx}-${title}-fav`}>{title}</div>
            ) : visibleOptFav.map((title, idx) =>
            <div className='fav-detail-btn' onClick={()=> filterFav(title)} key={`${idx}-${title}-fav`}>{title}</div>
            )}
            {visibleOptFav.length -1 > sizeOpt && (
              <div className='text-color' onClick={() => {setShowEntireListFav(!showEntireListFav); displayedOptFav.map(o => o)}}>
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