import { useEffect, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import Sort from './Sort'


const Filters =({setFilterBook, jsonData}) =>{

    const [search, setSearch] = useState('')
    const[showFilters, setShowFilters] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFilterBook(
                jsonData.filter(
                    (d) =>
                        d.author.toLowerCase().includes(search.toLowerCase()) ||
            d.title.toLowerCase().includes(search.toLowerCase()) ||
            d.country.toLowerCase().includes(search.toLowerCase())
                )
            )
        }, 300)
        return () => clearTimeout(timeout)
    }, [jsonData, setFilterBook, search])

    return(
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
    )
}
export default Filters