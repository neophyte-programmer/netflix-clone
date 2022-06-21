import React from "react";
import * as ROUTES from "../constants/routes";
import logo from "../logo.png";
import Header from "../components/header/header";
import Profiles from "../components/profiles/profiles";

export const SelectProfileContainer = ({user, setProfile}) => {
    return (
        <>
            <Header bg={false}> 
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="logo" />
                </Header.Frame>
            </Header> 

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    {/* When the user clicks on a profile, set the current profile to the one that was clicked on */}
                    <Profiles.User onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
                        {/* We are using the randomly assigned image from firebase */}
                        <Profiles.Picture src={user.photoURL} alt="user" />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}