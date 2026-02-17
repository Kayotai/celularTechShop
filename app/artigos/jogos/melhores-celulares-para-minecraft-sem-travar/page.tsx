import { listMinecraftPhones } from "@/componentsLists/jogos/Minecraft/listMinecraftPhones";
import { constructMetadata, generateSchema } from "@/lib/seo-utils";
import Image from "next/image";
import ModelBlog from "@/model/modelBlog";
import CardProduct from "@/components/cards/cards";
import styles from "./page.module.css"; 
import imageMinecraft from "@/public/images/jogos/minecraft/minecraft.webp"

const pageData = {
    title: "Melhores Celulares para Jogar Minecraft Sem Travar (2026)",
    description: "Do básico ao avançado: celulares com bateria infinita e memória para muitos mods e shaders.",
    slug: "melhores-celulares-para-minecraft-sem-travar",
    path: "artigos/jogos",
    publishedAt: "2026-02-15T10:00:00Z",
    modifiedAt: "2026-02-18T16:00:00Z"
};

export async function generateMetadata() {
  return constructMetadata(pageData);
}

export default function MelhoresCelularesMinecraft() {
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
                            src={imageMinecraft}
                            width={400}
                            alt="Imagem ilustrativa de Minecraft"
                        />
                    </div>
                    <span className={styles.updateDate}>
                        Atualizado: <strong>Fevereiro de 2026</strong>
                    </span>
                    <p className={styles.introText}>
                        Minecraft Bedrock Edition parece leve, mas conforme seu mundo cresce e você instala Addons, ele pode travar até celulares caros.
                    </p>
                    
                    {/* DICA RÁPIDA PARA EDUCAR O USUÁRIO (Aumenta retenção) */}
                    <div className={styles.tipBox}>
                        <h4>⛏️ O que exige do celular no Minecraft?</h4>
                        <ul>
                            <li><strong>RAM:</strong> Essencial para usar Mods e Addons. Recomendamos no mínimo 8GB em 2026.</li>
                            <li><strong>Processador:</strong> Carrega os "Chunks" (o mapa) enquanto você voa com a Elytra.</li>
                            <li><strong>Bateria:</strong> O jogo impede o celular de "dormir", gastando muita energia.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.cardsContainer}>
                    {listMinecraftPhones.map((phone) => (
                        <CardProduct 
                            key={phone.id}
                            {...phone} 
                        />
                    ))}
                </section>

                <section className={styles.verdictSection}>
                    <h3>Resumo da Ópera:</h3>
                    <ul className={styles.verdictList}>
                        <li>🔋 <strong>Orçamento Curto?</strong> O <strong>Galaxy M36</strong> tem bateria para o dia todo.</li>
                        <li>🚀 <strong>Quer Shaders e Mods?</strong> O <strong>Poco X7 Pro</strong> tem 12GB de RAM para não fechar o jogo sozinho.</li>
                        <li>👑 <strong>É Youtuber/Hardcore?</strong> O <strong>ROG Phone 9</strong> é o sonho de consumo.</li>
                    </ul>
                </section>

            </div>
        </ModelBlog>
    )
}