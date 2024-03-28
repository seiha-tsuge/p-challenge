import { ProductCard } from '@/components/molecules/ProductCard';

import cn from 'clsx';
import styles from './ProductCards.module.css';

import type { ImageProps } from 'next/image';

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

interface ProductCardsProps {
  products: product[];
  layout?: 'A' | 'B';
}

export const ProductCards = ({ products, layout = 'A' }: ProductCardsProps) => {
  const rootClassName = cn({
    [styles.layoutA]: layout === 'A',
    [styles.layoutB]: layout === 'B',
  });

  const productCards = products.map((product, index) => {
    let width = 540;
    let height = 540;

    if (layout === 'A') {
      width = index === 0 ? 1080 : 540;
      height = index === 0 ? 1080 : 540;
    }

    if (layout === 'B') {
      width = index === 2 ? 1080 : 540;
      height = index === 2 ? 1080 : 540;
    }

    return (
      <div className={rootClassName}>
        <ProductCard key={index} product={product} width={width} height={height} />
      </div>
    );
  });

  return <div className={styles.root}>{productCards}</div>;
};
