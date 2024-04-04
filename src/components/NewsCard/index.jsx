import classnames from "classnames";
import propTypes from "prop-types";

import styles from './NewsCard.module.css';
import { formatDated } from "../../utils/formatDate";

const NewsCard = ({
    src,
    title,
    publishedAt,
    author,
    sourceName,
    description,
    url,
    notLastChild
}) => {
    return (
        <>
            <div className={classnames(styles.newsCard, {
                [styles.newsCardGap]: notLastChild
            })}>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={src} alt={`${title} thumbnail img`} />
                    <p className={styles.imgTitle}>{title}</p>
                </div>

                <div className={styles.newsCardContent}>
                    <p className={styles.newsCardDate}>{formatDated(publishedAt)}</p>
                    <p className={styles.newsCardAuthor}>{`${author} | ${sourceName}`}</p>

                    <p className={styles.newsCardDesc}>{description}</p>
                    <a className={styles.url} href={url} target="_blank" rel="noreferrer noopenner">Go to website</a>
                </div>
            </div>
        </>
    )
}

NewsCard.prototype = {
    src: propTypes.string,
    title: propTypes.string,
    publishedAt: propTypes.string,
    author: propTypes.string,
    sourceName: propTypes.string,
    description: propTypes.string,
    url: propTypes.string,
    notLastChild: propTypes.bool
}

export default NewsCard