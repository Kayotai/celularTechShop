import styles from './buttons.module.css'
import Link from 'next/link'

interface children { children: React.ReactNode; href: string, target?: string, rel?: string; }

export default function Button({children, href }:children)
{
   return (
    <Link 
        href={href}
        rel='sponsored noopener noreferrer'
        target='_blank'
        className={styles['cssbuttons-io-button']}

    >
        {children}
        <div className={styles.icon}>
            <svg
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
            </svg>
        </div>
    </Link>
   )
}
// rel='sponsored noopener noreferrer'