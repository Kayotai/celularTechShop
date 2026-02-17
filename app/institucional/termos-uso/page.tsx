import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "@/styles/legal.module.css";

export default function TermosUso() {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.header}>
                <h1 className={styles.title}>Termos de Uso</h1>
                <span className={styles.lastUpdate}>Vigência: 2026</span>
            </div>

            <div className={styles.content}>
                <section>
                    <h2>1. Aceitação dos Termos</h2>
                    <p>
                        Ao acessar o site <strong>CelularTech</strong>, você concorda em cumprir estes termos de serviço, 
                        todas as leis e regulamentos aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
                    </p>
                </section>

                <section>
                    <h2>2. Isenção de Responsabilidade (Tech)</h2>
                    <p>
                        Os preços e a disponibilidade dos produtos mencionados nos artigos de tecnologia (celulares, gadgets) podem sofrer alterações 
                        a qualquer momento pelas lojas vendedoras (Amazon, Mercado Livre, etc.).
                    </p>
                    <p>
                        Nós não somos uma loja, somos um site de curadoria e informação. <strong>Não nos responsabilizamos por:</strong>
                    </p>
                    <ul>
                        <li>Mudanças repentinas de preço.</li>
                        <li>Entregas ou logística das lojas parceiras.</li>
                        <li>Defeitos de fabricação dos produtos.</li>
                    </ul>
                </section>

                <section>  
                    <h2>3. Isenção de Responsabilidade (Tecnologia e Performance)</h2>
                    <p>
                        As análises, listas e comparações publicadas no <strong>celularTech</strong> são baseadas em testes técnicos e dados de mercado coletados em 2026. 
                        No entanto, o desempenho de dispositivos (como FPS em jogos ou velocidade de renderização) pode variar de acordo com a versão do sistema operacional, 
                        temperatura ambiente e atualizações de software dos fabricantes.
                    </p>
                    <p>
                        <strong>Não nos responsabilizamos por:</strong> escolhas de compra baseadas em informações que sofreram alterações após a data de publicação, 
                        incompatibilidade de aplicativos específicos com o hardware citado, ou danos causados por uso indevido do aparelho (como overclocking ou modificações não oficiais). 
                        É de total responsabilidade do usuário conferir as especificações finais e condições de garantia diretamente no site do lojista antes de finalizar a compra.
                    </p>
                </section>

                <section>
                    <h2>4. Propriedade Intelectual</h2>
                    <p>
                        Todo o conteúdo escrito e a curadoria de imagens deste site são protegidos por direitos autorais. 
                        É permitida a reprodução parcial (citação) desde que haja link direto (dofollow) para o conteúdo original.
                    </p>
                </section>

                <section>
                    <h2>5. Modificações</h2>
                    <p>
                        A celularTech pode revisar estes termos de serviço a qualquer momento, sem aviso prévio. 
                        Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                    </p>
                </section>
            </div>

            <Footer />
        </div>
    );
}