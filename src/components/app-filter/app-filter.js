import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props){
        super(props);

        this.state = {
            filter: ''
        }
    }


    render(){
        const {onUpdateFilter} = this.props;

        return (
            <div className="brn-group">
                <button className="btn btn-light" type="button" onClick={() => onUpdateFilter('all')}>
                    Все сотрудники
                </button>
                <button className="btn btn-outline-light" type="button" onClick={() => onUpdateFilter('increase')}>
                    На повышение
                </button>
                <button className="btn btn-outline-light" type="button" onClick={() => onUpdateFilter('salary')}>
                    З/П больше 1000$
                </button>
            </div>
        );
    }
};

export default AppFilter;