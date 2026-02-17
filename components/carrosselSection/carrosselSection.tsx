import { BlogPosts } from "@/componentsLists/listsPosts/lists.Posts"
import styles from "./carrosselSection.module.css"
import PostCard from "../cardPosts/postCard"

export default function CarrosselSection()
{
    return (
        <section id="ultimos-blog" className={styles.section}>
            <h2 className={styles.sectionTitle}>Últimas do Blog</h2>
            <div className={styles.carouselWrapper}>
                {BlogPosts.map(post => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </section>
    )
}