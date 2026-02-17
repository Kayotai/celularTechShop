import { Star } from "lucide-react"
import styles from "./star.module.css"

interface starProps { score: number; }

export default function Stars({ score }:starProps)
{
    return (
        <div className={styles.stars} aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${
                      i < Math.floor(score / 2)
                        ? styles.starFilled
                        : styles.starEmpty
                    }`}
                  />
                ))}
                <span className={styles.scoreSpan}>
                  ({score}/10)
                </span>
              </div>
    )
}