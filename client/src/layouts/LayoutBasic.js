import React from "react";
import {Route, Switch} from 'react-router-dom'
import {Layout} from "antd";
import {Content, Footer} from "antd/es/layout/layout";

import './LayoutBasic.scss';


export default function LayoutBasic(props) {
    const {routes} = props;
    return (
        <Layout>
            <h2>Menu Side</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer>
                    ay no
                </Footer>
            </Layout>
        </Layout>
    )
}

function LoadRoutes({routes}) {
    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
                ))
            }
        </Switch>
    )
}
