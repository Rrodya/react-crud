import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            salary: this.props.salary
        }
    }

    changeSalary = (e) => {
        const salary = e.target.value;
        this.setState({salary});
        console.log(this.state.salary);
        this.props.changeSalary(this.props.id, salary);
    }

    render(){
        const {name, onDelete, onToggleProp, increase, star} = this.props;
        let classNames = 'list-group-item d-flex justify-content-between';
        if(star){
            classNames += ' like';
        }

        if(increase){
            classNames += ' increase';
        }
        
        return (
            <li className={classNames}>
                <span onClick = {onToggleProp} className="list-group-item-label" data-toggle="star">{name}</span>
                <input type="text" 
                    className="list-group-item-input" 
                    defaultValue={this.state.salary}
                    // value={this.state.salary}
                    onChange={this.changeSalary}
                    />
                <div className="d-flex justify-content-center align-item-center">
                    <button onClick = {onToggleProp} className="btn-cookie btn-sm" type="button" data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button className="btn-trash btn-sm" type="button" onClick = { onDelete }>
                        <i className="fas fa-trash"></i>
                    </button>       
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
    
}

export default EmployeesListItem;