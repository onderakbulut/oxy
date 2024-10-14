import { useState } from "react"
import { motion } from "framer-motion"
import './index.scss';

function Portfolio() {
    const [hoveredIndex, setHoveredIndex] = useState(0)

    const portfolioItems = [
        { id: 1, title: "New Fashion Website", image: "portfolio-1" },
        { id: 2, title: "Project 2", image: "portfolio-2" },
        { id: 3, title: "Project 3", image: "portfolio-3" },
        { id: 4, title: "Project 4", image: "portfolio-4" },
        { id: 5, title: "Project 5", image: "portfolio-5" }
    ]
    return (  
        <section className="portfolio">
            <div className="portfolio__title">
                Selected Works
            </div>
            <div className="portfolio__list">
                {portfolioItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`portfolio__item ${index == 0 ? '-featured':''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                    >
                        <picture>
                            <source media="(max-width: 420px)" srcSet={`./${item.image}-mobile.webp`} type="image/webp" />
                            <source media="(max-width: 420px)" srcSet={`./${item.image}-mobile.jpg`} type="image/jpg" />
                            <source media="(max-width: 1350px)" srcSet={`./${item.image}-lg.webp`} type="image/webp"/>
                            <source media="(max-width: 1350px)" srcSet={`./${item.image}-lg.jpg`} type="image/jpg"/>
                            <source media="(min-width: 1351px)" srcSet={`./${item.image}.webp`} type="image/webp"/>
                            <source media="(min-width: 1351px)" srcSet={`./${item.image}.jpg`} type="image/jpg"/>
                            <img src={`./${item.image}-mobile.jpg`} width={533} height={533} alt={item.title} />
                        </picture>
                        {hoveredIndex === index && (
                            <motion.div
                                layoutId="overlay"
                                className="portfolio__item-overlay"
                                initial={false}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            >
                                <div className="portfolio__item-title">{item.title}</div>
                            </motion.div>
                        )}
                    </div>
                    ))}
            </div>
        </section>
    );
}

export default Portfolio;