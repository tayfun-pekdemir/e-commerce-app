import './App.css'
import { Switch, Route } from 'react-router-dom'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import HomePage from './pages/HomePage'


function App() {

  return (
    <>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </PageContent>
      <Footer />
    </>
  )
}

export default App
