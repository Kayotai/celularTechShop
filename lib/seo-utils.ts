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
    title: `${title} - TechInter`,
    description,
    alternates: {
      canonical: `https://techinter.com.br/${path}/${slug}`,
    },
    // Aqui avisamos aos robôs a data da última modificação
    other: {
      "article:published_time": publishedAt,
      "article:modified_time": finalDate,
    }
  };
}

// Helper para gerar o Script JSON-LD automático
export function generateSchema(props: SeoProps) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": props.title,
    "description": props.description,
    "datePublished": props.publishedAt,
    "dateModified": props.modifiedAt || props.publishedAt,
    "author": {
      "@type": "Person",
      "name": "Seu Nome/TechInter",
      "url": "https://techinter.com.br/sobre"
    }
  };
}