import { Dropdown } from 'react-bootstrap';

const Sort = ({ setFilterBook}) =>{

    const sortByYearDesc = () => {
        setFilterBook((filterBook)=> {
            const sorted = [...filterBook]
            sorted.sort((a, b) => b.year - a.year)
            return sorted
        })
    }
    const sortByYearAsc = () => {
        setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) => a.year - b.year)
        return sorted
      })
    }
    
    const sortByPagesDesc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) => b.pages - a.pages)
        return sorted
      })
    }
    const sortByPagesAsc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) => a.pages - b.pages)
        return sorted
      })
    }
    
    const sortByTitleDesc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) =>  b.title.localeCompare(a.title))
        return sorted
      })
    }
    const sortByTitleAsc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) =>  a.title.localeCompare(b.title))
        return sorted
      })
    }
    
    const sortByAuthorDesc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) =>  b.author.localeCompare(a.author))
        return sorted
      })
    }
    const sortByAuthorAsc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) =>  a.author.localeCompare(b.author))
        return sorted
      })
    }
  
    const sortByCountryDesc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) =>  b.country.localeCompare(a.country))
        return sorted
      })
    }
    const sortByCountryAsc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) =>  a.country.localeCompare(b.country))
        return sorted
      })
    }
    
    const sortByLanguageDesc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) =>  b.country.localeCompare(a.country))
        return sorted
      })
    }
    const sortByLanguageAsc = () => {
      setFilterBook((filterBook)=> {
        const sorted = [...filterBook]
        sorted.sort((a, b) =>  a.country.localeCompare(b.country))
        return sorted
      })
    }

  return (
    <>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-title">
        Sort by Title
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByTitleAsc" onClick={sortByTitleAsc}>Sort by title <i className="fas fa-arrow-up"></i></Dropdown.Item>
          <Dropdown.Item href="#/sortByTitleDesc" onClick={sortByTitleDesc}>Sort by title <i className="fas fa-arrow-down"></i></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-title">
        Sort by Author
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByAuthorDesc" onClick={sortByAuthorDesc}>Sort by author desc</Dropdown.Item>
          <Dropdown.Item href="#/sortByAuthorAsc" onClick={sortByAuthorAsc}>Sort by author asc</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-title">
        Sort by Country
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByCountryDesc" onClick={sortByCountryDesc}>Sort by country desc</Dropdown.Item>
          <Dropdown.Item href="#/sortByCountryAsc" onClick={sortByCountryAsc}>Sort by country asc</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-title">
        Sort by Language
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByLanguageDesc" onClick={sortByLanguageDesc}>Sort by language desc</Dropdown.Item>
          <Dropdown.Item href="#/sortByLanguageAsc" onClick={sortByLanguageAsc}>Sort by language asc</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic-sort-by-year">
        Sort by Year
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByYearDesc" onClick={sortByYearDesc}>Sort by year desc</Dropdown.Item>
          <Dropdown.Item href="#/sortByYearAsc" onClick={sortByYearAsc}>Sort by year asc</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-pages">
        Sort by No. of Pages
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByPagesDesc" onClick={sortByPagesDesc}>Sort by pages desc</Dropdown.Item>
          <Dropdown.Item href="#/sortByPagesAsc" onClick={sortByPagesAsc}>Sort by pages asc</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Sort