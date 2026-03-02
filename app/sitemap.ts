import { MetadataRoute } from 'next';

const BASE_URL = 'https://celulartech.shop';

export default function sitemap(): MetadataRoute.Sitemap {
    const blogPosts = [
        { slug: "melhores-celulares-para-cod-mobile-2026", category: "jogos", date: "2026-02-18" },
        { slug: "celulares-que-rodam-genshin-impact-ate-2000", category: "jogos", date: "2026-02-18" },
        { slug: "melhores-celulares-para-gravar-video-ate-2000", category: "criadores", date: "2026-02-18" },
        { slug: "melhores-celulares-para-minecraft-sem-travar", category: "jogos", date: "2026-02-18" },
        { slug: "melhores-celulares-para-editar-fotos-videos-2026", category: "criadores", date: "2026-02-18" },
        { slug: "melhor-celular-2026-custo-beneficio", category: "review", date: "2026-02-17" },
        { slug: "melhores-celulares-para-trabalhar-no-uber-2026", category: "trabalho", date: "2026-02-23" },
        { slug: "como-escolher-celular-2026", category: "guias", date: "2026-02-24" },
        { slug: "celular-caiu-na-agua", category: "informativo", date: "2026-03-3" },
    ];

    // Mapeamento dos Posts para URLs
    const postsUrls = blogPosts.map((post) => ({
        url: `${BASE_URL}/artigos/${post.category}/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Páginas Estáticas 
    const staticRoutes = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${BASE_URL}/sobre`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/politica-privacidade`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/termos-uso`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ];

    return [...staticRoutes, ...postsUrls];
}