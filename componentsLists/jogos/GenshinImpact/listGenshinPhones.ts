import { CardPhoneProps } from "@/componentsLists/listcardsPhone/listPhone";

export const listGenshinPhones: CardPhoneProps[] = [
    {
        id: "poco-x7",
        image: "/images/jogos/genshinImpact/pocof6.webp", 
        title: "Poco x7 5G",
        score: 9.7,
        description: "O antigo matador de flagships agora está no preço ideal. Com Snapdragon 8s Gen 3, é o único desta lista que roda Genshin no ALTO a 60 FPS cravados.",
        price: "R$ 1.699",
        linkAffiliate: "https://amzn.to/40fr3Mf",
        linkReview: "/artigos/reviews/poco-f6",
        pros: [
            "Processador Snapdragon 8s Gen 3: Potência bruta muito acima da categoria.",
            "Carregamento de 90W: De 0 a 100% em um piscar de olhos.",
            "Tela AMOLED CrystalRes 120Hz: Cores vibrantes em Teyvat.",
            "Já atualizado para o HyperOS 3.0 (2026)."
        ],
        cons: [
            "Acabamento em plástico simples.",
            "Câmeras são apenas razoáveis, o foco aqui é desempenho.",
            "Esquenta um pouco em sessões longas sem cooler."
        ],
        specs: {
            screen: "6.67\" AMOLED 1.5K",
            processor: "Snapdragon 8s Gen 3",
            ram: "12GB",
            storage: "512GB",
            battery: "5000mAh",
            camera: "50MP OIS"
        }
    },
    {
        id: "galaxy-a56",
        image: "/images/jogos/genshinImpact/samsungGalaxyA56.webp",
        title: "Samsung Galaxy A56",
        score: 9.3,
        description: "Não quer arriscar em importados? O A56 traz a melhor tela da categoria e um processador Exynos que finalmente parou de esquentar. Roda no Médio/Alto com estabilidade.",
        price: "R$ 1.899",
        linkAffiliate: "https://amzn.to/4kMAUmj",
        linkReview: "/artigos/reviews/galaxy-a56",
        pros: [
            "GPU Xclipse com tecnologia AMD: Gráficos mais bonitos que a concorrência.",
            "Construção em vidro e metal.",
            "4 anos de atualizações de Android garantidos.",
            "Proteção IP67: Pode cair na água sem parar de funcionar."
        ],
        cons: [
            "Carregamento de 25W é lento para 2026.",
            "Vem com muito bloatware da Samsung instalado.",
            "Borda da tela um pouco mais grossa que os dos chineses."
        ],
        specs: {
            screen: "6.7\" Super AMOLED 120Hz",
            processor: "Exynos 1580 (AMD GPU)",
            ram: "8GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "50MP + 12MP + 5MP"
        }
    },
    {
        id: "moto-edge-60-fusion",
        image: "/images/jogos/genshinImpact/motorolaEdge.webp",
        title: "Motorola Edge 60 Fusion",
        score: 8.9,
        description: "Se você quer desempenho, o Edge 60 Fusion custa pouco e entrega muito. Roda Genshin no Médio liso.",
        price: "R$ 1.979",
        linkAffiliate: "https://amzn.to/4qKaIdo",
        linkReview: "/artigos/reviews/moto-edge-60-fusion",
        pros: [
            "Design mais bonito e leve da categoria, tela curva.",
            "Interface 'Hello UI' super limpa e leve, sobra mais RAM pro jogo.",
            "Carregador de 68W na caixa.",
            "Preço muito agressivo para 256GB."
        ],
        cons: [
            "Processador Snapdragon 7s Gen 2 sofre no preset 'Muito Alto'.",
            "Bateria drena rápido em jogos pesados devido à tela brilhante.",
            "Sem entrada para fones de ouvido (P2)."
        ],
        specs: {
            screen: "6.7\" pOLED Curva 120Hz",
            processor: "Snapdragon 7s Gen 2",
            ram: "8GB~16GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "50MP Sony LYT"
        }
    }
];