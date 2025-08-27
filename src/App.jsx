
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import HeroGradient from './components/heroSection/HeroGradient'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillMain from './components/skillSection/SkillMain'
import SubSkill from './components/skillSection/SubSkill'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {
  return (
    <div className='bg-gray-700'>
        <NavbarMain/>
        <HeroMain/>
        <HeroGradient/>
        <SubHeroSection/>
        <AboutMeMain/>
        <SkillMain/>
        <SubSkill/>
        <ExperienceMain/>
        <ProjectsMain/>
        <ContactMeMain/>
        <FooterMain/>
        <HelperSection/>
    </div>
  )
}

export default App
