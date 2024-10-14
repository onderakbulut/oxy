import Hero from '@/components/hero/hero'
import Services from '@/components/services/services'
import Portfolio from '@/components/portfolio/portfolio'
import Team from '@/components/team/team'
import Testimonials from '@/components/testimonials/testimonials'

function HomePage() {
    return (  
        <div>
            <Hero />
            <Services />
            <Portfolio />
            <Team />
            <Testimonials />
        </div>
    );
}

export default HomePage;