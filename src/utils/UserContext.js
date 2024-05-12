import { createContext } from "react";

const UserContext = createContext({
    loggedInStatus:false,
    loggedInUser:'Guest'
});

export default UserContext;