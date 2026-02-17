import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer()
{
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Identidade */}
        <div className={styles.brandColumn}>
          <span className={styles.logo}>CelularTech</span>
          <p className={styles.tagline}>
            Reviews técnicos, comparações honestas e as melhores ofertas para você.
          </p>
        </div>

        {/* Links Úteis */}
        <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Institucional</h4>
            <ul className={styles.list}>
                <li><Link href="/institucional/sobre" className={styles.link}>Sobre Nós</Link></li>
                <li><Link href="/institucional/politica-privacidade" className={styles.link}>Política de Privacidade</Link></li>
                <li><Link href="/institucional/termos-uso" className={styles.link}>Termos de Uso</Link></li>
            </ul>
        </div>

        {/* Links Úteis */}
        <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Links Rápidos</h4>
            <ul className={styles.list}>
                <li><Link href="/" className={styles.link}> Home </Link></li>
                <li><Link href="/artigos/criadores/melhores-celulares-para-gravar-video-ate-2000" className={styles.link}> Para Gravar </Link></li>
                <li><Link href="/artigos/jogos/melhores-celulares-para-cod-mobile-2026" className={styles.link}> Para jogar </Link></li>
            </ul>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className={styles.copyright}>
        <p>&copy; {currentYear} CelularTech. Todos os direitos reservados.</p>
        <p><a href="https://icons8.com.br/icon/7ajPJajLJfCM/smartphone" target="_blank">Ícones</a></p>
      </div>
      
    </footer>
  )
}