import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage'
import AboutMePage from './Components/AboutMePage'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <div style={{ backgroundImage: `url(${"/Background.jpg"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <Navbar />
            <div id='HomePage' style={{ display: 'none' }}>
                <HomePage />
            </div>
            <div id='HomePage'>
                <AboutMePage />
                w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />w <br />
            </div>
            <Footer />
        </div>
    </div>
)