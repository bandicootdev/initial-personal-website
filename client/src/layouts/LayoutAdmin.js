import React from "react";
import {Route, Switch} from 'react-router-dom';
import {Layout} from "antd";

import './LayoutAdmin.scss';
import {Content, Footer, Header} from "antd/es/layout/layout";

export default function LayoutAdmin(props) {
    const {routes} = props;
    console.log(props)
    return (
        <Layout>
            <h2>Menu Side</h2>
            <Layout>
                <Header>
                    Header
                </Header>
                <Content>
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer>
                    Footer
                </Footer>
            </Layout>

        </Layout>
    )
}

function LoadRoutes({routes}) {
    return (<Switch>
            {
                routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))
            }
        </Switch>
    )

}
