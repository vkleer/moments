import React from 'react'
import styles from '../../styles/Comment.module.css';
import { Link } from 'react-router-dom';
import { Media } from 'react-bootstrap';
import { Avatar } from '../../components/Avatar';

const Comment = (props) => {
    const {
        profile_id, profile_image, owner,
        updated_at, content
    } = props;

  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
            </Link>
            <Media.Body>
                <Link to={`/profiles/${profile_id}`}>
                    <span className={styles.Owner}>{owner}</span>
                </Link>
                <span className={styles.Date}>{updated_at}</span>
                <p>{content}</p> 
            </Media.Body>
        </Media>
    </div>
  )
}

export default Comment