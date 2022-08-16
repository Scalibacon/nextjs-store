import { SyntheticEvent, useState } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import styles from './SearchInput.module.scss';

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');

  const submitSearch = (event: SyntheticEvent) => {
    event.preventDefault();
  }

  return (
    <form className={styles.searchContainer} onSubmit={submitSearch}>
      <input 
        type="text" 
        placeholder='Busque aqui'
        onChange={e => setSearchText(e.target.value)}
        value={searchText}
      />
      <button type="submit">
        <MdOutlineDoubleArrow size='5rem'/>
      </button>      
    </form>
  )
}

export default SearchInput;