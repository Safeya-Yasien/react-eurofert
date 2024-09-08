import PropTypes from "prop-types";

import { motion, AnimatePresence } from "framer-motion";

import { PRODUCTS } from "../../../assets";

import styles from "./product.module.scss";
const { productContainer, productImage, description } = styles;

const Product = ({ product }) => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ transform: "scale(0.3)" }}
          animate={{ transform: "scale(1)" }}
          exit={{ transform: "scale(0)" }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 115,
          }}
          className={`${productContainer}  mb-4`}
          data-filter={product.category}
        >
          <img
            src={PRODUCTS[product.image]}
            alt={product.alt}
            className={productImage}
            loading="lazy"
          />
          <div className="p-4">
            <p className={description}>{product.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
