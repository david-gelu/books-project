import { useEffect, useState } from "react";
import { Button, Form, FormControl } from 'react-bootstrap';
import data from "./data";
import Sort from './Sort';


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
              <Sort setFilterBook={setFilterBook} />
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
