"use client";

import { useState } from "react";
import { generateSchema } from "@/lib/seo-utils";
import Link from "next/link";
import styles from "./page.module.css";
import ModelBlog from "@/model/modelBlog";
import Image from "next/image";
import { phonesDatabase } from "@/data/phonesDatabase"; 

const pageData = {
    title: "Descubra o seu celular ideal com apenas algumas perguntas.",
    description: "Se você tem pouco tempo use nosso sistema para achar o melhor celular para você, temos uma lista dos melhores celulares e com os melhores preços.",
    slug: "calculadora-do-celular-perfeito",
    path: "",
    publishedAt: "2026-03-10T09:00:00Z",
    modifiedAt: "2026-03-12T11:00:00Z"
};



export default function CalculadoraCelular() {
    const [orcamento, setOrcamento] = useState<string | null>(null);
    const [prioridade, setPrioridade] = useState<string | null>(null);
    const [memoriaRam, setMemoriaRam] = useState<string | null>(null);
    const [storage, setStorage] = useState<string | null>(null);
    const [resultadoId, setResultadoId] = useState<string | null>(null);

    const recomendarCelular = () => {
        
        // Agrupando as respostas
        const respostasUsuario = {
            budget: orcamento,
            focus: prioridade,
            ram: memoriaRam,
            storage: storage
        };

        // Comparando todos os celulares e dando pontos
        const vencedor = phonesDatabase.reduce((melhorAtual, celular) => {
            let pontos = 0;

            // o orçamento é mais importante (peso 3)
            if (celular.attributes.budget === respostasUsuario.budget) pontos += 3;
            
            // Foco e outras specs
            if (celular.attributes.focus === respostasUsuario.focus) pontos += 2;
            if (celular.attributes.ram === respostasUsuario.ram) pontos += 1;
            if (celular.attributes.storage === respostasUsuario.storage) pontos += 1;

            // Se esse celular fez mais pontos que o melhor atual, ele assume a liderança
            if (pontos > melhorAtual.pontos) {
                return { id: celular.id, pontos: pontos };
            }

            return melhorAtual;

        }, { id: "", pontos: -1 }); 

        // Define o vencedor
        setResultadoId(vencedor.id);
    };


    const celularRecomendado = phonesDatabase.find(phone => phone.id === resultadoId);

    const refazerTeste = () => {
        setOrcamento(null);
        setPrioridade(null);
        setMemoriaRam(null);
        setResultadoId(null);
    };

    return (
        <ModelBlog
            title={pageData.title}
            subtitle={pageData.description}    
        >

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema(pageData)) }}
            />

            <section className={styles.container}>
                <div className={styles.header}>
                    <p>Responda 2 perguntas rápidas e nossa inteligência indica o melhor custo-benefício para você.</p>
                </div>

                {/* Se não tem resultado, mostra as perguntas */}
                {!resultadoId ? (
                    <div className={styles.quizWrapper}>
                        <div className={styles.questionBlock}>
                            <h3>1. Quanto você quer investir?</h3>
                            <div className={styles.optionsGrid}>
                                <button 
                                    className={`${styles.optionBtn} ${orcamento === "barato" ? styles.active : ""}`}
                                    onClick={() => setOrcamento("barato")}
                                >
                                    Até R$ 1.800 🤑
                                </button>
                                <button 
                                    className={`${styles.optionBtn} ${orcamento === "medio" ? styles.active : ""}`}
                                    onClick={() => setOrcamento("medio")}
                                >
                                    Até R$ 3.500 ⚖️
                                </button>
                                <button 
                                    className={`${styles.optionBtn} ${orcamento === "caro" ? styles.active : ""}`}
                                    onClick={() => setOrcamento("caro")}
                                >
                                    Sem limites 🚀
                                </button>
                            </div>
                        </div>

                        <div className={styles.questionBlock}>
                            <h3>2. Quanto de RAM você quer?</h3>
                            <div className={styles.optionsGrid}>
                                <button 
                                    className={`${styles.optionBtn} ${memoriaRam === "pouca" ? styles.active : ""}`}
                                    onClick={() => setMemoriaRam("pouca")}
                                >
                                    Pouca
                                </button>
                                <button 
                                    className={`${styles.optionBtn} ${memoriaRam === "alta" ? styles.active : ""}`}
                                    onClick={() => setMemoriaRam("alta")}
                                >
                                    Alta
                                </button>
                                <button 
                                    className={`${styles.optionBtn} ${memoriaRam === "extrema" ? styles.active : ""}`}
                                    onClick={() => setMemoriaRam("extrema")}
                                >
                                    Extrema 
                                </button>
                            </div>
                        </div>

                        <div className={styles.questionBlock}>
                            <h3>2. Quanto de Armazenamento você quer?</h3>
                            <div className={styles.optionsGrid}>
                                <button 
                                    className={`${styles.optionBtn} ${storage === "pouca" ? styles.active : ""}`}
                                    onClick={() => setStorage("pouca")}
                                >
                                    Pouca
                                </button>
                                <button 
                                    className={`${styles.optionBtn} ${storage === "alta" ? styles.active : ""}`}
                                    onClick={() => setStorage("alta")}
                                >
                                    Alta
                                </button>
                                <button 
                                    className={`${styles.optionBtn} ${storage === "extrema" ? styles.active : ""}`}
                                    onClick={() => setStorage("extrema")}
                                >
                                    Extrema 
                                </button>
                            </div>
                        </div>

                        <div className={styles.questionBlock}>
                            <h3>3. Qual é a sua maior prioridade?</h3>
                            <div className={styles.optionsGrid}>
                                <button 
                                    className={`${styles.optionBtn} ${prioridade === "bateria" ? styles.active : ""}`}
                                    onClick={() => setPrioridade("bateria")}
                                >
                                    Bateria 🔋
                                </button>
                                <button 
                                    className={`${styles.optionBtn} ${prioridade === "camera" ? styles.active : ""}`}
                                    onClick={() => setPrioridade("camera")}
                                >
                                    Câmeras & Redes Sociais 📸
                                </button>
                                <button 
                                    className={`${styles.optionBtn} ${prioridade === "jogos" ? styles.active : ""}`}
                                    onClick={() => setPrioridade("jogos")}
                                >
                                    Jogos Pesados 🎮
                                </button>
                            </div>
                        </div>

                        <button 
                            className={styles.submitBtn} 
                            disabled={!orcamento || !prioridade}
                            onClick={recomendarCelular}
                        >
                            Ver Meu Celular Ideal
                        </button>
                    </div>
                ) : (
                    
                    /* se tem resultado, mostra o vencedor */
                    celularRecomendado && (
                        <div className={styles.resultWrapper}>
                            <h2>🎉 Encontramos o seu celular!</h2>
                            
                            <div className={styles.resultCard}>
                                {/* Ajuste o src da imagem conforme sua estrutura */}
                                <div className={styles.imagePlaceholder}>
                                    <Image 
                                        className={styles.imageResult} 
                                        src={celularRecomendado.image} 
                                        alt="Celular Recomendado" 
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={100}
                                    />
                                </div>
                                
                                <div className={styles.resultInfo}>
                                    <h3>{celularRecomendado.title}</h3>
                                    <p className={styles.score}>Nota: {celularRecomendado.score}/10</p>
                                    <p className={styles.description}>{celularRecomendado.description}</p>
                                    
                                    <div className={styles.actionButtons}>
                                        {/* Link para a Review Completa */}
                                        {celularRecomendado.linkReview && (
                                            <Link href={celularRecomendado.linkReview} className={styles.btnReview}>
                                                Ler Review Completa 📖
                                            </Link>
                                        )}

                                        {/* Os 2 Links de Lojas solicitados */}
                                        <div className={styles.storeButtons}>
                                            {celularRecomendado.linksLojas?.amazon && (
                                                <a href={celularRecomendado.linksLojas.amazon} target="_blank" className={styles.btnAmazon} rel="noopener noreferrer">
                                                    Comprar na Amazon
                                                </a>
                                            )}
                                            {celularRecomendado.linksLojas?.mercadoLivre && (
                                                <a href={celularRecomendado.linksLojas.mercadoLivre} target="_blank" className={styles.btnML} rel="noopener noreferrer">
                                                    Ver no Mercado Livre
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className={styles.resetBtn} onClick={refazerTeste}>
                                Refazer Teste 🔄
                            </button>
                        </div>
                    )
                )}
            </section>
        </ModelBlog>
    );
}