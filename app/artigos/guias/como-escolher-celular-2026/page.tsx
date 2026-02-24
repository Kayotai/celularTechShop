import { constructMetadata, generateSchema } from "@/lib/seo-utils";
import ModelBlog from "@/model/modelBlog";
import styles from "./page.module.css"; 
import Link from "next/link";

const pageData = {
    title: "Como Escolher um Bom Celular em 2026? O Guia Definitivo",
    description: "Não jogue dinheiro fora. Aprenda o que realmente importa na ficha técnica de um smartphone em 2026: RAM, Processador, Tela e Câmeras.",
    slug: "como-escolher-celular-2026",
    path: "artigos/guias",
    publishedAt: "2026-02-24T15:00:00Z",
    modifiedAt: "2026-02-24T15:00:00Z"
};

export async function generateMetadata() {
  return constructMetadata(pageData);
}

export default function GuiaDeCompraPage() {
    return (
        <ModelBlog
            title={pageData.title}
            subtitle={pageData.description}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema(pageData)) }}
            />

            <article className={styles.articleContainer}>
                
                <section className={styles.intro}>
                    <p>
                        Comprar um celular novo sempre foi confuso, mas em 2026 as regras mudaram. 
                        As fabricantes pararam de focar apenas em megapixels e começaram a falar sobre Inteligência Artificial, NPUs e atualizações de 7 anos. 
                    </p>
                    <p>
                        Se você está perdido no meio de tantas siglas (AMOLED, Snapdragon, UFS), deixa que eu traduzo.
                        Neste guia rápido, vamos traduzir o "tecniquês" para que você saiba exatamente o que olhar antes de comprar.
                    </p>
                </section>

                <hr className={styles.divider} />

                <section className={styles.section}>
                    <h2>1. Memória RAM e Armazenamento (O Fim dos 128GB)</h2>
                    <p>
                        Em 2026, os aplicativos estão mais pesados e as funções de Inteligência Artificial nativas do celular consomem muita memória. 
                    </p>
                    <ul className={styles.featureList}>
                        <li><strong>Armazenamento:</strong> Fuja de celulares com 128GB. O sistema operacional já ocupa quase 40GB. <strong>O mínimo hoje é 256GB.</strong></li>
                        <li><strong>Memória RAM:</strong> Para o celular não travar ao alternar entre Instagram, Waze e Câmera, busque aparelhos com <strong>8GB de RAM</strong> ou mais.</li>
                    </ul>
                    <div className={styles.highlightBox}>
                        💡 <strong>Dica de Desempenho:</strong> Procure na ficha técnica por "UFS 3.1" ou "UFS 4.0". Isso é a velocidade do armazenamento. Um celular com UFS 4.0 abre jogos pesados na metade do tempo.
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>2. Processador: O Cérebro da Operação</h2>
                    <p>
                        O processador define se o celular vai durar 4 anos liso ou se vai começar a engasgar em seis meses.
                    </p>
                    <ul className={styles.featureList}>
                        <li><strong>Para o dia a dia e Uber:</strong> Linhas Snapdragon 6 Gen 1, Dimensity 7000 ou Exynos 1380/1480 dão conta do recado tranquilamente. <Link href="/artigos/reviews/melhores-celulares-uber-2026" className={styles.internalLink}>Veja nossas recomendações para motoristas.</Link></li>
                        <li><strong>Para Jogos Pesados:</strong> Busque Snapdragon 8 (Gen 2, 3 ou 4) ou MediaTek Dimensity 8300/9300. Eles não sofrem quedas bruscas de FPS.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>3. Tela e Bateria: O que você realmente vê e sente</h2>
                    <p>
                        Não adianta ter um celular super rápido se a tela some debaixo do sol ou se a bateria morre às 16h.
                    </p>
                    <ul className={styles.featureList}>
                        <li><strong>Brilho (Nits):</strong> Mais importante que a resolução é a taxa de "Nits". Procure telas com <strong>mais de 1000 Nits</strong> de brilho máximo.</li>
                        <li><strong>Bateria:</strong> O padrão da indústria é <strong>5000mAh</strong>. Menos que isso, evite. Se você trabalha na rua, já existem opções de 6000mAh.</li>
                        <li><strong>Carregamento:</strong> Verifique os "Watts" (W) do carregador. Acima de 25W já é aceitável, acima de 60W carrega em menos de 50 minutos.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>4. O Mito dos Megapixels nas Câmeras</h2>
                    <p>
                        Uma câmera de 200MP não é necessariamente melhor que uma de 12MP. Em 2026, o que importa é o tamanho do sensor físico e o processamento de imagem.
                    </p>
                    <blockquote>
                        Se você quer fotos boas de verdade (especialmente à noite ou em movimento), procure na ficha técnica a sigla <strong>OIS (Estabilização Óptica de Imagem)</strong>. Ela é quem impede suas fotos de saírem borradas.
                    </blockquote>
                </section>

                <hr className={styles.divider} />

                <section className={styles.conclusion}>
                    <h2>Resumo da Ópera (O Checklist do Custo-Benefício)</h2>
                    <p>Para não errar na compra este ano, seu checklist mínimo deve ser:</p>
                    <div className={styles.checklistGrid}>
                        <div className={styles.checkItem}>✅ Mínimo de 256GB de Espaço</div>
                        <div className={styles.checkItem}>✅ Mínimo de 8GB de RAM</div>
                        <div className={styles.checkItem}>✅ Bateria de 5000mAh</div>
                        <div className={styles.checkItem}>✅ Tela OLED ou AMOLED</div>
                    </div>
                    
                    <div className={styles.ctaBox}>
                        <h3>Quer pular a pesquisa?</h3>
                        <p>Nós já testamos e filtramos os melhores aparelhos do mercado para você.</p>
                        <Link href="/artigos/reviews/melhor-celular-2026-custo-beneficio/" className={styles.ctaButton}>
                            Ver o Melhor Celular Custo-Benefício de 2026
                        </Link>
                    </div>
                </section>

            </article>
        </ModelBlog>
    )
}