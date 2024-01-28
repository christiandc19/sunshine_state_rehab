import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import WeDo from '../../components/Whatwedo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
// import Team from '../../components/team/TeamSection'
// import HomeSection1 from '../homeSection1/HomeSection1';
import ServicesMH from '../servicesMH/ServicesMH';
import ServicesSA from '../servicesSA/ServicesSA';



const home = () => {
  return (
    <>
    <Whoweare />
    <ServicesSA />
    <WeDo />
    <ServicesMH />
    {/* <HomeSection1 /> */}
    {/* <Team /> */}
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
