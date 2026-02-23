import { Metadata } from 'next';

interface SeoProps {
  title: string;
  description: string;
  slug: string;
  path: string;
  publishedAt: string; 
  modifiedAt?: string; 
}

export function constructMetadata({ title, description, slug, path, publishedAt, modifiedAt }: SeoProps): Metadata {
  const finalDate = modifiedAt || publishedAt;

  return {
    title: `${title} - CelularTech`,
    description,
    alternates: {
      canonical: `https://celulartech.shop/${path}/${slug}`,
    },
    other: {
      "article:published_time": publishedAt,
      "article:modified_time": finalDate,
    }
  };
}

// Helper para gerar o Script JSON-LD automático
export function generateSchema(props: SeoProps) {
  return {
    "@context": "https://celulartech.shop",
    "@type": "TechArticle",
    "headline": props.title,
    "description": props.description,
    "datePublished": props.publishedAt,
    "dateModified": props.modifiedAt || props.publishedAt,
    "author": {
      "@type": "Person",
      "name": "Hiago/CelularTech",
      "url": "https://celulartech.shop/sobre"
    }
  };
}