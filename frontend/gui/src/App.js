import React, { Component } from "react";
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import MessageBox from './containers/MessageBox';

class App extends Component {
    render () {
        return (
            <div className="App">
                <CustomLayout>
                    <MessageBox/>
                </CustomLayout>
            </div>
        )
    }
}

export default App;