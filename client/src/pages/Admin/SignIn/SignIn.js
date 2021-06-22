import React from "react";
import {Layout, Tabs} from "antd";
import LOGO
    from '../../../assets/img/png/png-transparent-logo-cuisine-font-brand-product-crash-bandicoot-mutant-island-text-crash-bandicoot-n-sane-trilogy-logo.png'
import './SignIn.scss';
import RegisterForm from "../../../components/Admin/RegisterForm";

export default function SignIn() {
    const {Content} = Layout;
    const {TabPane} = Tabs;
    return (
        <Layout className={'sign-in'}>
            <Content className={'sign-in__content'}>
                <h1 className={'sign-in__content-logo'}>
                    <img src={LOGO} alt="logo crash"/>
                </h1>
                <div className={'sign-in__content-tabs'}>
                    <Tabs type={'card'}>
                        <TabPane tab={<span>Entrar</span>} key={'1'}>
                            Componente de loginForm
                        </TabPane>
                        <TabPane tab={<span>Nuevo Usuario</span>} key={'2'}>
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
}
