import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      className="global-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p>At Integral University, AI is not an add-on. AI is not a trend. <strong>AI is a culture.</strong></p>
    </motion.footer>
  );
}
