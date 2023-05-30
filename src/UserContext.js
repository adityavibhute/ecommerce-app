import React, { useContext } from 'react';

const defaultContext = {
    products: [{
        id: 3232,
        image: "path-to-image",
        title: "Name",
        price: "32"
    }]
}

const UserContext = React.createContext(defaultContext);

export const useUserContext = () => useContext(UserContext);

export default UserContext;