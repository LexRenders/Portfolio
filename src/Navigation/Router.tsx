import type { FunctionComponent } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import AboutMePage from '../Components/AboutMePage'

const Router: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/about-me'} element={<AboutMePage />} />
        </Routes>
    )
}

export default Router;