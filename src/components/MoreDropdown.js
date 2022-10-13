import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from '../styles/MoreDropdown.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
    className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
));

export function ProfileEditDropdown({ id }) {
    const history = useHistory();
    return (
      <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
            <Dropdown.Toggle as={ThreeDots} />
            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit`)}
                    aria-label="edit-profile"
                >
                    <i className="fas fa-edit" /> Edit profile
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/username`)}
                    aria-label="edit-username"
                >
                    <i className="far fa-id-card" />
                    Change username
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/password`)}
                    aria-label="edit-password"
                >
                    <i className="fas fa-key" />
                    Change password
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export const MoreDropdown = ({handleEdit, handleDelete}) => {
return (
    <Dropdown className="ml-auto" drop="left">
        <Dropdown.Toggle as={ThreeDots} />
    
        <Dropdown.Menu className="text-center">
            <Dropdown.Item className={styles.DropdownItem}
                onClick={handleEdit}
                aria-label="Edit"
            >
                <i className="fas fa-edit" />
            </Dropdown.Item>
            <Dropdown.Item
                className={styles.DropdownItem}
                onClick={handleDelete}
                aria-label="Delete"
            >
                <i className="fas fa-trash-alt" />
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);
};