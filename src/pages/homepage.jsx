import Hero from '@/components/hero/hero'
import Services from '@/components/services/services'
import Portfolio from '@/components/portfolio/portfolio'

function HomePage() {
    return (  
        <div>
            <Hero />
            <Services />
            <Portfolio />
        </div>
    );
}

export default HomePage;