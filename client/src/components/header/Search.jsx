import {InputBase,Box, styled} from '@mui/material'

const SearchContainer = styled(Box)`
    background:#fff;
    border-radius:2px;
    margin-left:10px;
    width:38%;
`


const StyledText = styled(InputBase)
`
 width:100%;
 padding-left:20px
`


const Search = ()=>{
    return(
        <SearchContainer>
            <StyledText placeholder='Search for products, brands and more '/>
        </SearchContainer>
    )
}

export default Search;