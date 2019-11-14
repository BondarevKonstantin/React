import React, { Component } from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

    avId = 100;

    state = {
        todoData: [
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("Make Awesome App"),
            this.createTodoItem("Have a lunch"),
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.avId++
        }
    }

    deleteItem = (id) => {

        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(( {todoData} ) => {
            const newArray = [
                ...todoData,
                newItem
            ];

            return{
                todoData: newArray
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };



    sortItems = (value) => {
        this.setState(({ term }) => {
            return {
                term: value
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase()
            .indexOf(term.toLowerCase()) > -1;
        });
    }

    render () {

        const { todoData, term } = this.state;

        const visibleItems = this.search(todoData, term);

        const doneCount = todoData
                            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onChanged = { this.sortItems }/>
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={ visibleItems }
                    onDeleted = { this.deleteItem }
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone} />
                <ItemAddForm
                    onAdded = { this.addItem }/>
            </div>
        );
    };
};
