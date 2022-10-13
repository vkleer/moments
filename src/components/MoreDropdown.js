import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from '../styles/MoreDropdown.module.css';

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