import React from 'react'
import {MainLayout, InnerLayout} from '../Styles/Layout';
import Title from '../components/Title';
import { useState } from 'react';
import portfolios from '../Data/Portfolios';
import Menu from '../components/Menu';
// import Button from '../components/Button';

// const countButton = ['All', ...new Set (portfolios.map(item => item.category))]

function Portfolio() {
    const [menuItem, setMenuItem] = useState(portfolios);
    // const [button, setButton] = useState(countButton);

    // const filter = (button) =>{

    //     if(button === 'All'){
    //         setMenuItem(portfolios);
    //         return;
    //     }
    //     const filteredData = portfolios.filter((item => item.category === button));
    //     setMenuItem(filteredData); 
   // }
    return (
       <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>
                {/* <Button filter={filter} button={button} /> */}
            <Menu menuItem={menuItem} />
            </InnerLayout>
       </MainLayout>
    )
}

export default Portfolio
