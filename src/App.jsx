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

function App() {


  return (
    <>
      <BrowserRouter>

        <p>hello world</p>
        <SearchBar />
        <SocialMetrics />
        <Bio />
        <RepoCard />
      </BrowserRouter>

    </>
  )
}

export default App
