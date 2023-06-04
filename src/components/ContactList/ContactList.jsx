// import cl from './ContactList.module.css';

export const ContactList = ({ deleteContact, getFilteredContacts }) => {  
  return (
    <ul>
    {getFilteredContacts.map(({ id, name, number }) => (
    <li key = {id}>{name}: {number}
    <button type = "button" onClick = {() => deleteContact(id)}>Delete</button>
    </li>))}        
    </ul>
  );
} 