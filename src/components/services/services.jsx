import './index.scss';
import ServicesIcon from '@/assets/services-item.svg?react';
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      duration: 0.2,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.1, 
      },
    },
  };

function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })
    return (  
        <section className="services" ref={ref}>
            <div className="services__lines">
                <div className="services__line -left"></div>
                <div className="services__line -center"></div>
                <div className="services__line -right"></div>
            </div>
            <div className="services__title">What We Do</div>
            <div className="services__container">
                <motion.div 
                    className="services__items"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className="services__item" variants={itemVariants}>
                        <ServicesIcon fill="currentColor" className="services__icon text-pink-50" />
                        <div className="services__item-desc">Design</div>
                    </motion.div>
                    <motion.div className="services__item" variants={itemVariants}>
                        <ServicesIcon fill="currentColor" className="services__icon text-green-50" />
                        <div className="services__item-desc">Branding</div>
                    </motion.div>
                    <motion.div className="services__item" variants={itemVariants}>
                        <ServicesIcon fill="currentColor" className="services__icon text-blue-100" />
                        <div className="services__item-desc">Illustrations</div>
                    </motion.div>
                    <motion.div className="services__item" variants={itemVariants}>
                        <ServicesIcon fill="currentColor" className="services__icon text-orange-50" />
                        <div className="services__item-desc">Photography</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Services;
