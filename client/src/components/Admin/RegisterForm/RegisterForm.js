import React, {useState} from "react";
import {Form, Input, Button, Checkbox, notification} from "antd";
import './RegisterForm.scss'
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {emailValidation, minLengthValidation} from '../../../utils/formValidation'
import {signUpApi} from "../../../api/user";

export default function RegisterForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    });

    const onFinish = async (values) => {
        setInputs({...values})
        await signUpApi(inputs)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const validateForm = {
        required: '${name} is required!',
        types: {
            email: '${name} is not a valid email!',
        },
    }

    return (
        <Form className={'register-form'}
              initialValues={{
                  privacyPolicy: false
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              validateMessages={validateForm}>
            <Form.Item name={'email'} rules={[{required: true, type: 'email',}]}>
                <Input prefix={<UserOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                       placeholder={'email'}
                       className={'register-form__input'}
                />
            </Form.Item>

            <Form.Item name={'password'} rules={[{required: true, min: 6}]}>
                <Input.Password prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                placeholder={'Password'}
                                className={'register-form__input'}/>
            </Form.Item>

            <Form.Item name={'repeatPassword'} rules={[{required: true}, ({getFieldValue}) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
            }),]}>

                <Input.Password prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                placeholder={'Repetir Contrasena'}
                                className={'register-form__input'}/>
            </Form.Item>

            <Form.Item name={'privacyPolicy'} valuePropName="checked" rules={[
                {
                    validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
            ]}>
                <Checkbox>He Leido y acepto las politicas de privacidad</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button htmlType={'submit'}
                        className={'register-form__button'}>
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}
