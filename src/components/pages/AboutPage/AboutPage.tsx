import AboutContent from '../../organisms/pages/aboutPage/AboutContent/AboutContent';

import ClientTestimonials from '../../organisms/ClientTestimonials/ClientTestimonials';
import Brand from '../../molecules/pages/mainPage/Brand/Brand';

const AboutPage:React.FC = () => {

    return (
        <section>
            <AboutContent/>
            <ClientTestimonials/>
            <Brand/>
        </section>
    )
}

export default AboutPage;