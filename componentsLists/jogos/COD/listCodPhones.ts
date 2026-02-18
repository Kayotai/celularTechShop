import { CardPhoneProps } from "@/componentsLists/listcardsPhone/listPhone";

export const listCodPhones: CardPhoneProps[] = [
    // A Opção Barata
    {
        id: "poco-x7",
        image: "/images/jogos/cod/xiaomiPocoX7.webp",         
        title: "Poco X7 5G",
        score: 9.7,
        description: "Uma lenda do custo-benefício voltou. Com o novo Dimensity otimizado para jogos, o Poco X7 entrega 90 FPS sem te fazer viver de miojo.",
        price: "R$ 1.699",
        linkAffiliate: "https://amzn.to/4cwm1lW",
        linkReview: "/artigos/reviews/poco-x7",
        pros: [
            "Tela AMOLED 120Hz com brilho excelente para jogar em qualquer lugar, mesmo quando o sol atrapalha.",
            "Carregamento turbo de 45W incluso na caixa.",
            "Desempenho térmico surpreendente para um celular de plástico.",
            "Preço imbatível para o hardware entregue."
        ],
        cons: [
            "Construção em plástico passa sensação de fragilidade.",
            "Câmeras auxiliares (Macro) são apenas...'Ok'.",
            "Som estéreo poderia ser um pouco mais alto."
        ],
        specs: {
            screen: "6.67\" Flow AMOLED 120Hz",
            processor: "1.2GHz Cortex A8 Processor",
            ram: "8GB / 12GB",
            storage: "256GB",
            battery: "5100mAh",
            camera: "50MP Main"
        }
    },
    // A Opção Mediana OnePlus Nord 4
    {
        id: "oppo-reno-14",
        image: "/images/jogos/cod/onePlusNord4.webp",
        title: "Oppo Reno 14",
        score: 10,
        description: "Construção premium em metal unibody e o processador Snapdragon 7+ Gen 3 fazem dele o rei dos intermediários. Ele não esquenta e mantém o FPS cravado.",
        price: "R$ 3.149",
        linkAffiliate: "https://amzn.to/4tOmmXy",
        linkReview: "/artigos/reviews/oneplus-nord-4",
        pros: [
            "Corpo único em metal: dissipa o calor muito melhor que vidro ou plástico.",
            "Snapdragon 7+ Gen 3 tem performance de topo de linha antigo.",
            "Bateria gigante de 5.500mAh para longas sessões de Rankeada.",
            "OxygenOS: sistema limpo e sem travamentos."
        ],
        cons: [
            "Um pouco mais pesado devido ao corpo de metal.",
            "Não possui carregamento sem fio.",
            "Tela curva pode causar toques acidentais se não usar capinha."
        ],
        specs: {
            screen: "6.74\" Fluid AMOLED 120Hz",
            processor: "Snapdragon 7+ Gen 3",
            ram: "12GB / 16GB",
            storage: "256GB - 512GB",
            battery: "5500mAh",
            camera: "50MP Sony LYT"
        }
    },
    // A Melhor Opção RedMagic 11 Pro
    {
        id: "redmagic-10-pro",
        image: "/images/jogos/cod/readMagic11Pro.webp",
        title: "REDMAGIC 10 Pro",
        score: 10.0,
        description: "Isso não é um celular, é um console de bolso. Com gatilhos físicos (triggers) e ventoinha interna, você tem uma vantagem competitiva que chega a ser injusta.",
        price: "R$ 5.499",
        linkAffiliate: "https://amzn.to/4kL9ugv",
        linkReview: "/artigos/reviews/redmagic-10-pro",
        pros: [
            "Gatilhos físicos de 520Hz: mire e atire sem tocar na tela, um cheat legalizado.",
            "Ventoinha RGB física de 22.000 RPM: 0% de throttling térmico.",
            "Tela totalmente limpa para imersão total.",
            "Snapdragon 8 Gen 5: roda COD a 120 FPS no Ultra sem suar, é um transformer de bolso."
        ],
        cons: [
            "Design agressivo, não agrada todos.",
            "Câmera frontal sob a tela tem qualidade inferior para selfies.",
            "É um aparelho grande e pesado."
        ],
        specs: {
            screen: "6.8\" AMOLED BOE Q9+ (Sem furos)",
            processor: "Snapdragon 8 Gen 3",
            ram: "16GB / 24GB",
            storage: "512GB - 1TB",
            battery: "6500mAh",
            camera: "50MP + 50MP"
        }
    }
];