import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Router from './Navigation/Router'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950 to-indigo-950">
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <BrowserRouter>
                <Navbar />
                <div className="h-full">
                    <Router />
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    </div>
)



