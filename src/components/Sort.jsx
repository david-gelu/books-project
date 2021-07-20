import { Dropdown } from 'react-bootstrap'

const Sort = ({ setFilterBook, filterBook}) =>{

  const sorted = [...filterBook]
  
  const sortByYearDesc = () => {
    setFilterBook(sorted.sort((a, b) => b.year - a.year))
  }
  const sortByYearAsc = () => {
    setFilterBook(sorted.sort((a, b) => a.year - b.year))
  }
    
  const sortByPagesDesc = () => {
    setFilterBook(sorted.sort((a, b) => b.pages - a.pages))
  }
  const sortByPagesAsc = () => {
    setFilterBook(sorted.sort((a, b) => a.pages - b.pages))
  }
    
  const sortByTitleDesc = () => {
    setFilterBook(sorted.sort((a, b) =>  b.title.localeCompare(a.title)))
  }
  const sortByTitleAsc = () => {
    setFilterBook(sorted.sort((a, b) =>  a.title.localeCompare(b.title)))
  }
    
  const sortByAuthorDesc = () => {
    setFilterBook(sorted.sort((a, b) =>  b.author.localeCompare(a.author)))
  }
  const sortByAuthorAsc = () => {
    setFilterBook(sorted.sort((a, b) =>  a.author.localeCompare(b.author)))
  }

  const sortByCountryDesc = () => {
    setFilterBook(sorted.sort((a, b) =>  b.country.localeCompare(a.country)))
  }
  const sortByCountryAsc = () => {
    setFilterBook(sorted.sort((a, b) =>  a.country.localeCompare(b.country)))
  }
    
  const sortByLanguageDesc = () => {
    setFilterBook(sorted.sort((a, b) =>  b.language.localeCompare(a.language)))
  }
  const sortByLanguageAsc = () => {
    setFilterBook(sorted.sort((a, b) =>  a.language.localeCompare(b.language)))
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