// src/pages/Home.jsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/Testimonials'
import BeforeAfterSection from '../components/BeforeAfterSection'
import QuoteSection from '../components/QuoteSection'
import HowItWorksSection from '../components/HowItWorksSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import ContactSection from '../components/Contact'
import FAQSection from '../components/Faqs'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero/>
     <ServicesSection/>
     <TestimonialsSection/>
     <BeforeAfterSection/>
     <QuoteSection/>
     <HowItWorksSection/>
     <WhyChooseUsSection/>
     <FAQSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home