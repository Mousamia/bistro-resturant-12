/* eslint-disable no-unused-vars */

import { useState } from "react";

const useMenu = () =>{
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    fetch('../../public/data/menu.json')
    .then(res => res.json())
    .then(data => {
        setMenu(data);
        setLoading(false);
    });

    return [menu, loading];

}

export default useMenu;