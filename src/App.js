import React from 'react';
import './App.css';
import KanbanBoardContainer from './KanbanBoardContainer';
/*
let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        color: '#BD8D31',
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        color: '#3A7E28',
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContacList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
];
*/
class App extends React.Component {
    render() {
        return (
            <KanbanBoardContainer />
        );
    }
}

export default App;
