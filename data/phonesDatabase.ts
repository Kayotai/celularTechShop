import { CardPhoneProps } from "@/componentsLists/listcardsPhone/listPhone";

export const phonesDatabase: CardPhoneProps[] = [
    // ==========================================
    // CUSTO-BENEFÍCIO (R$ 1.000 a R$ 1.800)
    // ==========================================
    {
        id: "galaxy-a26",
        image: "/images/reviewsIMG/galaxyA26.webp",        
        title: "Samsung Galaxy A26 5G",
        score: 8.8,
        description: "O campeão de vendas absoluto. Entrega tela Super AMOLED fluida e bateria que não acaba, ideal para quem quer um celular confiável sem gastar muito.",
        price: "R$ 1.200 ~ 1600",
        linkAffiliate: "", 
        linksLojas: {
            amazon: "https://amzn.to/4cBtjF6",
            mercadoLivre: "https://meli.la/1oyuuEC",
            magalu: "",
            shopee: ""
        },
        linkReview: "/artigos/reviews/galaxy-a26",
        pros: [
            "Tela Super AMOLED de 120Hz incrível para a categoria.",
            "Bateria de 5.000mAh que dura tranquilamente um dia e meio.",
            "Garantia de 4 anos de atualizações do Android."
        ],
        cons: [
            "Carregador na caixa é apenas de 15W (carrega devagar).",
            "Design em plástico com bordas um pouco grossas na tela."
        ],
        specs: {
            screen: "6.6\" Super AMOLED 120Hz",
            processor: "Exynos 1330",
            ram: "6GB / 8GB",
            storage: "128GB / 256GB",
            battery: "5000mAh",
            camera: "50MP Principal"
        },
        attributes: {
            budget: "barato",
            focus: "bateria",
            ram: "normal",
            storage: "padrao"
        }
    },
    {
        id: "moto-g86",
        image: "/images/reviewsIMG/motoG86.webp",        
        title: "Motorola Moto G86 5G",
        score: 9.0,
        description: "Para quem odeia celular travando. O sistema limpo da Motorola unido a muita memória RAM faz dele um dos mais rápidos da categoria de entrada.",
        price: "R$ 1.400 ~ 1600",
        linkAffiliate: "",
        linksLojas: {
            amazon: "https://amzn.to/4umbjFd",
            mercadoLivre: "https://meli.la/1bDYgEQ",
            magalu: "",
            shopee: ""
        },
        linkReview: "/artigos/reviews/moto-g86",
        pros: [
            "Android quase puro, levíssimo e sem aplicativos inúteis instalados.",
            "Design premium em Vegan Leather (couro sintético) que não escorrega.",
            "Carregador TurboPower de 33W já incluso na caixa."
        ],
        cons: [
            "As câmeras noturnas ainda sofrem um pouco com ruídos.",
            "Motorola atualiza o Android por menos tempo que a Samsung."
        ],
        specs: {
            screen: "6.5\" pOLED 120Hz",
            processor: "Snapdragon 6 Gen 1",
            ram: "8GB / 12GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "50MP com OIS"
        },
        attributes: {
            budget: "barato",
            focus: "camera",
            ram: "alta",
            storage: "alto"
        }
    },
    {
        id: "poco-x7-pro",
        image: "/images/jogos/cod/xiaomiPocoX7.webp",        
        title: "Xiaomi Poco X7 Pro",
        score: 9.3,
        description: "Desempenho de topo de linha com preço de intermediário. É o celular favorito de quem joga e não quer pagar 5 mil reais.",
        price: "R$ 1.850 ~ 2.500",
        linkAffiliate: "",
        linksLojas: {
            amazon: "https://amzn.to/4rn3lcc",
            mercadoLivre: "https://meli.la/2a6VabJ",
            magalu: "",
            shopee: ""
        },
        linkReview: "/artigos/reviews/poco-x7-pro",
        pros: [
            "Processador extremamente potente para o preço.",
            "Carregamento absurdo de 67W (0 a 100% em 45 min).",
            "Tela com bordas ultra finas e brilho forte."
        ],
        cons: [
            "HyperOS vem com muitos anúncios nativos.",
            "Câmera foca em performance, não em fotos de estúdio."
        ],
        specs: {
            screen: "6.67\" Flow AMOLED 120Hz",
            processor: "Dimensity 8300 Ultra",
            ram: "8GB / 12GB",
            storage: "256GB / 512GB",
            battery: "5000mAh",
            camera: "64MP Main"
        },
        attributes: {
            budget: "barato",
            focus: "jogos",
            ram: "alta",
            storage: "alto"
        }
    },

    // ==========================================
    // INTERMEDIÁRIOS PREMIUM (R$ 2.000 a R$ 3.500)
    // ==========================================
    {
        id: "galaxy-a56",
        image: "/images/jogos/genshinImpact/samsungGalaxyA56.webp",        
        title: "Samsung Galaxy A56 5G",
        score: 9.5,
        description: "O verdadeiro 'matador de topos de linha'. Tem proteção contra água, câmeras quase iguais às do Galaxy S e design de vidro e metal.",
        price: "R$ 2.299",
        linkAffiliate: "",
        linksLojas: {
            amazon: "https://amzn.to/4bBxorN",
            mercadoLivre: "https://meli.la/2khpKFX",
            magalu: "",
            shopee: ""
        },
        linkReview: "/artigos/reviews/galaxy-a56",
        pros: [
            "Construção premium com resistência IP67 (pode cair na água).",
            "Câmeras excelentes para redes sociais, mesmo à noite.",
            "Desempenho sólido que não esquenta facilmente."
        ],
        cons: [
            "Não tem entrada para fone de ouvido.",
            "Vem sem carregador rápido na caixa no Brasil."
        ],
        specs: {
            screen: "6.6\" Super AMOLED 120Hz",
            processor: "Exynos 1580",
            ram: "8GB",
            storage: "256GB",
            battery: "5000mAh",
            camera: "50MP + 12MP Ultra-wide"
        },
        attributes: {
            budget: "medio",
            focus: "bateria",
            ram: "alta",
            storage: "alto"
        }
    },
    {
        id: "motorola-edge-60-neo",
        image: "/images/jogos/genshinImpact/motorolaEdge.webp",        
        title: "Motorola Edge 60 Neo",
        score: 9.4,
        description: "O celular mais bonito e fino da categoria. Perfeito para quem quer estilo, recarga rápida e um celular que não pesa no bolso.",
        price: "R$ 2.499 ~ 2.999",
        linkAffiliate: "",
        linksLojas: {
            amazon: "https://amzn.to/4rhRonX",
            mercadoLivre: "https://meli.la/1onJg4R",
            magalu: "",
            shopee: ""
        },
        linkReview: "/artigos/reviews/motorola-edge-60-neo",
        pros: [
            "Design ultra fino e curvo, muito ergonômico.",
            "Carregador de 68W na caixa (muito rápido).",
            "Certificação IP68 (resistente a mergulhos completos)."
        ],
        cons: [
            "Bateria um pouco menor que os rivais (4600mAh).",
            "Tela curva pode sofrer com toques acidentais."
        ],
        specs: {
            screen: "6.55\" pOLED 144Hz",
            processor: "Dimensity 7300",
            ram: "8GB / 12GB",
            storage: "256GB",
            battery: "4600mAh",
            camera: "50MP Main + 13MP Ultrawide"
        },
        attributes: {
            budget: "medio",
            focus: "camera",
            ram: "alta",
            storage: "alto"
        }
    },
    {
        id: "poco-f7-pro",
        image: "/images/reviewsIMG/pocoF7Pro.jpg",        
        title: "Xiaomi Poco F7 Pro",
        score: 9.6,
        description: "Potência bruta sem limites. Construído em metal e com o processador mais forte da categoria, é a escolha definitiva para uso pesado.",
        price: "R$ 2.199 ~ 3.199",
        linkAffiliate: "",
        linksLojas: {
            amazon: "https://amzn.to/4umZej1",
            mercadoLivre: "https://meli.la/2YsrDDW",
            magalu: "",
            shopee: ""
        },
        linkReview: "/artigos/reviews/poco-f7-pro",
        pros: [
            "Snapdragon de topo de linha antigo, roda tudo no máximo.",
            "Tela com resolução 2K (extremamente nítida).",
            "Carregamento ultra-rápido de 120W (carga total em 20 mins)."
        ],
        cons: [
            "Design traseiro atrai muitas marcas de dedo.",
            "Sem proteção oficial IP68 contra água."
        ],
        specs: {
            screen: "6.67\" AMOLED WQHD+ 120Hz",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: "512GB",
            battery: "5000mAh",
            camera: "50MP com OIS"
        },
        attributes: {
            budget: "medio",
            focus: "jogos",
            ram: "alta",
            storage: "extremo"
        }
    },

    // ==========================================
    // PREMIUM (R$ 5.000+)
    // ==========================================
    {
        id: "galaxy-s26-ultra",
        image: "/images/reviewsIMG/samsungGalaxyS26Ultra.webp",        
        title: "Samsung Galaxy S26 Ultra",
        score: 9.9,
        description: "O rei do Android. Câmeras que dão zoom na lua, inteligência artificial integrada em tudo e a caneta S-Pen para produtividade máxima.",
        price: "R$ 7.500 ~ 10.000",
        linkAffiliate: "",
        linksLojas: {
            amazon: "https://amzn.to/3NwyHiy",
            mercadoLivre: "https://meli.la/2Fr8dcM",
            magalu: "",
            shopee: ""
        },
        linkReview: "/artigos/reviews/galaxy-s26-ultra",
        pros: [
            "A melhor tela antirreflexo do mercado, visibilidade perfeita sob o sol.",
            "Pacote Galaxy AI faz traduções ao vivo e edita fotos como mágica.",
            "Câmera de 200MP com zoom óptico de 5x imbatível."
        ],
        cons: [
            "Aparelho muito grande e pesado (232g), ruim para mãos pequenas.",
            "Preço de lançamento proibitivo para a maioria."
        ],
        specs: {
            screen: "6.8\" Dynamic AMOLED 2X 120Hz Flat",
            processor: "Snapdragon 8 Gen 4 for Galaxy",
            ram: "12GB / 16GB",
            storage: "512GB / 1TB",
            battery: "5000mAh",
            camera: "200MP + 50MP + 12MP + 10MP"
        },
        attributes: {
            budget: "caro",
            focus: "bateria",
            ram: "extrema",
            storage: "extremo"
        }
    },
    {
        id: "iphone-17-pro",
        image: "/images/reviewsIMG/appleIPhone17Pro.webp",        
        title: "Apple iPhone 17 Pro",
        score: 9.8,
        description: "Foco absoluto em vídeos profissionais e ecossistema perfeito. O novo chip A19 Pro faz dele um monstro da renderização no bolso.",
        price: "R$ 8.299 ~ 10.000",
        linkAffiliate: "",
        linksLojas: {
            amazon: "https://amzn.to/4rkhvux",
            mercadoLivre: "https://meli.la/2ebpmXZ",
            magalu: "",
            shopee: ""
        },
        linkReview: "/artigos/reviews/iphone-17-pro",
        pros: [
            "Gravação de vídeo em ProRes 4K a 120fps (padrão de cinema).",
            "Corpo em Titânio Grau 5, leve e super resistente.",
            "Ecossistema iOS perfeito: não trava, não engasga, super seguro."
        ],
        cons: [
            "Carregamento e transferência de arquivos ainda são conservadores na velocidade.",
            "Bateria melhorou, mas ainda exige recarga no fim do dia em uso pesado."
        ],
        specs: {
            screen: "6.1\" Super Retina XDR OLED 120Hz",
            processor: "Apple A19 Pro",
            ram: "8GB",
            storage: "256GB / 512GB",
            battery: "3400mAh (estimado)",
            camera: "48MP Main + 48MP Ultrawide + 12MP Telephoto"
        },
        attributes: {
            budget: "caro",
            focus: "camera",
            ram: "alta",
            storage: "alto"
        }
    },
    {
        id: "rog-phone-9",
        image: "/images/reviewsIMG/asusROG9Pro.webp",        
        title: "Asus ROG Phone 9 Pro",
        score: 9.7,
        description: "Não é apenas um celular, é um setup gamer portátil. Com tela de 165Hz e gatilhos ultrassônicos, é a escolha para quem leva jogos mobile a sério.",
        price: "R$ 6.999",
        linkAffiliate: "",
        linksLojas: {
            amazon: "",
            mercadoLivre: "",
            magalu: "",
            shopee: ""
        },
        linkReview: "/artigos/reviews/rog-phone-9",
        pros: [
            "Gatilhos ultrassônicos (AirTriggers) embutidos no chassi.",
            "Tela de 165Hz: a resposta ao toque mais rápida do mundo.",
            "Bateria monstruosa e duas portas USB-C para carregar enquanto joga."
        ],
        cons: [
            "Câmeras muito fracas para um celular desse preço.",
            "Estética altamente gamer (luzes RGB) não passa despercebida no escritório."
        ],
        specs: {
            screen: "6.78\" AMOLED 165Hz",
            processor: "Snapdragon 8 Gen 4",
            ram: "16GB / 24GB",
            storage: "512GB / 1TB",
            battery: "6000mAh",
            camera: "50MP Main (Gimbal OIS)"
        },
        attributes: {
            budget: "caro",
            focus: "jogos",
            ram: "extrema",
            storage: "extremo"
        }
    }
];