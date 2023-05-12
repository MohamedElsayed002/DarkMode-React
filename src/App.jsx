import Article from "./Article"
import data from './data'
import {useState , useEffect} from 'react'


const getStorageTheme = () => {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }

  return theme
}

const App = () => {

  // const [theme,setTheme] = useState('light-theme')
  const [theme,setTheme] = useState(getStorageTheme())

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme',theme)
  },[theme])

  const toggleTheme = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme')
    }else {
      setTheme('light-theme')
    }
  }

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={() => toggleTheme()}>toggle</button>
        </div>
      </nav>
      <section className="articles">
        {
          data.map((item ) => {
            return <Article  key={item.id} {...item} />
          })
        }
      </section>
    </main>
  )
}


export default App