import React from 'react';
import Asset from './Asset';
import NoResults from '../assets/no-results.png';
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
        <Asset 
            src={NoResults} 
            message="Sorry, the page you're looking for does not exist." 
        />
    </div>
  )
}

export default NotFound