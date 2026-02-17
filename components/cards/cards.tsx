import Image from "next/image";
import { Check, X, Smartphone, Cpu, Battery, Aperture } from "lucide-react"; // Ícones legais
import styles from "./cards.module.css";
import { CardPhoneProps } from "@/componentsLists/listcardsPhone/listPhone";
import Stars from "../ui/star/star"; 
import ButtonAffiliate from "../ui/buttons/buttons"; 

export default function CardProduct(props: CardPhoneProps) {
    const pros = props.pros || [];
    const cons = props.cons || [];

    return (
        <article className={styles.cardContainer}>
            {/* --- CABEÇALHO DO PRODUTO --- */}
            <div className={styles.mainContent}>
                <div className={styles.imageWrapper}>                 
                    <Image 
                        src={props.image} 
                        alt={props.title} 
                        fill 
                        sizes="(max-width: 768px) 90vw, 300px"
                        quality={100}
                        className={styles.productImage} 
                    />
                </div>

                <div className={styles.infoWrapper}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <div className={styles.ratingRow}>
                        <div className={styles.scoreBadge}>{props.score}</div>
                        <Stars score={props.score} />
                    </div>
                    
                    <p className={styles.description}>{props.description}</p>
                    

                    <div className={styles.actions}>
                        <ButtonAffiliate href={props.linkAffiliate}>
                            Comprar Agora
                        </ButtonAffiliate>
                    <div className={styles.priceRow}>
                        <span className={styles.price}>{props.price}</span>
                        <span className={styles.installments}>em até 10x sem juros</span>
                    </div>
                    </div>
                </div>
            </div>

            {/* --- vantagens e desvantagens --- */}
            <div className={styles.prosConsGrid}>

                {/* Vantagens */}
                <div className={`${styles.listBox} ${styles.prosBox}`}>
                    <h3 className={styles.listTitle} style={{ color: '#10b981' }}>Vantagens</h3>
                    <ul>
                        {pros.map((item, i) => (
                            <li key={i}>
                                <Check size={18} className={styles.iconPro} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desvantagens */}
                <div className={`${styles.listBox} ${styles.consBox}`}>
                    <h3 className={styles.listTitle} style={{ color: '#ef4444' }}>Desvantagens</h3>
                    <ul>
                        {cons.map((item, i) => (
                            <li key={i}>
                                <X size={18} className={styles.iconCon} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* --- ficha técnica --- */}
            <div className={styles.specsContainer}>
                <h3 className={styles.specsTitle}>Ficha Técnica</h3>
                <ul className={styles.specsGrid}>
                    <li className={styles.specItem}>
                        <Smartphone size={20} />
                        <div>
                            <span className={styles.specLabel}>Tela</span>
                            <span className={styles.specValue}>{props.specs.screen}</span>
                        </div>
                    </li>
                    <li className={styles.specItem}>
                        <Cpu size={20} />
                        <div>
                            <span className={styles.specLabel}>Processador</span>
                            <span className={styles.specValue}>{props.specs.processor}</span>
                        </div>
                    </li>
                    <li className={styles.specItem}>
                        <Battery size={20} />
                        <div>
                            <span className={styles.specLabel}>Bateria</span>
                            <span className={styles.specValue}>{props.specs.battery}</span>
                        </div>
                    </li>
                    <li className={styles.specItem}>
                        <Aperture size={20} />
                        <div>
                            <span className={styles.specLabel}>Câmeras</span>
                            <span className={styles.specValue}>{props.specs.camera}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    );
}