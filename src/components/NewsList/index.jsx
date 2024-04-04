import propTypes from 'prop-types'
import styles from './NewsList.module.css'
import NewsCard from '../NewsCard'

const NewsList = ({ articles }) => {
    return (
        <div className={styles.NewsList}>
            {articles.map((articles, index, arr) => {
                if (!articles.urlToImage || !articles.author || !articles.content) {
                    return null;    
                }

                return (
                    <NewsCard 
                        key= {index}
                        src= {articles.urlToImage}
                        title= {articles.title}
                        publishedAt= {articles.publishedAt}
                        author= {articles.author}
                        sourceName= {articles.source.name}
                        description= {articles.description}
                        url= {articles.url}
                        notLastChild= {!(arr.length === index + 1)}        
                    />
                )
            })}
        </div>
    )
}

NewsList.propType = {
    articles: propTypes.array
}

export default NewsList