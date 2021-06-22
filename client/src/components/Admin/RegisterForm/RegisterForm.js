import React from "react";
import {Form, Input, Button, Checkbox, notification} from "antd";
import './RegisterForm.scss'
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export default function RegisterForm() {
    return (
        <Form className={'register-form'}>
            <Form.Item>
                <Input prefix={<UserOutlined style={{color: "rgba(0,0,0,.25)"}}/>} type={'email'} name={'email'}
                       placeholder={'Correo Electronico'} className={'register-form__input'}/>
            </Form.Item>
            <Form.Item>
                <Input prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>} type={'password'} name={'password'}
                       placeholder={'Contrasena'} className={'register-form__input'}/>
            </Form.Item>
            <Form.Item>
                <Input prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>} type={'password'}
                       name={'repeatPassword'} placeholder={'Repetir Contrasena'} className={'register-form__input'}/>
            </Form.Item>
            <Form.Item>
                <Checkbox name={'privacyPolicy'}>
                    He Leido y acepto las politicas de privacidad
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType={'submit'} className={'register-form__button'}>
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}