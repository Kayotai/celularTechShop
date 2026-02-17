import { constructMetadata, generateSchema } from "@/lib/seo-utils";
import ModelBlog from "@/model/modelBlog";
import CardProduct from "@/components/cards/cards";
import { listEditingPhones } from "@/componentsLists/video/listEditingPhones";
import styles from "./page.module.css"; 
import Image from "next/image";
import imageEdit from "@/public/images/videoPhones/edicaoDeFotosVideos.webp"

const pageData = {
    title: "Melhores Celulares para Editar Fotos e Vídeos em 2026 do Barato ao mais caro",
    description: "Esqueça o PC: Estes celulares têm processador e tela calibrada para rodar Lightroom, CapCut e Photoshop Express sem engasgos.",
    slug: "melhores-celulares-para-editar-fotos-videos-2026",
    path: "artigos/criadores",
    publishedAt: "2026-03-10T09:00:00Z",
    modifiedAt: "2026-03-12T11:00:00Z"
};

export async function generateMetadata() {
  return constructMetadata(pageData);
}

export default function MelhoresCelularesEdicao() {
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
                    <div className={styles.imageContainer}>
                        <Image 
                            src={imageEdit}
                            width={400}
                            quality={90}
                            alt="Imagem ilustrativa de algúem Editando"
                        />
                    </div>
                    <span className={styles.updateDate}>
                        Atualizado: <strong>Março de 2026</strong>
                    </span>
                    <p className={styles.introText}>
                        "Meu celular trava na hora de exportar 4K." Se você já disse isso, o problema não é o aplicativo, é o seu processador.
                        Em 2026, a edição mobile superou os notebooks básicos, mas você precisa de três pilares: <strong>RAM Rápida</strong>, <strong>Armazenamento UFS</strong> e <strong>Tela Fiel</strong>.
                    </p>

                    {/* Quebra de Objeção / Curiosidade */}
                    <div className={styles.mythBox}>
                        <h5>🤔 Preciso de um iPhone para editar?</h5>
                        <p>
                            Não mais. Embora o iPhone 17 seja excelente, o ecossistema Android (especialmente Samsung e Xiaomi) agora tem integração direta com
                            Adobe Lightroom e LumaFusion, custando muitas vezes a metade do preço.
                        </p>
                    </div>
                </section>

                <section className={styles.cardsContainer}>
                    {listEditingPhones.map((phone) => (
                        <CardProduct 
                            key={phone.id}
                            {...phone} 
                        />
                    ))}
                </section>

                <section className={styles.verdictSection}>
                    <h3>Qual o seu perfil de editor?</h3>
                    <div className={styles.personaGrid}>
                        <div className={styles.personaCard}>
                            <strong>✂️ O Cortes Rápidos</strong>
                            <p>Só quer cortar, legendar e postar no TikTok? O <strong>Poco F7</strong> voa baixo no CapCut.</p>
                        </div>
                        <div className={styles.personaCard}>
                            <strong>🎨 O Designer/Fotógrafo</strong>
                            <p>Precisa de cores reais e RAW? Vá de <strong>Xiaomi 15T Pro</strong> pela tela calibrada.</p>
                        </div>
                        <div className={styles.personaCard}>
                            <strong>🖌️ O Artista Digital</strong>
                            <p>Faz retoques finos na pele ou desenha? A S-Pen do <strong>S25 Ultra</strong> é insubstituível.</p>
                        </div>
                    </div>
                </section>

            </div>
        </ModelBlog>
    )
}