export interface PostCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    slug: string;
    category: string;
    date: string;
}

export const BlogPosts: PostCardProps[] = [
    {
        id: "7",
        title: "Como Escolher um Bom Celular em 2026? O Guia Definitivo",
        description: "Não jogue dinheiro fora. Aprenda o que realmente importa na ficha técnica de um smartphone em 2026: RAM, Processador, Tela e Câmeras.",
        image: "/images/guias/comoEscolherCelular.webp",
        slug: "como-escolher-celular-2026",
        category: "guias",
        date: "24 Fev 2026"
    },
    {
        id: "6",
        title: "Melhores Celulares para COD Mobile em 2026",
        description: "Testamos os aparelhos mais potentes para você dominar as rankeadas com 120 FPS.",
        image: "/images/jogos/cod/codMobile.webp",
        slug: "melhores-celulares-para-cod-mobile-2026",
        category: "jogos",
        date: "26 Jan 2026"
    },
    {
        id: "5",
        title: "Melhores celulares para jogar Genshin Impact até R$ 2.000 reais.",
        description: "Testamos os aparelhos com os melhores desempenhos até R$ 2.000 reais para você jogar sem problemas.",
        image: "/images/jogos/genshinImpact/genshinImpact.webp",
        slug: "celulares-que-rodam-genshin-impact-ate-2000",
        category: "jogos",
        date: "26 Jan 2026"
    },
    {
        id: "4",
        title: "Melhores Celulares para Gravar Vídeo e Reels até 2.000 (2026)",
        description: "Quer viralizar no TikTok? Encontramos celulares com estabilização óptica (OIS) e 4K que custam pouco.",
        image: "/images/videoPhones/gravarVideos.webp", 
        slug: "melhores-celulares-para-gravar-video-ate-2000",
        category: "criadores", 
        date: "02 Fev 2026"
    },
    {
        id: "3",
        title: "Melhores Celulares para Jogar Minecraft Sem Travar (2026)",
        description: "Construa mundos gigantes e use mods sem lag. Confira os celulares com muita RAM e bateria para jogar o dia todo.",
        image: "/images/jogos/minecraft/minecraft.webp", 
        slug: "melhores-celulares-para-minecraft-sem-travar",
        category: "jogos",
        date: "15 Fev 2026"
    },
    {
        id: "2",
        title: "Melhores Celulares para Editar Fotos e Vídeos em 2026",
        description: "Do CapCut ao Lightroom: veja quais celulares têm processador e tela fiel para editar profissionalmente (do barato ao top).",
        image: "/images/videoPhones/edicaoDeFotosVideos.webp", 
        slug: "melhores-celulares-para-editar-fotos-videos-2026",
        category: "criadores",
        date: "10 Fev 2026"
    },
    {
        id: "1",
        title: "Melhores Celulares para Trabalhar de Uber e 99pop em 2026",
        description: "Celular travando com o passageiro no carro? Veja os 2 melhores smartphones que não esquentam no painel, têm bateria infinita e tela forte para o sol.",
        image: "/images/trabalho/uberArtigo.webp", 
        slug: "/melhores-celulares-para-trabalhar-no-uber-2026",
        category: "trabalho",
        date: "23 Fev 2026"
    }
];