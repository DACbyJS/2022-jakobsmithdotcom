import classNames from 'classnames';
import { motion } from 'framer-motion';

const LoadingWrapper = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 0 }}
    className={classNames('flex flex-col bg-js-black', className)}
    transition={{ damping: 50, duration: 3, stiffness: 50 }}
  >
    {children}
  </motion.div>
);

export default LoadingWrapper;
