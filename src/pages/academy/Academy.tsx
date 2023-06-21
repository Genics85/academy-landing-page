import About from './About'
import Articles from './Articles'
import Categories from './Categories'
import Explore from './Explore'
import Navigation from './Navigation'
import Services from './Services'
import Team from './Team'
import Welcome from './Welcome'
import Footer from './components/Footer'

function Academy() {
  return (
    <>
    <Navigation/>
    <Welcome/>
    <Categories/>
    <Explore/>
    <About/>
    <Services/>
    <Team/>
    <Articles/>
    <Footer/>
    </>
  )
}

export default Academy