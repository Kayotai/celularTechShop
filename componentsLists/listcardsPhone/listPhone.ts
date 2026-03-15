interface PhoneSpecs {
    screen: string;
    processor: string;
    ram: string;
    storage: string;
    battery: string;
    camera: string;
}

interface LinksLojas {
    amazon: string;
    mercadoLivre: string;
    magalu: string;
    shopee: string;
}

interface CardAttributes {
    budget: string;
    focus: string;
    ram: string;
    storage: string;
}

export interface CardPhoneProps {
    id: string;
    image: string;
    title: string;
    score: number;
    description: string;
    price: string;
    linkAffiliate: string;
    linksLojas: LinksLojas;
    linkReview?: string;
    pros: string[]; 
    cons: string[]; 
    specs: PhoneSpecs; 
    attributes: CardAttributes
}