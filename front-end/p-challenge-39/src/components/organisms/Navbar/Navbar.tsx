import Link from 'next/link';

import { Logo } from '@/components/atoms/Logo/Logo';
import { Input } from '@/components/atoms/Input/Input';
import { Button } from '@/components/atoms/Button';
import { Bag } from '@/components/atoms/Bag';
import { Avatar } from '@/components/atoms/Avatar';
import { SearchIcon } from '@/components/atoms/SearchIcon/SearchIcon';

import styles from './Navbar.module.css';

interface Link {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: Link[];
}

export const Navbar = ({ links }: NavbarProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.navMenuWrapper}>
            <Link href='/' className={styles.logo} aria-label='Logo'>
              <Logo />
            </Link>
            <nav className={styles.navMenu}>
              <Link href='/search' className={styles.link}>
                All
              </Link>
              {links?.map((link) => (
                <Link href={link.href} key={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.searchInputWrapper}>
            <Input rightIcon={<SearchIcon className='h-5 w-5' />} />
          </div>
          <div className={styles.userNavWrapper}>
            <div className={styles.userNav}>
              <div className={styles.userNavList}>
                <div className={styles.userNavItem}>
                  <Button className={styles.userNavItem} variant='naked'>
                    <Bag />
                  </Button>
                </div>
                <div className={styles.userNavItem}>
                  <button aria-label='Menu' className={styles.avatarButton}>
                    <Avatar />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
