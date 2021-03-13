import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import { useHistory } from 'react-router-dom'

function Sidebar(props) {

    const history = useHistory();

    const goToChannel = (id) => {
        if(id) {
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter the channel name...");
        db.collection('rooms').add({
            name: promptName
        })
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    My Workspace
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map( item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
                
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        channels
                    </div>
                    <AddIcon onClick = {addChannel} />
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={()=>goToChannel(item.id)}>
                                # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: #3F0E40;
`

const WorkspaceContainer = styled.div`
    color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div`

`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background-color: #fff;
    fill: #340E40;
    color: #340E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;

    :hover{
        background: #350D36;
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 15px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding: 0 20px;
`
const ChannelsList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;

    :hover{
        background: #350D36;
    }
`