import { Dropdown } from 'react-bootstrap'

const Sort = ({ setFilterBook, filterBook}) =>{

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
      sorted.sort((a, b) =>  b.language.localeCompare(a.language))
      return sorted
    })
  }
  const sortByLanguageAsc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) =>  a.language.localeCompare(b.language))
      return sorted
    })
  }
    
  return (
    <>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-title">
          Title
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByTitleAsc" onClick={sortByTitleAsc}>Ascending</Dropdown.Item>
          <Dropdown.Item href="#/sortByTitleDesc" onClick={sortByTitleDesc}>Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-title">
          Author
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByAuthorAsc" onClick={sortByAuthorAsc}>Ascending</Dropdown.Item>
          <Dropdown.Item href="#/sortByAuthorDesc" onClick={sortByAuthorDesc}>Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-title">
          Country
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByCountryAsc" onClick={sortByCountryAsc}>Ascending</Dropdown.Item>
          <Dropdown.Item href="#/sortByCountryDesc" onClick={sortByCountryDesc}>Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-title">
          Language
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByLanguageAsc" onClick={sortByLanguageAsc}>Ascending</Dropdown.Item>
          <Dropdown.Item href="#/sortByLanguageDesc" onClick={sortByLanguageDesc}>Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic-sort-by-year">
          Year
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByYearAsc" onClick={sortByYearAsc}>Ascending</Dropdown.Item>
          <Dropdown.Item href="#/sortByYearDesc" onClick={sortByYearDesc}>Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown size='sm'>
        <Dropdown.Toggle id="dropdown-basic-sort-by-pages">
          No. of Pages
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/sortByPagesAsc" onClick={sortByPagesAsc}>Ascending</Dropdown.Item>
          <Dropdown.Item href="#/sortByPagesDesc" onClick={sortByPagesDesc}>Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Sort