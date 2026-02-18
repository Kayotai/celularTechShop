import { CardPhoneProps } from "@/componentsLists/listcardsPhone/listPhone";

export const listEditingPhones: CardPhoneProps[] = [
    // Poco F7
    {
        id: "poco-f7",
        image: "/images/videoPhones/xiaom.webp",
        title: "Poco X7 5G",
        score: 9.6,
        description: "Para quem usa CapCut e Alight Motion: o Poco X7 foca 100% em processador bruto. Ele exporta vídeos 4K na metade do tempo de um iPhone antigo.",
        price: "R$ 1.940",
        linkAffiliate: "https://amzn.to/4roQHdo",
        linkReview: "/artigos/reviews/poco-f7",
        pros: [
            "Processador Snapdragon 8 Gen 3 (Reutilizado de 2024): Potência dos antigos melhores.",
            "Bateria de 6.500mAh: Edite por 6 horas seguidas sem plugar.",
            "12GB de RAM LPDDR5X: Aguenta múltiplas camadas no CapCut sem travar nem mesmo um pouco.",
            "Armazenamento UFS 4.0: Abre a galeria e carrega vídeos instantaneamente."
        ],
        cons: [
            "A tela tem cores um pouco saturadas demais, mas dá para calibrar nas configurações.",
            "Câmeras auxiliares fracas.",
            "Construção em plástico simples."
        ],
        specs: {
            screen: "6.67\" OLED 120Hz",
            processor: "Snapdragon 8 Gen 3 (Otimizado)",
            ram: "8GB~12GB",
            storage: "256GB / 512GB",
            battery: "6500mAh",
            camera: "50MP OIS Main"
        }
    },
    // Xiaomi 15T
    {
        id: "xiaomi-14t-pro",
        image: "/images/videoPhones/xiaomi15TPro.webp",
        title: "Xiaomi 14T Pro",
        score: 9.7,
        description: "A tela do celular é calibrada profissionalmente. Se você edita fotos para marcas ou clientes e precisa garantir que a precisão das cores esteja certa, essa é a melhor opção.",
        price: "R$ 3.599",
        linkAffiliate: "https://amzn.to/4kOpCy4",
        linkReview: "/artigos/reviews/xiaomi-14t-pro",
        pros: [
            "Tela CrystalRes 144Hz: Fluidez máxima e cobertura 100% DCI-P3.",
            "Processador Dimensity 9400+: Tão forte quanto os melhores do mercado atual, mas mais barato.",
            "Carregamento de 120W: 0 a 100% em 19 minutos.",
            "Suporte a RAW nativo com câmeras Leica."
        ],
        cons: [
            "A interface HyperOS ainda tem alguns anúncios nos apps de sistema.",
            "Não tem carregamento sem fio.",
            "Módulo de câmeras gigante, pode atrapalhar a pegada no sentido horizontal."
        ],
        specs: {
            screen: "6.67\" AMOLED 1.5K 144Hz",
            processor: "Dimensity 9400+ Ultra",
            ram: "12GB / 16GB",
            storage: "512GB / 1TB",
            battery: "5000mAh",
            camera: "50MP Leica (Main + Tele)"
        }
    },
    // Samsung Galaxy S25 Ultra
    {
        id: "galaxy-s25-ultra",
        image: "/images/videoPhones/samsungGalaxyS25Ultra.webp",
        title: "Samsung Galaxy S25 Ultra",
        score: 10.0,
        description: "O único com S-Pen. Para editar máscaras no Lightroom ou desenhar frames frame-a-frame no vídeo, a precisão da caneta é insuperável. Resumindo é um PC de bolso.",
        price: "R$ 6.799",
        linkAffiliate: "https://amzn.to/4qLG7fx",
        linkReview: "/artigos/reviews/galaxy-s25-ultra",
        pros: [
            "S-Pen Integrada: Precisão cirúrgica para remover coisas muito pequenas no Photoshop.",
            "Samsung DeX: Tem como conectar num monitor e editar como se fosse um computador desktop.",
            "Tela Anti-Reflexo Gorila Armor 2: Edite sob o sol forte sem problemas.",
            "7 Anos de Atualizações: Um investimento que dura a década."
        ],
        cons: [
            "Preço proibitivo para iniciantes.",
            "Cantos retos podem machucar a mão após horas segurando.",
            "Carregamento de 45W perde feio para os modelos chineses."
        ],
        specs: {
            screen: "6.8\" Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 5 for Galaxy",
            ram: "16GB",
            storage: "512GB / 1TB",
            battery: "5000mAh",
            camera: "200MP + 50MP Zoom"
        }
    }
];