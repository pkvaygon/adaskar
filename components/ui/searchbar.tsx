import { Input } from "@nextui-org/react";
import clsx from "clsx";

const SearchBar = ({className} : {className?:string}) => {
    return (
        <Input
            type="text"
            className={clsx("w-full rounded-sm", className)} 
            placeholder="Поиск по обьявлениям"
            labelPlacement="outside"
            startContent={''}
        />
    );
};

export default SearchBar;