import React from 'react'
import { useGithubContext } from '../contexts/GithubContext'

function Bio() {
    const { userData } = useGithubContext()
    const{bio ,name, login} = userData
    return (
        <div className='text-[#CDD5E0]'>
            <p className='capitalize font-semibold text-3xl'>{name || login}</p>
            <h2 >{bio}</h2>
        </div>
    )
}

export default Bio