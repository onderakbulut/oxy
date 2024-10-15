import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Component() {
  const [loading, setLoading] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  if (animationComplete) {
    return null
  }

  return (
    <div className="fixed inset-0 z-20">
        <div className="relatvie h-screen w-full overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-blue-50"
                initial={false}
                animate={loading ? { y: 0 } : { y: '-100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
            />
            <motion.div
                className="absolute inset-0 bg-blue-50"
                initial={false}
                animate={loading ? { y: 0 } : { y: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                onAnimationComplete={handleAnimationComplete}
            />
            <motion.div
                className="absolute left-0 right-0 top-1/2 h-[5px] bg-white"
                initial={{ scaleX: 1 }}
                animate={loading ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
        </div>
    </div>
  )
}