import Button from "../../../atoms/Button/Button";
import FilterIcon from "../../../atoms/icon/navigate/FilterIcon";

interface ButtonToggleFilterProps{
    toggle:()=>void;
    type?: 'default'|'rounded'
}

const ButtonToggleFilter:React.FC<ButtonToggleFilterProps> = ({toggle, type='default'}) => {

    const classs = type === 'default'? 'ButtonToggleFilter': 'ButtonToggleFilterRounded';
    return (
        <Button className={classs}
                text="Filter"
                type="button"
                onClick={toggle}
                icon={<FilterIcon className="" />}
                ariaLabel='Toggle filters button'
      />
    )
}

export default ButtonToggleFilter;