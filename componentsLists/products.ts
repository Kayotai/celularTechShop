interface featuredProductProps {
  name: string;
  image: string;
  score: number;
  specs: string;
}

export const featuredProduct: featuredProductProps = {
    name: "Galaxy S24 Ultra",
    image: "/images/melhoresReviewsDoMes/s24FE.webp",
    score: 9.8,
    specs: "Snapdragon 8 Gen 3 | 5000mAh | 200MP",
};

export const products = [
    {
      id: "1",
      name: "iPhone 15 Pro Max",
      image: "https://images.unsplash.com/photo-1727941035071-910fd07135bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBhbmRyb2lkJTIwcGhvbmV8ZW58MXx8fHwxNzY4MjM4MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "🔥 Popular",
      badgeVariant: "destructive" as const,
      specs: "A17 Pro | 4422mAh | 48MP",
      score: 9.5,
      price: "R$ 8.999",
    },
    {
      id: "2",
      name: "Xiaomi 14 Pro",
      image: "https://images.unsplash.com/photo-1758348844351-48e1ec64cd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwZmxhZ3NoaXB8ZW58MXx8fHwxNzY4MjM4MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "Menor Preço",
      badgeVariant: "secondary" as const,
      specs: "Snapdragon 8 Gen 3 | 5000mAh | 50MP",
      score: 9.2,
      price: "R$ 4.299",
    },
    {
      id: "3",
      name: "OnePlus 12",
      image: "",
      badge: "Novo",
      badgeVariant: "default" as const,
      specs: "Snapdragon 8 Gen 3 | 5400mAh | 50MP",
      score: 9.0,
      price: "R$ 4.799",
    },
    {
      id: "4",
      name: "Pixel 8 Pro",
      image: "",
      badge: "Melhor Câmera",
      badgeVariant: "destructive" as const,
      specs: "Tensor G3 | 5050mAh | 50MP",
      score: 8.8,
      price: "R$ 5.999",
    },
    {
      id: "5",
      name: "ASUS ROG Phone 8",
      image: "https://images.unsplash.com/photo-1732020883985-cd736e0ce046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBwaG9uZSUyMG1vYmlsZXxlbnwxfHx8fDE3NjgxNTM5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "Gaming",
      badgeVariant: "default" as const,
      specs: "Snapdragon 8 Gen 3 | 5500mAh | 50MP",
      score: 9.3,
      price: "R$ 5.499",
    },
    {
      id: "6",
      name: "Motorola Edge 50 Pro",
      image: "https://images.unsplash.com/photo-1727941035071-910fd07135bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBhbmRyb2lkJTIwcGhvbmV8ZW58MXx8fHwxNzY4MjM4MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "Melhor Bateria",
      badgeVariant: "secondary" as const,
      specs: "Snapdragon 7 Gen 3 | 4500mAh | 50MP",
      score: 8.5,
      price: "R$ 2.999",
    },
];