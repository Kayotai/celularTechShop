import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "@/styles/legal.module.css";

export default function Sobre() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.header}>
                <h1 className={styles.title}>Sobre Nós</h1>
                <p>Hardware levado a sério. Performance que cabe no seu bolso.</p>
            </div>

            <div className={styles.content}>
                <section>
                    <h2>Nossa Missão</h2>
                    <p>
                        Bem-vindo ao <strong>celularTech</strong>. Nascemos em 2026 com um propósito claro: 
                        ser o filtro definitivo em um mercado saturado de lançamentos e termos técnicos confusos.
                    </p>
                    <p>
                        Sabemos como é frustrante comprar um aparelho esperando rodar seu jogo favorito ou editar seus vídeos e acabar com um dispositivo que trava e esquenta. 
                        Nossa missão é entregar respostas diretas e guias de compra baseados em cenários reais de uso, economizando seu tempo e seu dinheiro.
                    </p>
                </section>

                <section>
                    <h2>Como Trabalhamos</h2>
                    <p>
                        Nossa abordagem é puramente pragmática. Não analisamos apenas números de benchmark; analisamos como a tecnologia impacta sua rotina.
                    </p>
                    <ul>
                        <li><strong>Performance Real:</strong> Testamos dispositivos em condições extremas de jogos e multitarefa.</li>
                        <li><strong>Custo-Benefício:</strong> Ignoramos o "hype" e focamos em hardware que entrega o máximo pelo menor preço possível.</li>
                        <li><strong>Curadoria Especializada:</strong> Filtramos apenas o que realmente vale a pena comprar nas principais lojas do Brasil em 2026.</li>
                    </ul>
                </section>

                <section>
                    <h2>Transparência e Sustentabilidade</h2>
                    <p>
                        Para manter nossa estrutura técnica e a rapidez do site (Next.js ultra-rápido), utilizamos links de afiliados. 
                        Isso significa que, ao comprar um produto através de nossas recomendações, recebemos uma pequena comissão dos lojistas parceiros.
                    </p>
                    <p>
                        <strong>Importante:</strong> Isso não altera o preço para você e não influencia nossa opinião técnica. Nossa prioridade é a sua confiança; 
                        se um celular é ruim, nós diremos que é ruim, independente de comissões.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
}