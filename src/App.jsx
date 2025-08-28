import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
import './App.css'
import SearchBar from './ui/SearchBar'
import SocialMetrics from './ui/SocialMetrics'
import Bio from './ui/Bio'
import RepoCard from './component/RepoCard'
import { BrowserRouter } from 'react-router'
import { useGithubContext } from './contexts/GithubContext'


function App() {

  const { filteredRepos:repos, handleDisplay, displayAll } = useGithubContext()

  return (
    <>
      <BrowserRouter>
        <header className='flex p-4 items-center justify-center bg-[url(/images/hero-image-github-profile.jpg)] object-cover bg-center h-60 max-w-screen'>
          <SearchBar />
        </header>
        <main className='bg-[#20293A] p-4'>
          <section className='max-w-7xl flex flex-col mx-auto gap-8'>
            <SocialMetrics />
            <Bio />
            <section className='grid gap-4 lg:grid-cols-2'>
              {repos?.map((repo) => <RepoCard repo={repo} key={repo.id} />)}
            </section>
            <span>
            <button onClick={handleDisplay} className='bg-[#CDD5E0] text-[#111729] font-semibold rounded-full py-2 px-4 capitalize cursor-pointer'>{displayAll ? "show less" : "show all"}</button>
            </span>
          </section>
        </main>

      </BrowserRouter>

    </>
  )
}

export default App
