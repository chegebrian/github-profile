import React from 'react'
import { useGithubContext } from '../contexts/GithubContext'

function SocialMetrics() {

    const { userData } = useGithubContext();
    const {avatar_url:image, followers, following, location} = userData
    return (
        <section className='flex md:items-center gap-4 md:flex-row flex-col items-start'>
            <img src={image} alt="user-avatar" className='object-cover w-20 rounded-lg'/>
            <div className='flex md:items-center gap-4 md:flex-row flex-col items-start'>
                <div className='flex items-center gap-4 bg-[#111729] text-[#CDD5E0] px-4 py-2 rounded-lg divide-x'>
                    <span className='capitalize pr-4'>followers</span>
                    <span>{followers}</span>
                </div>
                <div className='flex items-center gap-4 bg-[#111729] text-[#CDD5E0] px-4 py-2 rounded-lg divide-x'>
                    <span className='capitalize pr-4'>following</span>
                    <span>{following}</span>
                </div>
                <div className='flex items-center gap-4 bg-[#111729] text-[#CDD5E0] px-4 py-2 rounded-lg divide-x'>
                    <span className='capitalize pr-4'>location</span>
                    <span>{location}</span>
                </div>
            </div>
        </section>
    )
}

export default SocialMetrics