import React from 'react';

export const DataContext = React.createContext();

export class DataProvider extends React.Component{

    state = {
        products:[
            {
                "_id": "1",
                "title": "Addidas Bat 01",
                "src": "https://staticg.sportskeeda.com/wp-content/uploads/2015/07/pumabat-1435749643-800.jpg",
                "description": "A beginner's guide to buying the right cricket bat",
                "content": "The toe guard – The toe on all cricket bats is rather susceptible to breakages. This is especially common when batsmen face those deadly ‘yorkers’, where the impact of a moving bat meeting a speeding ball can be extremely high. Such instances can cause the wood to dent or even split. Therefore, it is highly recommended that you buy and fit a toe guard to reduce the risk of breakage.",
                "price": 2500,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "SS Bat 02",
                "src": "https://staticg.sportskeeda.com/wp-content/uploads/2015/07/pumabat-1435749643-800.jpg",
                "description": "A beginner's guide to buying the right cricket bat",
                "content": "The toe guard – The toe on all cricket bats is rather susceptible to breakages. This is especially common when batsmen face those deadly ‘yorkers’, where the impact of a moving bat meeting a speeding ball can be extremely high. Such instances can cause the wood to dent or even split. Therefore, it is highly recommended that you buy and fit a toe guard to reduce the risk of breakage.",
                "price": 3000,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "SF Bat 03",
                "src": "https://staticg.sportskeeda.com/wp-content/uploads/2015/07/pumabat-1435749643-800.jpg",
                "description": "A beginner's guide to buying the right cricket bat",
                "content": "The toe guard – The toe on all cricket bats is rather susceptible to breakages. This is especially common when batsmen face those deadly ‘yorkers’, where the impact of a moving bat meeting a speeding ball can be extremely high. Such instances can cause the wood to dent or even split. Therefore, it is highly recommended that you buy and fit a toe guard to reduce the risk of breakage.",
                "price": 2200,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "TON Bat 04",
                "src": "https://staticg.sportskeeda.com/wp-content/uploads/2015/07/pumabat-1435749643-800.jpg",
                "description": "A beginner's guide to buying the right cricket bat",
                "content": "The toe guard – The toe on all cricket bats is rather susceptible to breakages. This is especially common when batsmen face those deadly ‘yorkers’, where the impact of a moving bat meeting a speeding ball can be extremely high. Such instances can cause the wood to dent or even split. Therefore, it is highly recommended that you buy and fit a toe guard to reduce the risk of breakage.",
                "price": 2450,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "GM Bat 05",
                "src": "https://staticg.sportskeeda.com/wp-content/uploads/2015/07/pumabat-1435749643-800.jpg",
                "description": "A beginner's guide to buying the right cricket bat",
                "content": "The toe guard – The toe on all cricket bats is rather susceptible to breakages. This is especially common when batsmen face those deadly ‘yorkers’, where the impact of a moving bat meeting a speeding ball can be extremely high. Such instances can cause the wood to dent or even split. Therefore, it is highly recommended that you buy and fit a toe guard to reduce the risk of breakage.",
                "price": 3750,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "MRF Bat 06",
                "src": "https://staticg.sportskeeda.com/wp-content/uploads/2015/07/pumabat-1435749643-800.jpg",
                "description": "A beginner's guide to buying the right cricket bat",
                "content": "The toe guard – The toe on all cricket bats is rather susceptible to breakages. This is especially common when batsmen face those deadly ‘yorkers’, where the impact of a moving bat meeting a speeding ball can be extremely high. Such instances can cause the wood to dent or even split. Therefore, it is highly recommended that you buy and fit a toe guard to reduce the risk of breakage.",
                "price": 2000,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "MRF Bat 06",
                "src": "https://staticg.sportskeeda.com/wp-content/uploads/2015/07/pumabat-1435749643-800.jpg",
                "description": "A beginner's guide to buying the right cricket bat",
                "content": "The toe guard – The toe on all cricket bats is rather susceptible to breakages. This is especially common when batsmen face those deadly ‘yorkers’, where the impact of a moving bat meeting a speeding ball can be extremely high. Such instances can cause the wood to dent or even split. Therefore, it is highly recommended that you buy and fit a toe guard to reduce the risk of breakage.",
                "price": 3500,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "MRF Bat 06",
                "src": "https://staticg.sportskeeda.com/wp-content/uploads/2015/07/pumabat-1435749643-800.jpg",
                "description": "A beginner's guide to buying the right cricket bat",
                "content": "The toe guard – The toe on all cricket bats is rather susceptible to breakages. This is especially common when batsmen face those deadly ‘yorkers’, where the impact of a moving bat meeting a speeding ball can be extremely high. Such instances can cause the wood to dent or even split. Therefore, it is highly recommended that you buy and fit a toe guard to reduce the risk of breakage.",
                "price": 2350,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "MRF Bat 06",
                "src": "https://staticg.sportskeeda.com/wp-content/uploads/2015/07/pumabat-1435749643-800.jpg",
                "description": "A beginner's guide to buying the right cricket bat",
                "content": "The toe guard – The toe on all cricket bats is rather susceptible to breakages. This is especially common when batsmen face those deadly ‘yorkers’, where the impact of a moving bat meeting a speeding ball can be extremely high. Such instances can cause the wood to dent or even split. Therefore, it is highly recommended that you buy and fit a toe guard to reduce the risk of breakage.",
                "price": 1500,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            }
        ]
    }

    render(){

        const {products} = this.state;

        return(
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}