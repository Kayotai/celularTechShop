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
    pros: string[]; // Vantagens
    cons: string[]; // Desvantagens
    specs: PhoneSpecs; // Ficha Técnica
}

// Dados Exemplo (Corrigidos para não dar erro de undefined)
export const CardPhoneList: CardPhoneProps[] = [
    {
        id: "s25-ultra",
        image: "/images/CelularTeste.webp", 
        title: "Samsung Galaxy S25 Ultra 5G",
        score: 9.8,
        description: "O titã da Samsung focado em produtividade, com a nova S-Pen e câmeras de 200MP.",
        price: "R$ 6.499",
        linkAffiliate: "https://amazon.com.br/...",
        linkReview: "/reviews/s25-ultra",
        pros: [
            "S Pen integrada com baixa latência",
            "Tela Dynamic AMOLED 2X absurda",
            "7 Anos de atualizações garantidas"
        ],
        cons: [
            "Preço muito elevado no lançamento",
            "Carregamento poderia ser mais rápido (45W)",
            "Sem entrada P2 ou expansão MicroSD"
        ],
        specs: {
            screen: "6.8\" QHD+ 120Hz",
            processor: "Snapdragon 8 Gen 4 for Galaxy",
            ram: "12GB / 16GB",
            storage: "256GB - 1TB",
            battery: "5000mAh",
            camera: "200MP + 50MP + 50MP + 12MP"
        }
    }
]