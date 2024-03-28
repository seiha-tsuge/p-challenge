import { FC, useRef } from 'react';

interface Props {
  className?: string;
  children?: any;
}

export const Avatar: FC<Props> = ({}) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div
      ref={ref}
      style={{ backgroundImage: 'linear-gradient(140deg, rgb(121, 255, 225), rgb(55, 182, 121) 100%);' }}
      className='inline-block h-8 w-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear'
    ></div>
  );
};
