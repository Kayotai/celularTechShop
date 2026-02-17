
import { Badge } from "@/components/ui/badge/badge";
import styles from "./heroSection.module.css";
import CardDestaque from "../cards/cardDestaque";
import Button from "../ui/buttons/buttons";

export function HeroSection() {
  return (
    <section className={styles.section} aria-label="Destaque Principal">
      <div className={styles.grid}>

        {/* Textos */}
        <div className={styles.content}>
          <Badge variant="secondary">
            Reviews Técnicos e Imparciais
          </Badge>
          
          <h1 className={styles.heading}>
            Encontre o celular <br />
            <span className={styles.highlight}>perfeito</span> para você!
          </h1>
    
          <p className={styles.description}>
            Análises detalhadas, comparações técnicas e os melhores preços em um só lugar. 
            Decisões inteligentes começam aqui.
          </p>
          
          <div className={styles.actions}>
            <Button href="#ultimos-blog"> Ver Reviews </Button>
          </div>
        </div>
        <CardDestaque />
      </div>
    </section>
  );
}