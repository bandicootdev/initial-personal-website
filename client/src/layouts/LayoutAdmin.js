import React, {useState} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {Layout} from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";

import './LayoutAdmin.scss';
import {Content, Footer, Header} from "antd/es/layout/layout";
import SignIn from "../pages/Admin/SignIn/SignIn";

export default function LayoutAdmin(props) {
    const {routes} = props;
    const [menuCollapse, setMenuCollapse] = useState(false);
    const user = null;

    if (!user) {
        return (
            <>
                <Route path={'/admin/login'} component={SignIn}/>
                <Redirect to={'/admin/login'}/>
            </>
        )
    }
    return (
        <Layout>
            <MenuSider menuCollapse={menuCollapse}/>
            <Layout className={'layout-admin'} style={{marginLeft: menuCollapse ? '80px' : '200px'}}>
                <Header className={'layout-admin__header'}>
                    <MenuTop menuCollapse={menuCollapse} setMenuCollapse={setMenuCollapse}/>
                </Header>
                <Content className={'layout-admin__content'}>
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer className={'layout-admin__footer'}>
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
