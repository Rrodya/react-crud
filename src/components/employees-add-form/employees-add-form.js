import './employees-add-form.css'
import { Component } from 'react';

class EmployeeAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;
        if(name === '' || salary === ''){
            console.log('Введите значение');
            return 
        } 
        this.props.addItem(this.state.name, this.state.salary);
            
        this.setState({
            name: '',
            salary: ''
        })
        
    }

    render(){
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit = {this.onSubmit}>
                    <input type="text" 
                        className="form-control new-post-label" 
                        placeholder="Имя"
                        name="name"
                        value={name}
                        onChange = {this.onValueChange}/>
                    <input type="text" 
                        className="form-control new-post-label" 
                        placeholder="Зарпалата в $"
                        name="salary"
                        value={salary}
                        onChange = {this.onValueChange}/>
                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
} 

export default EmployeeAddForm;