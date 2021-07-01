import { useEffect, useState } from "react";
import { Button, Dropdown, Form, FormControl } from 'react-bootstrap';
import data from "./data";


export default function App() {
  const [jsonData, setJsonData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterBook, setFilterBook] = useState(jsonData);
  const[count, setCount] = useState(9)
  const[showFilters, setShowFilters] = useState(true)

  useEffect(() => {
    const makeJsonData = async () => {
      await setJsonData(data);
    };
    makeJsonData();
  }, [jsonData]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilterBook(
        jsonData.filter(
          (d) =>
            d.author.toLowerCase().includes(search.toLowerCase()) ||
            d.title.toLowerCase().includes(search.toLowerCase()) ||
            d.country.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, 300);
    return () => clearTimeout(timeout)
  }, [jsonData, search]);

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
      console.log([...sorted].pages)
      return sorted
    })
  }
  const sortByPagesAsc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) => a.pages - b.pages)
      console.log([...sorted].pages)
      return sorted
    })
  }

  const sortByTitleDesc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) =>  b.title.localeCompare(a.title))
      console.log([...sorted].pages)
      return sorted
    })
  }
  const sortByTitleAsc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) =>  a.title.localeCompare(b.title))
      console.log([...sorted].pages)
      return sorted
    })
  }
  
  const sortByAuthorDesc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) =>  b.author.localeCompare(a.author))
      console.log([...sorted].pages)
      return sorted
    })
  }
  const sortByAuthorAsc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) =>  a.author.localeCompare(b.author))
      console.log([...sorted].pages)
      return sorted
    })
  }

  const sortByCountryDesc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) =>  b.country.localeCompare(a.country))
      console.log([...sorted].pages)
      return sorted
    })
  }
  const sortByCountryAsc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) =>  a.country.localeCompare(b.country))
      console.log([...sorted].pages)
      return sorted
    })
  }
  
  const sortByLanguageDesc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) =>  b.country.localeCompare(a.country))
      console.log([...sorted].pages)
      return sorted
    })
  }
  const sortByLanguageAsc = () => {
    setFilterBook((filterBook)=> {
      const sorted = [...filterBook]
      sorted.sort((a, b) =>  a.country.localeCompare(b.country))
      console.log([...sorted].pages)
      return sorted
    })
  }
  
  return (
    <>
      <h1 className="title">
        <i className="fas fa-book mr-2"></i>
        Books for everyone
        <i className="fas fa-book ml-2"></i>
      </h1>
      <div className="d-flex justify-content-around">
      
      </div>
      <div className='d-flex flex-wrap'>
        <div className='d-flex flex-column mt-3'>
          <Form className='position-relative'>
            <FormControl size='sm' className='position-relative w-100 pr-4' type='search' placeholder="Search" value={search}
            aria-label="Search user" onChange={(e) => setSearch(e.target.value ?? null)}></FormControl>
            <i className="fas fa-search search-icon"></i>
          </Form>
          <div className='dropdown-container' >
            <Button size='sm' className='filter-btn' onClick={()=>setShowFilters(!showFilters)}>{`${showFilters ? 'Show filters': 'Hide filters'}`}</Button>
            {!showFilters && <div className='drop-items'>
              <Dropdown size='sm'>
                <Dropdown.Toggle id="dropdown-basic-sort-by-title">
                Sort by Title
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/sortByTitleDesc" onClick={sortByTitleDesc}>Sort by title desc</Dropdown.Item>
                  <Dropdown.Item href="#/sortByTitleAsc" onClick={sortByTitleAsc}>Sort by title asc</Dropdown.Item>
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
                  <Dropdown.Item href="#/sortByAuthorDesc" onClick={sortByCountryDesc}>Sort by country desc</Dropdown.Item>
                  <Dropdown.Item href="#/sortByAuthorAsc" onClick={sortByCountryAsc}>Sort by country asc</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown size='sm'>
                <Dropdown.Toggle id="dropdown-basic-sort-by-title">
                Sort by Language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/sortByAuthorDesc" onClick={sortByLanguageDesc}>Sort by language desc</Dropdown.Item>
                  <Dropdown.Item href="#/sortByAuthorAsc" onClick={sortByLanguageAsc}>Sort by language asc</Dropdown.Item>
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
                  <Dropdown.Item href="#/sortByPagesDesc" onClick={sortByPagesDesc}>Sort by year desc</Dropdown.Item>
                  <Dropdown.Item href="#/sortByPagesAsc" onClick={sortByPagesAsc}>Sort by year asc</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            }
          </div>
        </div>
      <div className="container-books">
        
        {filterBook
        .filter((title) => filterBook.title !== title)
        .slice(0, count)
        .map(
              ({title,imageLink,author,country,language,link,pages,year,idx,}) => (
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
                      <Button size='sm' className="detail-btn cv">More details</Button>
                    </div>
                  </div>
                </>
              ))}
        </div>
      </div>
      {count < filterBook.length ? <Button size='sm' className='detail-btn' onClick={() => {setCount(count + 9)} }>Show more </Button> : <></>}
    </>
  );
}
