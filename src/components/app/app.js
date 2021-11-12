import { Component } from 'react';
import nextId from 'react-id-generator';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';


class App extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            data: [
                {name: 'Rodion', salary: 8000, increase: false, star: false, id: 1},
                {name: 'John', salary: 5000, increase: false, star: false, id: 2},
                {name: 'Max', salary: 3000, increase: true, star: false, id: 3}
            ],
            term: '',
            onFilter: [
                {name: 'allEmployees'},
                {name: 'allIncrease'},
                {name: 'salaryMoreThousand'}
            ],
            filter: ''
            
        }
    }



    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    

    addItem = (name, salary) => {
        const id = nextId();
        const item = [{ name: name, salary: salary, increase: false, star: false, id: id }];

        this.setState(({data}) => {
            return{
                data: [...data, ...item]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                } 
                return item;
            })
        }))
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onSearch = (items, term) => {
        if(term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onFilter = (items, filter) => {
        
        if(filter === 'increase'){
            return items.filter(item => item.increase);
        } else if(filter === 'salary'){
            return items.filter(item => item.salary > 1000);
        } else {
            return items;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    changeSalary = (id, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, salary}
                }
                return item;
            })
        }))
        console.log(`id ${id} = ${salary}`);
    }
    // onToggleStar = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id){
    //                 return {...item, star: !item.star}
    //             } 
    //             return item;
    //         })
    //     }))
    // }

    render(){
        const {data, term, filter} = this.state;
        const employeesLength = this.state.data.length;
        const dataIncreaseLength = this.state.data.filter(item => item.increase === true).length;
        const visableData = this.onFilter(this.onSearch(data, term), filter);


        return (
            <div className="app">
                <AppInfo
                    employeesLength = { employeesLength }
                    dataIncreaseLength = { dataIncreaseLength }/>
                <div className = "search-panel">
                    <SearchPanel onUpdateSearch={ this.onUpdateSearch }/>
                    <AppFilter onUpdateFilter={ this.onUpdateFilter }/>
                </div>
                <EmployeesList 
                    data = { visableData }
                    onDelete = { this.deleteItem }
                    onToggleProp = { this.onToggleProp }
                    changeSalary ={ this.changeSalary }/>
                <EmployeeAddForm
                    addItem = { this.addItem }/>
            </div>
        )
    }

}

export default App;