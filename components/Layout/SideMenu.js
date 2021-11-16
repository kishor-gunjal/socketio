import { useRouter } from 'next/router';
import React from 'react';
import {List,Icon,Item} from 'semantic-ui-react';
import Link from 'next/link';
import { logoutUser } from '../../utils/authUser';

const SideMenu = ({notifications,unreadMessage,username,email,unreadNotification}) => {

    const router = useRouter();

    const isActive = route=>router.pathname===route;



    return (
        <>
        <List style={{paddingTop:'1rem'}}verticalAlign="middle" selection size="large">
              <Link href="/">
                  <List.Item active={isActive('/')}>
                        <Icon name="home" size="large" color={isActive('/')&&'teal'}/>
                        <List.Content>
                            <List.Header>Home</List.Header>
                        </List.Content>
                  </List.Item>
              </Link>
              <br/>

              <Link href="/notifications">
                  <List.Item active={isActive('/')}>
                        <Icon name={notifications?'bail outline':'hand point right'} size="large" 
                        color={(isActive('/notifications')&&'teal')||(unreadNotification&&'red')}/>
                        <List.Content>
                            <List.Header content='notifications'></List.Header>
                        </List.Content>
                  </List.Item>
              </Link>
              <br/>

              <Link href="/messages">
                  <List.Item active={isActive('/messages')}>
                        <Icon name={unreadMessage?'hand point right':'mail outline'} size="large" 
                        color={(isActive('/messages')&&'teal')||(unreadMessage&&'orange')}/>
                        <List.Content>
                            <List.Header content='Messages'/>
                        </List.Content>
                  </List.Item>
              </Link>
              <br/>

              <Link href={`/${username}`}>
                  <List.Item active={router.query.username===username}>
                        <Icon name='user' size="large" 
                        color={(router.query.username==username&&'teal')||(unreadMessage&&'orange')}/>
                        <List.Content>
                            <List.Header content='Account'/>
                        </List.Content>
                  </List.Item>
              </Link>
              <br/>

                <List.Item onClick={()=>logoutUser(email)}>
                    <Icon name='sign out' size="large" color="red"/>
                    <List.Content>
                        <List.Header content='Logout'/>
                    </List.Content>
                </List.Item>



        </List>
            
        </>
    )
}

export default SideMenu
