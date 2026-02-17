import { listGenshinPhones } from "@/componentsLists/jogos/GenshinImpact/listGenshinPhones";
import { constructMetadata, generateSchema } from "@/lib/seo-utils";
import ModelBlog from "@/model/modelBlog";
import CardProduct from "@/components/cards/cards";
import styles from "./page.module.css"; 
import Image from "next/image";
import imageGenshin from "@/public/images/jogos/genshinImpact/genshinImpact.webp"

const pageData = {
    title: "Os celulares que Rodam Genshin Impact até 2.000 Reais sem problemas (2026)",
    description: "Lista definitiva de celulares baratos que não travam no Abismo. Testes de FPS e temperatura atualizados.",
    slug: "celulares-que-rodam-genshin-impact-ate-2000",
    path: "artigos/jogos",
    publishedAt: "2026-01-15T09:00:00Z",
    modifiedAt: "2026-01-28T10:00:00Z" 
};

export async function generateMetadata() {
  return constructMetadata(pageData);
}

export default function CelularesGenshinBaratos() {
    return (
        <ModelBlog
            title={pageData.title}
            subtitle={pageData.description}
        >
            {/* SEO JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema(pageData)) }}
            />

            <div className={styles.contentWrapper}>
                <section className={styles.introSection}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={imageGenshin}
                            width={400}
                            alt="Imagem ilustrativa de Genshin Impact"
                        />
                    </div>
                    <span className={styles.updateDate}>
                        Atualizado em: <strong>{new Date(pageData.modifiedAt).toLocaleDateString('pt-BR')}</strong>
                    </span>
                    <p className={styles.introText}>
                        Genshin Impact ainda é o pesadelo dos celulares básicos. Mas em 2026, com a queda de preço de processadores antigos de topo de linha, 
                        <strong>não é mais necessário gastar R$ 5.000</strong> para explorar sem lag ou qualquer outro problema.
                    </p>
                    <p className={styles.introText}>
                        Filtramos o mercado brasileiro e encontramos as 3 joias raras que entregam performance de console por R$ 2.000 ou menos.
                    </p>
                </section>

                
                <section className={styles.cardsContainer}>
                    {listGenshinPhones.map((phone) => (
                        <CardProduct 
                            key={phone.id}
                            {...phone} 
                        />
                    ))}
                </section>


            </div>
        </ModelBlog>
    )
}