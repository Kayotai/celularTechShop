import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "@/styles/legal.module.css";

export default function PoliticaPrivacidade() {
    return (
        <div className={styles.container}>
            <Header />
            
            <div className={styles.header}>
                <h1 className={styles.title}>Política de Privacidade</h1>
                <span className={styles.lastUpdate}>Atualizado em: Fevereiro de 2026</span>
            </div>

            <div className={styles.content}>
                <section>
                    <p>
                        A sua privacidade é importante para nós. É política do <strong>celularTech</strong> respeitar a sua privacidade 
                        em relação a qualquer informação que possamos coletar no site.
                    </p>
                </section>

                <section>
                    <h2>1. Coleta de Dados e Cookies</h2>
                    <p>
                        Utilizamos cookies para melhorar a experiência do usuário. Isso inclui:
                    </p>
                    <ul>
                        <li><strong>Google Analytics:</strong> Para entender quais páginas são mais acessadas (dados anônimos).</li>
                        <li><strong>Cookies de Afiliados:</strong> Quando você clica em um link de produto, um cookie é salvo no seu navegador 
                        para atribuir a venda à nossa indicação. Esses cookies geralmente expiram em 24h a 90 dias.</li>
                    </ul>
                </section>

                <section className={styles.affiliateDisclaimer}>
                    <strong>Declaração de Afiliado Amazon:</strong><br />
                    O celularTech é participante do Programa de Associados da Amazon Services LLC, um programa de publicidade de afiliados 
                    projetado para fornecer um meio para sites ganharem taxas de publicidade anunciando e vinculando à Amazon.com.br.
                </section>

                <section>
                    <h2>2. Lei Geral de Proteção de Dados (LGPD)</h2>
                    <p>
                        Em conformidade com a LGPD, você tem o direito de solicitar a exclusão de quaisquer dados pessoais que tenhamos armazenado 
                        (como e-mail em newsletters), a qualquer momento. Nós não vendemos seus dados para terceiros.
                    </p>
                </section>

                <section>
                    <h2>3. Publicidade</h2>
                    <p>
                        Podemos exibir anúncios de terceiros (como Google AdSense). Esses serviços podem usar cookies para exibir anúncios 
                        relevantes baseados em suas visitas anteriores a este ou outros sites.
                    </p>
                </section>
                
                <section>
                    <h2>Contato</h2>
                    <p>Para questões sobre privacidade, contate-nos em: contato@[seusite].com</p>
                </section>
            </div>

            <Footer />
        </div>
    );
}