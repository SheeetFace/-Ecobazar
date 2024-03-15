import Button from '../../atoms/Button/Button';
import SearchIcon from '../../atoms/icon/navigate/SearchIcon';
import Input from '../../atoms/Input/Input';

import styles from '../SearchPanel/SearchPanel.module.scss'

import type {FormEvent} from 'react';

const SearchPanel =()=>{

    const handleSubmit =(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

    }

    return(
        <form className={styles.SearchPanel}
              onSubmit={handleSubmit}>

            <Input/>
            <Button className='Search'
                    icon={<SearchIcon/>}
                    />

        </form>
    )
}
export default SearchPanel;