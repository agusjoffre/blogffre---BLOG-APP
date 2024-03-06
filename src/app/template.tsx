'use client'
import { motion } from 'framer-motion'
interface Props {
  children: React.ReactNode
}

const Template = ({ children }: Props): JSX.Element => {
    return <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ease: 'easeInOut', duration: 0.75}}
    >{children}</motion.div>
}

export default Template
