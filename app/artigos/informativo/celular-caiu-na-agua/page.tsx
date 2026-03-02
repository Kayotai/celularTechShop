import { constructMetadata, generateSchema } from "@/lib/seo-utils";
import ModelBlog from "@/model/modelBlog";
import styles from "./page.module.css"; 
import Link from "next/link";

const pageData = {
    title: "Celular Caiu na Água? O Guia de Emergência (e o que NÃO fazer)",
    description: "Não peça socorro, já estamos aqui! Faça isso para salvar seu aparelho, por que o arroz é um mito. Não seja enganado por técnicos.",
    slug: "celular-caiu-na-agua",
    path: "artigos/informativo",
    publishedAt: "2026-03-02T10:00:00Z",
    modifiedAt: "2026-03-02T10:00:00Z"
};

export async function generateMetadata() {
  return constructMetadata(pageData);
}

export default function CelularNaAguaPage() {
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
                    <div className={styles.highlightBox} style={{borderColor: '#ef4444', color: '#fca5a5'}}>
                        🚨 <strong>REGRA NÚMERO 1:</strong> Não tente ligar o aparelho e, se ele estiver ligado, <strong>desligue-o imediatamente</strong>. O problema não é a água, é o curto-circuito que ela causa quando a eletricidade passa por ela.
                    </div>
                    <p>
                        Aconteceu um descuido na pia, na piscina ou no vaso sanitário? A primeira coisa que você precisa entender é: <strong>a água não estraga o eletrônico instantaneamente.</strong> 
                    </p>
                    <p>
                        O que destrói o celular é a oxidação e o curto-circuito. Quando a água (que conduz eletricidade) toca a placa mãe ligada, ela cria pontes de energia onde não deveria, "fritando" componentes sensíveis.
                    </p>
                </section>

                <hr className={styles.divider} />

                <section className={styles.section}>
                    <h2>O Mito do Arroz (Por que evitar?)</h2>
                    <p>
                        Todo mundo diz para colocar no arroz. Mas a verdade é que o arroz absorve a umidade externa, mas não consegue puxar a água que está presa embaixo dos chips da placa. 
                    </p>
                    <div className={styles.highlightBox}>
                        ⚠️ <strong>O Perigo Oculto:</strong> O arroz solta um pó fino (amido) que ao entrar em contato com a umidade dentro do celular, vira uma "papa" que acelera a corrosão e entope entradas de carga e microfones. 
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Passo a Passo de Emergência</h2>
                    <div className={styles.checklistGrid}>
                        <div className={styles.checkItem}>1. Desligue e remova o chip (SIM) e o cartão SD.</div>
                        <div className={styles.checkItem}>2. Seque o exterior com uma toalha que não solte fiapos.</div>
                        <div className={styles.checkItem}>3. Use um aspirador de pó (distante) para tentar "puxar" a água dos conectores.</div>
                        <div className={styles.checkItem}>4. NUNCA use secador de cabelo (o calor derrete as vedações internas).</div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Vai levar no técnico? Não seja enganado!</h2>
                    <p>
                        Se o celular não deu sinal de vida em 24h, você precisará de ajuda profissional. Mas cuidado: muitos técnicos se aproveitam do seu desespero.
                    </p>
                    <ul className={styles.featureList}>
                        <li><strong>O golpe da "Placa Queimada":</strong> Se o técnico disser de cara que a placa morreu sem nem abrir ou testar, desconfie. Muitas vezes é apenas o conector de carga ou a bateria que entrou em curto.</li>
                        <li><strong>Peça o "Banho Químico":</strong> O procedimento correto é a limpeza em uma cuba ultrassônica com álcool isopropílico. Isso remove os minerais que a água deixou.</li>
                        <li><strong>Dica:</strong> Pergunte se ele faz a desoxidação manual com microscópio. Técnicos bons limpam ponto a ponto da placa.</li>
                    </ul>
                </section>

                <hr className={styles.divider} />

                <section className={styles.conclusion}>
                    <h2>E se nada funcionar?</h2>
                    <p>
                        Às vezes o conserto de um celular molhado custa 70% do valor de um novo. Se o técnico te cobrar mais de R$ 800 em um aparelho antigo, talvez seja a hora de aceitar o destino.
                    </p>
                    
                    <div className={styles.ctaBox}>
                        <h3>Hora de partir para um novo?</h3>
                        <p>Não gaste fortuna em consertos incertos. Confira o aparelho que é o rei do custo-benefício em 2026 e tem proteção contra água de fábrica.</p>
                        <Link href="/artigos/reviews/melhor-celular-2026-custo-beneficio" className={styles.ctaButton}>
                            Ver Melhor Celular Custo-Benefício de 2026
                        </Link>
                    </div>
                </section>

            </article>
        </ModelBlog>
    )
}