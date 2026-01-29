import React, { useState, useEffect, lazy, Suspense } from 'react'
import LoadingOverlay from './components/LoadingOverlay'
import './App.css'

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'))
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const CoreCompetencies = lazy(() => import('./components/CoreCompetencies'))
const PerformanceReel = lazy(() => import('./components/PerformanceReel'))
const TechnicalCaseStudies = lazy(() => import('./components/TechnicalCaseStudies'))
const Toolbox = lazy(() => import('./components/Toolbox'))
const AcademicFoundation = lazy(() => import('./components/AcademicFoundation'))
const GlobalProfile = lazy(() => import('./components/GlobalProfile'))
const Footer = lazy(() => import('./components/Footer'))

// Component loader for lazy loading
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-12">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-green-600/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <div className="w-full h-full m-0 p-0">
      <Suspense fallback={<ComponentLoader />}>
        <Navbar />
        <Home />
        <About />
        <CoreCompetencies />
        <PerformanceReel />
        <TechnicalCaseStudies />
        <Toolbox />
        <AcademicFoundation />
        <GlobalProfile />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
