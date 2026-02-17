import { constructMetadata, generateSchema } from "@/lib/seo-utils";
import { listCodPhones } from "@/componentsLists/jogos/COD/listCodPhones";
import Image from "next/image";
import ModelBlog from "@/model/modelBlog";
import CardProduct from "@/components/cards/cards";
import styles from "./page.module.css"; 
import imageCOD from "@/public/images/jogos/cod/codMobile.webp"

const pageData = {
    title: "Melhores Celulares para COD Mobile em 2026",
    description: "Lista atualizada com testes de FPS, aquecimento e performance competitiva.",
    slug: "melhores-celulares-para-cod-mobile-2026",
    path: "artigos/jogos",
    publishedAt: "2025-12-10T08:00:00Z",
    modifiedAt: "2026-01-26T14:00:00Z" 
};

export async function generateMetadata() {
  return constructMetadata(pageData);
}

export default function MelhoresCelularesCODMobile() {
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
                
                {/* Intro e Data */}
                <section className={styles.introSection}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={imageCOD}
                            width={400}
                            alt="Imagem ilustrativa de Call Of Duty"
                        />
                    </div>
                    <p className={styles.introText}>
                        Nem sempre o celular acompanha o jogador, nesses casos você precisa de mais do que habilidade: 
                        precisa de FPS estável e uma tela de resposta rápida. 
                        Separamos as 3 melhores opções de 2026 para todos os bolsos, do mais barato ao mais caro.
                    </p>
                    <span className={styles.updateDate}>
                        Última atualização: <strong>{new Date(pageData.modifiedAt).toLocaleDateString('pt-BR')}</strong>
                    </span>
                </section>

                {/* Renderização dos Cards */}
                <section className={styles.cardsContainer}>
                    {listCodPhones.map((phone) => (
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
