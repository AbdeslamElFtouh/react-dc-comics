import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header
        links={[
          { name: 'CHARACTERS', id: 1, active: false },
          { name: 'COMICS', id: 2, active: true },
          { name: 'MOVIES', id: 3, active: false },
          { name: 'TV', id: 4, active: false },
          { name: 'GAMES', id: 5, active: false },
          { name: 'COLLECTIBLES', id: 6, active: false },
          { name: 'VIDEOS', id: 7, active: false },
          { name: 'FANS', id: 8, active: false },
          { name: 'NEWS', id: 9, active: false },
          { name: 'SHOP', id: 10, active: false }
        ]}
      />
      <Main />
      <Footer />
    </>
  )
}

export default App
