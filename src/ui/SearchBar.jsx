import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useGithubContext } from '../contexts/GithubContext'

function SearchBar() {
    const { handleQuery, query } = useGithubContext()
    return (
        <div>
            <label htmlFor="search" className='px-4 py-3 bg-[#364153] rounded-xl'>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='mr-3 text-[#CDD5E0]' />
                <input type="text" name="search" id="search" className='outline-0 text-[#CDD5E0]' value={query} onChange={handleQuery} />
            </label>
        </div>
    )
}

export default SearchBar