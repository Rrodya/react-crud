

import './app-info.css';

const AppInfo = (props) => {

    const {dataIncreaseLength, employeesLength} = props;
    

    return(
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesLength}</h2>
            <h3>Премию получат: {dataIncreaseLength}</h3>
        </div>
    )
};

export default AppInfo;