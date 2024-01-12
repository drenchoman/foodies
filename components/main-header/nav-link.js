'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './nav-link.module.css';
export default function NavLink({ href, children }) {
  // use pathname hook, to find the currently used pathname
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${styles.active} ${styles.link}`
          : styles.link
      }
    >
      {children}
    </Link>
  );
}
