import './index.scss';
import { motion, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const teamItems = [
    { id: 1, name: "Cristian", surname: "Brown", role: "Creative Director", image: "member-1", color: "text-pink-50" },
    { id: 2, name: "Sara", surname: "Foster", role: "Account Manager", image: "member-2", color: "text-green-50" },
    { id: 3, name: "Rachel", surname: "Smith", role: "Graphic Designer", image: "member-3", color: "text-orange-50" },
]

const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        duration: 0.4,
      },
    },
};

const itemVariants = {
    hidden: { 
        visibility: "hidden", 
        y: 100, 
        x: 100,
        scale: 0,
    },
    visible: {
      visibility: "visible",
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.4, 
      }
    }
};

function Team() {
    const ref = useRef(null)
    const [isDelayedInView, setIsDelayedInView] = useState(false)
    const isInView = useInView(ref, { once: false, amount: 0.2 })

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setIsDelayedInView(true)
            }, 500)
            return () => clearTimeout(timer)
        } else {
            setIsDelayedInView(false)
        }
    }, [isInView])

    return (
        <section className="team" ref={ref}>
            <div className="team__title">Meet Our Team</div>
            <div className="team__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <motion.div className="team__list"
                variants={containerVariants}
                initial="hidden"
                animate={isDelayedInView ? "visible" : "hidden"}
            >
                {teamItems.map((item, index) => (
                    <div className="team__member" key={index}>
                        <picture>
                            <source media="(max-width: 420px)" srcSet={`./team/${item.image}-mobile.webp`} type="image/webp" />
                            <source media="(max-width: 420px)" srcSet={`./team/${item.image}-mobile.jpg`} type="image/jpg" />
                            <source media="(min-width: 421px)" srcSet={`./team/${item.image}.webp`} type="image/webp"/>
                            <source media="(min-width: 421px)" srcSet={`./team/${item.image}.jpg`} type="image/jpg"/>
                            <img src={`./team/${item.image}.jpg`} width={263} height={404} alt={item.title} />
                        </picture>
                        
                        <motion.div className={`team__shape ${item.color}`} variants={itemVariants}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="271.2" height="267.649" viewBox="0 0 271.2 267.649">
                                <path id="Color_spot_" data-name="Color spot " d="M277.639,256.565C238.269,320.855,143.112,362.4,78.177,324.1S1.156,168.677,47.567,109.27C131.874,1.356,345.643,145.516,277.639,256.565Z" transform="translate(-19.587 -71.142)" fill="currentColor" style={{mixBlendMode: 'multiply', isolation: 'isolate'}} />
                            </svg>
                        </motion.div>
                        <div className="team__info">
                            <div className="team__info-name">{item.name} <br /> {item.surname}</div>
                            <div className="team__info-role">{item.role}</div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
      );
}

export default Team;
