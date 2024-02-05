import { SearchComponent, SearchContainer, SearchIcon } from "./styles"
import ClearIcon from '../../assets/icons/clear-x-icon.png'
import { ChangeEvent, useState } from "react"

interface IDefaultSearchComponent {
    onTextChange: (text: string) => void;
}


export const DefaultSearchComponent : React.FC<IDefaultSearchComponent> = ({onTextChange}) => {

    const [searchValue, setSearchValue] = useState("")
    const maxVisibleChars = 10
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearchValue(inputValue.slice(-maxVisibleChars));
        onTextChange(inputValue)
      };

    return (
        <SearchContainer>
              <SearchComponent
               value={searchValue.slice(0, maxVisibleChars)}
                onChange={handleInputChange}
                placeholder="Enter Patient Name"
                />
              <SearchIcon src={ClearIcon}/>
        </SearchContainer>
          
    )

}