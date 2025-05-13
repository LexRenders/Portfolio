import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <div style={{ backgroundImage: `url(${"/Background.jpg"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <Navbar />
            <Homepage />
            <Footer />
        </div>
    </div>
)