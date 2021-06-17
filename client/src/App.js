import "./App.scss"

import {DatePicker, Space} from 'antd';


function App() {
    const test = (date) => {
        console.log(date)
    }
    return (
        <div className="app">
            <Space direction="vertical">
                <DatePicker onChange={date => test(date)}/>
            </Space>,
        </div>
    );
}

export default App;
