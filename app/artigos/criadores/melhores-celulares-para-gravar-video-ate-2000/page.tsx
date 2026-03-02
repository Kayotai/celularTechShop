import { constructMetadata, generateSchema } from "@/lib/seo-utils";
import ModelBlog from "@/model/modelBlog";
import CardProduct from "@/components/cards/cards";
import { listVideoPhones } from "@/componentsLists/video/listVideoPhones";
import styles from "./page.module.css"; 

const pageData = {
    title: "Os melhores Celulares para Gravar Vídeo e Reels até 2.000 (2026)",
    description: "Quer começar no TikTok ou YouTube sem gastar demais? Testamos estabilização, microfone e qualidade 4K destes aparelhos acessíveis.",
    slug: "melhores-celulares-para-gravar-video-ate-2000",
    path: "artigos/criadores",
    publishedAt: "2026-02-02T08:00:00Z",
    modifiedAt: "2026-02-10T14:30:00Z"
};

export async function generateMetadata() {
  return constructMetadata(pageData);
}

export default function MelhoresCelularesVideo() {
    return (
        <ModelBlog
            title={pageData.title}
            subtitle={pageData.description}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema(pageData)) }}
            />

            <div className={styles.contentWrapper}>
                
                <section className={styles.introSection}>
    
                    <span className={styles.updateDate}>
                        Atualizado para: <strong>Fevereiro de 2026</strong>
                    </span>
                    <p className={styles.introText}>
                        Luz, câmera, economia. Em 2026, a barreira para produzir conteúdo de alta qualidade caiu drasticamente. 
                        Você não precisa mais de um iPhone Pro para ter <strong>estabilização óptica (OIS)</strong> ou gravar em <strong>4K</strong>.
                    </p>
                    <div className={styles.alertBox}>
                        <p>
                            ⚠️ <strong>Dica de Ouro:</strong> Para vídeo, priorize sempre a estabilização (OIS) em vez da quantidade de Megapixels. 
                            Um vídeo tremido de 200MP é pior que um vídeo estável de 12MP. 
                        </p>
                    </div>
                </section>

                <section className={styles.cardsContainer}>
                    {listVideoPhones.map((phone) => (
                        <CardProduct 
                            key={phone.id}
                            {...phone} 
                        />
                    ))}
                </section>

                <section className={styles.verdictSection}>
                    <h3>O Guia do Criador Rápido:</h3>
                    <ul className={styles.verdictList}>
                        <li>🎥 <strong>Vai fazer Vlogs/Stories?</strong> O <strong>Galaxy A56</strong> é obrigatório por causa do 4K na frontal.</li>
                        <li>🏃 <strong>Filma esportes ou dança?</strong> O <strong>Moto Edge 60</strong> tem a melhor trava de horizonte.</li>
                        <li>🎬 <strong>Faz B-Roll e edita pesado?</strong> O <strong>Redmi Note 14 Pro+</strong> te dá mais bateria e pixels para cortar.</li>
                    </ul>
                </section>

            </div>
        </ModelBlog>
    )
}