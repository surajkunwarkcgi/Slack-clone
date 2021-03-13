import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header({ user, signOut }) {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                    <SearchContainer>
                        <Search>
                            <input type="text" placeholder="Search..."/>
                        </Search>
                    </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo}/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: #350d36;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
    display: flex;
    margin: 0 15px;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin: 0 15px;
`
const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 8px;

    input {
        background-color: transparent;
        border: none;
        padding: 4px 8px;
        color: #fff;
    }

    input:focus {
        outline: none;
    }
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;

    img {
        width: 100%;
    }
`