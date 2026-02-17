import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CelularTech - Guia de Compras',
    short_name: 'CelularTech',
    description: 'Melhores celulares para jogos e criadores de conteúdo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#18181b', // Cor de fundo (Dark mode)
    theme_color: '#10b981', // Cor do tema (Seu verde)
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icons/icon-192.png', // Você precisa criar essa imagem (192x192px)
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png', // Você precisa criar essa imagem (512x512px)
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}