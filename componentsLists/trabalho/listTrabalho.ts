export interface PhoneSpecs {
    screen: string;
    processor: string;
    ram: string;
    storage: string;
    battery: string;
    camera: string;
}

export interface CardPhoneProps {
    id: string;
    image: string;
    title: string;
    score: number;
    description: string;
    price: string;
    linkAffiliate: string;
    linkReview?: string;
    pros: string[]; 
    cons: string[]; 
    specs: PhoneSpecs; 
}

export const uberPhones: CardPhoneProps[] = [
    {
        id: "galaxy-a35",
        image: "/images/trabalho/galaxyA35.webp", 
        title: "Samsung Galaxy A35 5G (256GB)",
        score: 9.3,
        description: "O equilíbrio perfeito para o dia a dia. Tela clara para o sol e um sistema de resfriamento que não te deixa na mão com o GPS ligado.",
        price: "R$ 1.940", 
        linkAffiliate: "https://amzn.to/4qUX8nB", 
        linkReview: "#", 
        pros: [
            "Tela Super AMOLED de 1000 nits: Visibilidade total mesmo sob sol forte.",
            "Proteção IP67: Resistente a água e poeira (útil para quem trabalha na rua).",
            "4 Anos de Updates: Um investimento que vai durar muitas temporadas de Uber.",
            "Excelente sinal de GPS: Antenas estáveis para não errar a rota."
        ],
        cons: [
            "Bateria de 5.000mAh (padrão), exige uma carga rápida entre turnos longos.",
            "Design em vidro é bonito, mas exige uma capinha reforçada para o suporte."
        ],
        specs: {
            screen: "6.6\" Super AMOLED 120Hz",
            processor: "Exynos 1380",
            ram: "8GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "50MP com OIS"
        }
    },
    {
        id: "poco-x7-pro",
        image: "/images/trabalho/pocox7pro.webp", 
        title: "Xiaomi Poco X7 Pro 5G",
        score: 9.7,
        description: "A solução para quem faz pausas rápidas. Ele carrega 50% da bateria no tempo que você leva para tomar um café no posto de gasolina.",
        price: "R$ 2.058",
        linkAffiliate: "https://amzn.to/4kRy9jq", 
        linkReview: "#", 
        pros: [
            "Carregamento Turbo de 67W: Vai de 0 a 50% em apenas 15 minutos.",
            "Câmara de Resfriamento Líquido: Ideal para o verão, não desliga por excesso de calor no painel do carro.",
            "Desempenho liso: Abre o Uber, 99, Waze e WhatsApp ao mesmo tempo sem engasgar."
        ],
        cons: [
            "O sistema (HyperOS) vem com alguns anúncios de fábrica (dá para desativar).",
            "A bateria é de 5000mAh (excelente, mas dura menos que o M36)."
        ],
        specs: {
            screen: "6.67\" AMOLED 120Hz",
            processor: "MediaTek Dimensity 8300",
            ram: "8GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "64MP com OIS"
        }
    }
];