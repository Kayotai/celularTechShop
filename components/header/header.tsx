"use client"

import Link from "next/link"
import styles from "./header.module.css"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header()
{
    const [ isOpen, setIsOpen ] =  useState<boolean>(false);

    useEffect(() => {
        if (!isOpen) return;
            const handleEsc= (e: KeyboardEvent) => {
                if (e.key === 'Escape') { setIsOpen(false); 
            };
            document.addEventListener('keydown', handleEsc);

            return () => {
                document.body.style.overflow = '';
                document.removeEventListener('keydown', handleEsc);
            }
        }
    })

    return (
        <header className={styles.header}>
            <span className={styles.logo}>
                CelularTech.shop
            </span>

            <button
                className={styles.menuButton}
                onClick={() => setIsOpen(true)}
                aria-label="Abrir Menu"
            >
                <Menu color="#10b981" />
            </button>

            <div className={`${styles.mobileOverlay} ${isOpen? styles.open : ''}`}>
                <div
                    className={styles.backdrop}
                    onClick={() => setIsOpen(false)}
                 />

                 <aside className={styles.drawer}>
                    <div className={styles.drawerHeader}>
                        <button onClick={() => setIsOpen(false)} aria-label="Fechar menu" className={styles.x}>
                            <X color="#10b981" />
                        </button>
                        <ul className={styles.navMobileList}>
                            <li className={styles.linkNav} onClick={() => setIsOpen(false)}> 
                                <Link href="/"> Home </Link> 
                            </li>
                            <li className={styles.linkNav} onClick={() => setIsOpen(false)}> 
                                <Link href="/artigos/criadores/melhores-celulares-para-gravar-video-ate-2000"> Para Gravar </Link> 
                            </li>
                            <li className={styles.linkNav} onClick={() => setIsOpen(false)}> 
                                <Link href="/artigos/jogos/melhores-celulares-para-cod-mobile-2026"> Para jogar </Link> 
                            </li>
                        </ul>
                    </div>
                 </aside>
            </div>

        </header>
    )
}