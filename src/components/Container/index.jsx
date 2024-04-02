import propTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({children}) => {
    return (
        <section className={styles.container}>{children}</section>
    );
}

Container.propType = {
    children: propTypes.node
}

export default Container;