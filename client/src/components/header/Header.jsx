import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material'
import Search from './Search'

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height:55px;
`

const StyleToolbar = styled(Toolbar)`
    min-height: 55px;
    
`

const Component = styled(Box)`
    margin-left: 12%;
    line-height:0px;
`

const Tag = styled(Typography)`
    font-size:10px;
    font-style:italic;
`

const SubHead = styled(Box)`
    display:flex;
    gap:5px
`
const Plus = styled(Box)`
    margin-left:2px;
    color:#ffe500;
`

const logoUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const tagUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


const Header = () => {
    return (
        <StyledHeader>
            <StyleToolbar>
                <Component>
                    <img style= {{width:75}} src={logoUrl} alt="logo" srcset="" />
                    <SubHead>
                        <Tag>Explore
                             <Plus component="span">Plus</Plus>
                        </Tag>
                        <img style={{ width:10, height:10 }} src={tagUrl} alt="" srcset="" />
                    </SubHead>
                   
                </Component>
                <Search/>
            </StyleToolbar>
        </StyledHeader>
    )
}

export default Header;