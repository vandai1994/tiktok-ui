import { memo } from "react";
import AccountItem from '~/components/AccountItem';

function HandleSearchResult({value}) {
    const handleSearch = value.map((result, index) => (
        <AccountItem key={index} data = {result}/>
    ))
    console.log(handleSearch)
    return handleSearch;
}

export default  memo(HandleSearchResult);