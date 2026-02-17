import Link from 'next/link';
import Image from 'next/image';
import styles from './postCard.module.css';
import { PostCardProps } from '@/componentsLists/listsPosts/lists.Posts';

export default function PostCard({ title, description, image, slug, category, date }: PostCardProps) {
    return (
        <Link href={`/artigos/${category}/${slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image src={image} alt={title} fill className={styles.image} />
                <span className={styles.categoryBadge}>{category}</span>
            </div>
            <div className={styles.content}>
                <span className={styles.date}>{date}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.excerpt}>{description}</p>
            </div>
        </Link>
    );
}