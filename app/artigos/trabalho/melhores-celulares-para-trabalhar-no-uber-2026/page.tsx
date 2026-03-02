import { constructMetadata, generateSchema } from "@/lib/seo-utils";
import ModelBlog from "@/model/modelBlog";
import CardProduct from "@/components/cards/cards";
import styles from "./page.module.css"; 
import { uberPhones } from "@/componentsLists/trabalho/listTrabalho"; 

const pageData = {
    title: "OS 2 melhores Celulares para Trabalhar de Uber e 99pop em 2026",
    description: "Celular travando com o passageiro no carro? Veja os 2 melhores smartphones que não esquentam no painel, têm bateria infinita e tela forte para o sol.",
    slug: "/melhores-celulares-para-trabalhar-no-uber-2026",
    path: "artigos/reviews",
    publishedAt: "2026-02-23T08:00:00Z",
    modifiedAt: "2026-02-23T08:00:00Z"
};

export async function generateMetadata() {
  return constructMetadata(pageData);
}

export default function UberPhonesPage() {
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
                        💡 <strong>Dica de Ouro:</strong> Nunca use o celular preso no vidro sob o sol direto. Use um suporte de saída de ar-condicionado para manter o aparelho frio e evitar que a bateria vicie.
                    </div>
                    
                    <p className={styles.introText}>
                        Trabalhar com aplicativo não é para qualquer um, e muito menos para qualquer celular. Se você roda 8 a 12 horas por dia, sabe o desespero que é o Waze travar bem na hora de entrar na alça de acesso, ou a tela ficar tão escura no sol que você não enxerga o endereço do passageiro.
                    </p>
                    <p>
                        Em 2026, você não precisa gastar 5 mil reais em um iPhone para parar de ter esses problemas. Selecionamos os dois aparelhos que resolvem os 3 maiores problemas do motorista: <strong>Bateria, Superaquecimento e Brilho de Tela</strong>.
                    </p>
                </section>

                {/* LISTA DE PRODUTOS */}
                <section className={styles.highlightProduct}>
                    <h2 className={styles.sectionTitle}>Os Escolhidos para 2026</h2>
                    
                    <div className={styles.cardsList}>
                        {uberPhones.map((phone) => (
                            <CardProduct key={phone.id} {...phone} />
                        ))}
                    </div>
                </section>

                {/* ANÁLISE TÉCNICA */}
                <section className={styles.analysisSection}>
                    <h3>☀️ Brilho de Tela (Nits): Por que isso importa?</h3>
                    <p>
                        A especificação mais ignorada na hora de comprar um celular é o brilho da tela (medido em "Nits"). Um celular comum tem 500 nits e desaparece debaixo do sol. Ambos os modelos que escolhemos batem <strong>mais de 1000 nits</strong>, garantindo visão perfeita no painel, mesmo com óculos de sol.
                    </p>

                    <h3>🔥 O problema do Superaquecimento</h3>
                    <p>
                        O celular no painel, rodando GPS, 4G constante e carregando ao mesmo tempo vai esquentar. O <strong>Poco X7 Pro</strong> lida melhor com isso por ter resfriamento líquido interno. Já o <strong>A35</strong> foca em não precisar ficar no cabo o tempo todo, reduzindo o calor.
                    </p>
                </section>

                {/* VEREDITO */}
                <section id="veredito" className={styles.verdictSection}>
                    <div className={styles.finalVerdictBox}>
                        <h3>🏆 Qual escolher?</h3>
                        <p>
                            Se você quer sair de casa às 6h da manhã e voltar às 18h sem precisar ligar o celular no acendedor do carro, o <strong>Galaxy A35</strong> é a escolha definitiva. É o tnque de guerra da Samsung.
                        </p>
                        <br/>
                        <p>
                            Se você faz pausas estratégicas e quer um celular mais rápido, que carrega em minutos e não sofre tanto com o calor que vem fazendo, vá de <strong>Poco X7 Pro</strong>.
                        </p>
                    </div>
                </section>

            </div>
        </ModelBlog>
    )
}