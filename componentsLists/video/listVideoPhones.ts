import { CardPhoneProps } from "@/componentsLists/listcardsPhone/listPhone";

export const listVideoPhones: CardPhoneProps[] = [
    // Samsung Galaxy A56
    {
        id: "galaxy-a56-video",
        image: "/images/videoPhones/samsungGalaxyA56.webp",
        title: "Samsung Galaxy A56",
        score: 9.8,
        description: "O único da categoria que grava em 4K na câmera frontal e traseira, permitindo alternar entre elas sem parar a gravação.",
        price: "R$ 1.899",
        linkAffiliate: "https://amzn.to/3OQp7qY",
        linkReview: "/artigos/reviews/galaxy-a56",
        pros: [
            "Gravação 4K 30fps na câmera de Selfie.",
            "Alternância de câmeras durante a filmagem (Frontal <-> Traseira).",
            "Estabilização Óptica (OIS) + Digital (VDIS) muito sólida.",
            "Integração nativa com Instagram e TikTok para postar com mais qualidade."
        ],
        cons: [
            "Carregamento lento.",
            "Modo noturno em vídeo apresenta um pouquinho de ruído.",
            "Sem entrada P2 para microfones externos, necessita adaptador."
        ],
        specs: {
            screen: "6.7\" Super AMOLED",
            processor: "Exynos 1580",
            ram: "8GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "50MP (OIS) + 12MP (Frontal 4K)"
        }
    },
    // Motorola Edge 60 Fusion
    {
        id: "moto-edge-60-fusion",
        image: "/images/videoPhones/motorolaEdge.webp",
        title: "Motorola Edge 60 Fusion",
        score: 9.8,
        description: "Com o sensor Sony LYTIA atualizado, o Edge 60 foca incrivelmente rápido. A estabilização 'Horizon Lock' mantém o vídeo reto mesmo se você girar o celular 360 graus.",
        price: "R$ 1.979",
        linkAffiliate: "https://amzn.to/4kFg8F4",
        linkReview: "/artigos/reviews/moto-edge-60-fusion",
        pros: [
            "Sensor Sony LYTIA: Captura de luz superior em ambientes fechados.",
            "Recurso 'Horizon Lock': Trava a linha do horizonte.",
            "Tela pOLED com cores fiéis para edição no CapCut.",
            "Foco automático muito ágil e não perde o rosto."
        ],
        cons: [
            "Câmera frontal limita-se a 1080p 60fps, sem 4k na frente.",
            "Esquenta se gravar em 4K por mais de 20 minutos seguidos.",
            "Processamento de áudio nativo removeu um pouco dos graves."
        ],
        specs: {
            screen: "6.7\" pOLED 144Hz",
            processor: "Dimensity 7300",
            ram: "12GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "50MP Sony LYTIA + 32MP Front"
        }
    },
    // Redmi Note 14 Pro+
    {
        id: "redmi-note-14-pro-plus",
        image: "/images/videoPhones/redmiNote14Pro+.webp",
        title: "Redmi Note 14 Pro+ 5G",
        score: 9.6,
        description: "Para quem edita no PC: o sensor de 200MP permite dar zoom no vídeo na edição sem perder qualidade. A bateria gigante aguenta horas de filmagem.",
        price: "R$ 2.599",
        linkAffiliate: "https://amzn.to/4qJMW1e",
        linkReview: "/artigos/reviews/redmi-note-14-pro-plus",
        pros: [
            "Sensor principal de 200MP: Capta detalhes absurdos em ambientes bem iluminados.",
            "Bateria de 6200mAh: A maior autonomia de gravação da lista.",
            "Carregamento de 90W: 10 minutos na tomada garantem 2h de vídeo.",
            "Suporte a gravação 4K na traseira com bom bitrate."
        ],
        cons: [
            "Ele trava em 1080p na câmera frontal.",
            "Troca de lentes no vídeo é engasgada, dá um tranco leve.",
            "Microfone interno capta muito vento externo."
        ],
        specs: {
            screen: "6.7\" AMOLED 1.5K",
            processor: "Snapdragon 7s Gen 3",
            ram: "12GB",
            storage: "512GB",
            battery: "6200mAh",
            camera: "200MP OIS + 8MP Ultra"
        }
    }
];