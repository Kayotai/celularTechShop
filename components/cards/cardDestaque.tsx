import { featuredProduct } from "@/componentsLists/products";
import { Badge } from "../ui/badge/badge";
import Button from "../ui/buttons/buttons";
import Image from "next/image";
import styles from './cardDestaque.module.css'
import Stars from "../ui/star/star";

export default function CardDestaque()
{
    return (
        <div className={styles.cardWrapper}>
          <article className={styles.productCard}>
            
            {/* Score Badge Flutuante */}
            <div className={styles.scoreBadge} aria-label={`Score: ${featuredProduct.score} de 10`}>
              <span className={styles.scoreValue}>{featuredProduct.score}</span>
              <span className={styles.scoreLabel}>Score</span>
            </div>
            
            <Badge variant="destructive">
              Custo-Benefício da Semana
            </Badge>
            
            {/* Imagem */}
            <div className={styles.imageWrapper}>
              <Image
                src={featuredProduct.image}
                alt={`Foto do celular ${featuredProduct.name}`}
                fill
                sizes="(max-width: 768px) 50vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h3 className={styles.productTitle}>{featuredProduct.name}</h3>              
              <Stars score={featuredProduct.score} />

              <div className={styles.footer}>
                <Button href="/artigos/reviews/melhor-celular-2026-custo-beneficio/">
                  Ver Review
                </Button>
              </div>
            </div>
          </article>
        </div>
    )
}