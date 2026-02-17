import { CardPhoneProps } from "@/componentsLists/listcardsPhone/listPhone";

export const listMinecraftPhones: CardPhoneProps[] = [
    // 1. O Barato
    {
    id: "galaxy-a17-256gb",
    image: "/images/jogos/minecraft/SamsungGalaxyA175G.webp", // Lembre de subir a imagem com esse nome
    title: "Samsung Galaxy A17 5G (256GB)",
    score: 8.7,
    description: "O espaço que você precisa para nunca mais apagar um mundo. Com 256GB de memória, o A17 é perfeito para quem lota o Minecraft de mods e shaders sem medo de ficar sem espaço.",
    price: "R$ 1.249",
    linkAffiliate: "https://www.amazon.com.br/dp/B0FPQ1C614", // Link limpo
    linkReview: "/artigos/reviews/galaxy-a17",
    pros: [
        "256GB de Armazenamento: O dobro da maioria dos concorrentes na mesma faixa de preço.",
        "Tela Super AMOLED: Cores vivas que destacam os detalhes das construções e biomas.",
        "Eficiência Energética: Processador frio que mantém o FPS estável em sessões longas.",
        "Design Slim: Mais fino e leve que a linha M, sendo mais confortável para jogar."
    ],
    cons: [
        "Carregador não incluso na caixa (padrão Samsung).",
        "Performance em Shaders pesados é limitada (médio/baixo).",
        "Bateria de 5.000mAh (excelente, mas menor que os 6.000mAh do M36)."
    ],
    specs: {
        screen: "6.7\" Super AMOLED 90Hz",
        processor: "Exynos 1430 Octa-Core",
        ram: "8GB",
        storage: "256GB",
        battery: "5000mAh",
        camera: "50MP Main"
    }
},
    //  O Intermediário 
    {
        id: "poco-x7-pro",
        image: "/images/jogos/cod/xiaomiPocoX7.webp",
        title: "Poco X7 Pro",
        score: 9.5,
        description: "Quer aumentar a 'Render Distance' para 16 ou 20 chunks sem lag? O processador desse celular aguenta o tranco e ainda roda shaders leves.",
        price: "R$ 2.448",
        linkAffiliate: "https://www.amazon.com.br/Smartphone-Xiaomi-X7-Black-2412DPC0AG/dp/B0DRD1SBSD/ref=sr_1_6?crid=BETUH5ROAZ69&dib=eyJ2IjoiMSJ9.S_pyKDx6uNyqri5AScN7aXbfUTS2JqdYi9Efq-kNr_ibWoxGaEj0h8hLzSYVpIdLmMv-Yr7YrJEPlQ8CvuPbRoJ9JpHsR5v5-pZH5SYRcsDaU796YvFgGRFidn1a7nUJFY2zWz294iRZry75ivQe8hxElAtnHiWkpTnAmwMdbsRtYRumX4mTVXvgPHRE_3leDVjoYbv0FkQrvnVEwhhX7IRdba8PzW_5bthNmyARZXoPjQ588DTb3nE4Dx69b3hCK4bGp8doha4Wb6XAw5EmAiOe2EkOz3xdQNh4icZItyU.9F4NC43wc4XdHvOTQ4bdYo-fWMknnPbJyRE8S4VHNhw&dib_tag=se&keywords=poco+x7+pro&qid=1770663338&sprefix=poco%2Caps%2C219&sr=8-6",
        linkReview: "/artigos/reviews/poco-x7-pro",
        pros: [
            "Processador Dimensity 8400: Carrega chunks muito mais rápido.",
            "12GB de RAM: Essencial se você gosta de encher o jogo de Addons e Mods.",
            "Carregamento 67W: Bateria cheia em 40 minutos.",
            "Resfriamento LiquidCool: Não esquenta mesmo gerando mundos novos."
        ],
        cons: [
            "Câmeras secundárias fracas (foco total em desempenho).",
            "Acabamento traseiro atrai marcas de dedo.",
            "Som estéreo poderia ter mais graves."
        ],
        specs: {
            screen: "6.67\" Flow AMOLED 1.5K",
            processor: "Dimensity 8400-Ultra",
            ram: "12GB",
            storage: "256GB",
            battery: "5100mAh",
            camera: "64MP OIS"
        }
    },
    // O Topo de Linha
    {
    id: "galaxy-s24-plus",
    image: "/images/jogos/minecraft/Smartphone Samsung Galaxy S24+.webp", // Sugestão de nome para o arquivo
    title: "Samsung Galaxy S24+ 5G (512GB)",
    score: 9.7,
    description: "O equilíbrio perfeito entre luxo e poder. Com sua tela QHD+, o Minecraft ganha uma definição absurda, permitindo enxergar biomas distantes com clareza máxima.",
    price: "R$ 5.199", // Preço estimado para o modelo de 512GB em 2026
    linkAffiliate: "https://www.amazon.com.br/dp/B0CQD9W98F",
    linkReview: "/artigos/reviews/galaxy-s24-plus",
    pros: [
        "Tela Dynamic AMOLED 2X QHD+: A melhor resolução para ver cada detalhe das suas construções.",
        "512GB de Armazenamento: Espaço de sobra para gravar suas gameplays em 4K sem se preocupar.",
        "Galaxy AI: Otimização inteligente de bateria e performance enquanto você joga.",
        "Design Premium em Alumínio: Resistente, leve e não superaquece fácil como os modelos antigos."
    ],
    cons: [
        "Preço elevado por ser um topo de linha.",
        "Não possui entrada P2 para fone de ouvido (exige adaptador ou bluetooth).",
        "Carregamento de 45W é bom, mas perde para os chineses que carregam em 20min."
    ],
    specs: {
        screen: "6.7\" QHD+ Dynamic AMOLED 120Hz",
        processor: "Exynos 2400 (Deca-Core)",
        ram: "12GB",
        storage: "512GB",
        battery: "4900mAh",
        camera: "50MP Triple System"
    }
}
];