import { SyntheticEvent, useState } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';
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
      <button type="submit" className={`${styles.arrowImage}`}>
        <MdOutlineDoubleArrow size='5rem'/>
      </button>     
      <button type="submit" className={`${styles.searchImage}`}>
        <IoMdSearch size={25}/>
      </button> 
    </form>
  )
}

export default SearchInput;