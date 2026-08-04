import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ScheduleSection from './components/ScheduleSection'
import GallerySection from './components/GallerySection'
import LocationSection from './components/LocationSection'
import GuestbookSection from './components/GuestbookSection'
import GreetingSection from './components/GreetingSection'
import FamilySection from './components/FamilySection'
import ShareSection from './components/ShareSection'

export default function App() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ScheduleSection />
      <GallerySection />
      <LocationSection />
      <GuestbookSection />
      <GreetingSection />
      <FamilySection />
      <ShareSection />
    </div>
  )
}
