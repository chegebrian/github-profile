import { format, parseISO } from 'date-fns'
import React from 'react'
import { NavLink } from 'react-router'


function RepoCard({ repo }) {
    const { forks, name, html_url, watchers, license, updated_at, description } = repo

    const date = parseISO(updated_at)
    const formatDate = format(date, 'MMMM dd, yyyy hh:mm a')

    return (
        <NavLink to={html_url} className='bg-gradient-to-r from-[#111729] to-[#1D1B48] p-4 rounded-lg flex flex-col gap-2'>
            <h3 className='text-[#CDD5E0] font-semibold text-lg'>{name}</h3>
            <p className='text-[#97A3B6]'>{description}</p>
            <div className='flex sm:items-center items-start sm:flex-row flex-col gap-4 text-[#97A3B6]'>
                {license && <div className='flex items-center gap-1'><img src="/public/images/Chield_alt.svg" alt="shield-logo" /> <span className='uppercase'>{license.key}</span></div>}
                {forks && <div className='flex items-center gap-1'><img src="/public/images/Nesting.svg" alt="nesting-logo" /><span>{forks}</span></div>}
                {watchers && <div className='flex items-center gap-1'><img src="/public/images/Star.svg" alt="star-logo" /><span>{watchers}</span></div>}
                <span>Last updated at {formatDate}</span>
            </div>
        </NavLink>
    )
}

export default RepoCard