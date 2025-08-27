import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
import './App.css'
import SearchBar from './ui/SearchBar'
import SocialMetrics from './ui/SocialMetrics'

function App() {


  return (
    <>
      <p>hello world</p>
      <SearchBar />
      <SocialMetrics />

    </>
  )
}

export default App
