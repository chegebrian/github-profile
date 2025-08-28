import React from 'react'
import { useGithubContext } from '../contexts/GithubContext'

function Bio() {
    const { userData } = useGithubContext()
    const{bio ,name, login} = userData
    return (
        <div className=''>
            <p className='capitalize font-semibold text-3xl'>{name || login}</p>
            <h2 >{bio}</h2>
        </div>
    )
}

export default Bio