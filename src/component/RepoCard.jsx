import React from 'react'
import { NavLink } from 'react-router'


function RepoCard() {

    return (
        <NavLink className='p-4 border border-amber-950 rounded-lg flex flex-col gap-2'>
            <h3>github</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, totam?</p>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'><img src="/public/images/Chield_alt.svg" alt="shield-logo" /> <span>mit</span></div>
                <div className='flex items-center gap-1'><img src="/public/images/Nesting.svg" alt="nesting-logo" /><span>90</span></div>
                <div className='flex items-center gap-1'><img src="/public/images/Star.svg" alt="star-logo" /><span>100</span></div>
                <span>updated 2 days ago</span>
            </div>
        </NavLink>
    )
}

export default RepoCard