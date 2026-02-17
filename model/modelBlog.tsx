import styles from "./modelBlog.module.css"
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import React from "react";


interface ChildrenProps { 
    children: React.ReactNode;
    title?: string;
    subtitle?: string; 
}

export default function ModelBlog({children, title, subtitle}: ChildrenProps)
{
    return(
        <div>
            <Header />
            <main className={styles.main}>
                <section className={styles.headerBlog}>
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                    <p className={styles.subtitle}>
                        {subtitle}
                    </p>
                </section>
                {children}
            </main>
            <Footer />
        </div>
    )
}