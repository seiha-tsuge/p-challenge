import Image, { ImageProps } from 'next/image';

import cn from 'clsx';
import styles from './ProductCard.module.css';

interface Image {
  src: string;
  alt: string;
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>;
}

interface product {
  name: string;
  price: number;
  image: Image;
}

interface Props {
  product: product;
  width: number;
  height: number;
}

export const ProductCard = ({ product, width, height }: Props) => {
  const { name, price, image } = product;

  return (
    <div className={styles.root}>
      <div className={styles.tag}>
        <h3 className={styles.name}>
          <span>{name}</span>
        </h3>
        <div className={styles.tagPrice}>{`$${price} USD`}</div>
      </div>
      <div className={styles.imageContainer}>
        <Image quality='85' src={image.src} alt={image.alt} height={height} width={width} {...image.imgProps} />
      </div>
    </div>
  );
};
