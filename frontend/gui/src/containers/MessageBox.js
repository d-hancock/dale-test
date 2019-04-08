import React from 'react';
import axios from 'axios';
import '../App.css';
import {Card} from 'antd';
import MessageDisplay from '../components/MessageDisplay';
import {Button} from 'antd';
import {Row, Col} from 'antd';

const gridStyle = {
    width: '100%',
    textAlign: 'center',
};

class MessageBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        };
    }

    fetchMessage = () => {
        axios.get("http://127.0.0.1:8000/api/last-message/")
            .then(result => this.setState({
                message: result.data.message
            }));

    };

    render() {
        return <div style={{background: '#ECECEC', padding: '30px'}}>
            <Row type="flex" justify="center">
                <Col xs={24} sm={20} md={18} lg={12} xl={10}>
                    <Card title="Card title" bordered={false}>
                        <Card.Grid style={gridStyle}>
                            <div>
                                <MessageDisplay message={this.state.message}/>
                            </div>
                            <div>
                                <Row type="flex" justify="center">
                                    <Col xs={24} sm={20} md={18} lg={12} xl={10}>
                                        <Button onClick={this.fetchMessage} type="primary">
                                            Click For Message
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Grid>
                    </Card>
                </Col>
            </Row>
        </div>
    }
}

export default MessageBox;

