import { constructMetadata, generateSchema } from "@/lib/seo-utils";
import ModelBlog from "@/model/modelBlog";
import CardProduct from "@/components/cards/cards"; 
import styles from "./page.module.css"; 
import Image from "next/image";
import Link from "next/link";

// dados do produto
const bestPhoneOfTheWeek = {
    id: "galaxy-s24-fe-special",
    image: "/images/melhoresReviewsDoMes/s24FE.webp",
    title: "Samsung Galaxy S24 FE 5G (256GB)",
    score: 9.8,
    description: "Não compre o S26 ainda. O S24 FE entrega 95% da performance por 50% do preço. É a escolha inteligente da semana.",
    price: "R$ 2.649",
    linkAffiliate: "https://www.amazon.com.br/Smartphone-Samsung-Galaxy-C%C3%A2mera-Selfie/dp/B0DHNKT6R8/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2612J2612&dib=eyJ2IjoiMSJ9.s24fe",
    linkReview: "#veredito", 
    pros: [
        "Processador de Topo de Linha: O Exynos 2400e roda Genshin Impact e Warzone sem engasgos.",
        "Câmeras de Cinema: Grava em 8K e tem teleobjetiva real (zoom óptico 3x) que intermediários não têm.",
        "7 Anos de Atualizações: Vai durar até 2033 recebendo Android novo.",
        "Tela Dynamic AMOLED 2X: Brilho forte mesmo debaixo do sol do meio-dia."
    ],
    cons: [
        "Carregamento de 25W (demora 1h15 para encher).",
        "As bordas da tela são um pouco mais grossas que o S24 normal.",
        "Não vem com fone na caixa."
    ],
    specs: {
        screen: "6.7\" Dyn. AMOLED 120Hz",
        processor: "Exynos 2400e (Deca-Core)",
        ram: "8GB LPDDR5X",
        storage: "256GB UFS 4.0", 
        battery: "4700mAh",
        camera: "50MP OIS + 8MP Tele"
    }
};

const pageData = {
    title: "O Melhor Celular de 2026 até Agora: Galaxy S24 FE é o imperador do Custo-Benefício? Vamos ver!",
    description: "Análise rápida: Por que gastar R$ 5.000 se o S24 FE faz tudo por R$ 2.600? Testamos câmeras, jogos e bateria.",
    slug: "melhor-celular-custo-beneficio-2026",
    path: "artigos/reviews",
    publishedAt: "2026-02-12T08:00:00Z",
    modifiedAt: "2026-02-12T09:00:00Z"
};

export async function generateMetadata() {
  return constructMetadata(pageData);
}

export default function ReviewHighlightPage() {
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
                    <div className={styles.alertBox}>
                        🚨 <strong>Alerta de Preço:</strong> Este aparelho atingiu o menor valor histórico nesta semana na Amazon.
                    </div>
                    
                    <p className={styles.introText}>
                        Todo ano isso se repete: Lançam o modelo novo, cobram R$ 6.000 e todo mundo esquece do modelo anterior.
                        Mas em <strong>Fevereiro de 2026</strong>, a matemática mudou. 
                        O <strong>Galaxy S24 FE</strong> não é apenas um "celular bom". Ele é um <em>anomalia</em> dos preços e qualidade.
                    </p>
                    <p>
                        Se você quer jogar e tirar fotos que parecem de iPhone 16 sem vender seu rim,
                        pare de procurar. Eu já achei para você.
                    </p>
                </section>

                {/* O PRODUTO */}
                <section className={styles.highlightProduct}>
                    <h2 className={styles.sectionTitle}>A Escolha da Semana</h2>
                    <CardProduct {...bestPhoneOfTheWeek} />
                </section>

                {/* ANÁLISE TÉCNICA RÁPIDA */}
                <section className={styles.analysisSection}>
                    <h3>🎮 Por que é bom para Jogos?</h3>
                    <p>
                        Diferente da linha "A" (como o A56), o S24 FE usa memória <strong>UFS 4.0</strong> e memória RAM LPDDR5X. 
                        Traduzindo: O jogo abre na metade do tempo e as texturas carregam instantaneamente. Testamos no <Link href="/artigos/jogos/melhores-celulares-para-cod-mobile-2026">COD Mobile</Link> e ele segurou a temperatura melhor que o S23.
                    </p>

                    <h3>📸 E as Câmeras?</h3>
                    <p>
                        A Samsung manteve o sensor principal de 50MP. O seja: Fotos noturnas sem granulado e vídeos em 4K/60fps com estabilização óptica que parece Gimbal. 
                        Para quem cria conteúdo, a compressão do Instagram já é otimizada para ele.
                    </p>
                </section>

                {/* VEREDITO E CTA FINAL */}
                <section id="veredito" className={styles.verdictSection}>
                    <div className={styles.finalVerdictBox}>
                        <h3>🏆 Veredito CelularTech</h3>
                        <p>
                            Se você tem até R$ 2.700, não existe concorrente. O Motorola Edge 60 Ultra é mais caro e o Poco F7 perde feio nas câmeras.
                            O <strong>S24 FE 256GB</strong> é o ponto ideal de equilíbrio em 2026.
                        </p>
                        <br/>
                        <p><strong>Para quem é:</strong> Jogadores, Criadores de Conteúdo e quem quer celular para 6+ anos.</p>
                        <p><strong>Para quem NÃO é:</strong> Quem exige carregamento de 120W (vá de Xiaomi).</p>
                    </div>
                </section>

            </div>
        </ModelBlog>
    )
}