import type { FunctionComponent } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutMePage from '../Pages/AboutMePage'
import InternshipPage from '../Pages/InternshipPage'
import ProjectsPage from '../Pages/ProjectsPage'
import ContactPage from '../Pages/ContactPage'
import NotfoundPage from '../Pages/NotFoundPage'

const Router: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/about-me'} element={<AboutMePage />} />
            <Route path={'/internship'} element={<InternshipPage />} />
            <Route path={'/projects'} element={<ProjectsPage />} />
            <Route path={'/contact'} element={<ContactPage />} />
            <Route path='*' element={<NotfoundPage />} />
        </Routes>
    )
}

export default Router;