import classNames from 'classnames';
import { motion } from 'framer-motion';

const LoadingWrapper = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale:1 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    className={classNames('flex flex-col bg-js-black', className)}
    transition={{type: 'spring', bounce: 0.1, duration: 5}}
  >
    {children}
  </motion.div>
);

export default LoadingWrapper;
