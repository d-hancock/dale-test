import React from 'react';
import {Layout} from 'antd';

const {
    Header, Content,
} = Layout;
const CustomLayout = (props) => {
    return (
        <div>

            <Layout className="layout">
                <Header/>
                <Content>
                    <div>
                        {props.children}
                    </div>
                </Content>
            </Layout>

        </div>
    );
}

export default CustomLayout;