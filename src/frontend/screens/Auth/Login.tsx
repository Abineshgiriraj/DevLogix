import { LoadingOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input, Spin, Typography } from "antd";
import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMessageApi } from "../../context/MessageProvider";
import { COLORS } from "../../utils/Colors";
import { saveToLocalStorage, clearLocalStorage } from "../../utils/helper";
import { CardWrapper, Container, FormContainer } from "./AuthStyles";
import api from "../../utils/axiosConfig";

const { Title } = Typography;

type ValuesType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const AuthScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const messageApi = useMessageApi();
  const [loading, setLoading] = useState(false);

  // Clear any existing invalid tokens on mount
  useEffect(() => {
    clearLocalStorage();
  }, []);

  const onFinish = (values: ValuesType) => {
    const { name, email, password, confirmPassword } = values;
    if (isLogin) {
      loginHandler(email, password);
    } else {
      signupHandler(name!, email, password, confirmPassword!);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await api.post("/users/login", {
        email,
        password,
      });
      
      const { token, user } = response.data;
      const expirationTime = Date.now() + 1000 * 60 * 60 * 24; // 24 hours

      // Save token data
      saveToLocalStorage(
        "tokenData",
        JSON.stringify({
          token,
          expiry: expirationTime,
        })
      );

      // Save user data
      saveToLocalStorage("userData", JSON.stringify(user));

      // Navigate and show success message
      navigate("/");
      openNotification("success", "Login successful");
    } catch (error: any) {
      console.error(error);
      if (error?.response?.status === 429) {
        openNotification(
          "warning",
          "Server is busy. Please wait a moment and try again."
        );
      } else if (error instanceof AxiosError) {
        openNotification(
          "error",
          error.response?.data?.message || "Invalid email or password"
        );
      } else {
        openNotification("error", error.message || "An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const signupHandler = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      setLoading(true);
      if (password !== confirmPassword) {
        openNotification("error", "Password and confirm password do not match");
        return;
      }

      const response = await api.post("/users/signup", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        openNotification(
          "success",
          "Signup successful, please login to continue"
        );
        setIsLogin(true);
        form.resetFields();
      }
    } catch (error: any) {
      console.error(error);
      if (error?.response?.status === 429) {
        openNotification(
          "warning",
          "Server is busy. Please wait a moment and try again."
        );
      } else if (error instanceof AxiosError) {
        openNotification(
          "error",
          error.response?.data?.message || "Signup failed"
        );
      } else {
        openNotification("error", error.message || "An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const openNotification = (type: "success" | "error" | "warning", content: string) => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <Container>
      <CardWrapper>
        <FormContainer>
          <Title
            style={{
              color: COLORS.Secondary,
            }}
            level={2}
          >
            {isLogin ? "Login" : "Signup"}
          </Title>
          <Form
            form={form}
            name="authForm"
            layout="vertical"
            onFinish={onFinish}
          >
            {!isLogin && (
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input type="text" placeholder="Enter your name" />
              </Form.Item>
            )}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {!isLogin && (
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[{ required: true, message: "Please confirm your password!" }]}
              >
                <Input.Password placeholder="Confirm your password" />
              </Form.Item>
            )}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
                disabled={loading}
              >
                {loading ? (
                  <Spin
                    indicator={<LoadingOutlined spin />}
                    style={{ color: "#fff" }}
                  />
                ) : isLogin ? (
                  "Login"
                ) : (
                  "Signup"
                )}
              </Button>
            </Form.Item>
          </Form>
          <Button
            className="signup-link"
            type="link"
            onClick={() => {
              setIsLogin(!isLogin);
              form.resetFields();
            }}
            disabled={loading}
          >
            {isLogin
              ? "Don't have an account? Signup"
              : "Already have an account? Login"}
          </Button>
          {isLogin && (
            <Button
              className="signup-link"
              type="link"
              onClick={() => {
                form.setFieldsValue({
                  email: "johndoe@gmail.com",
                  password: "john@719",
                });
              }}
              disabled={loading}
            >
              Fill Test Credentials
            </Button>
          )}
          <div className="cold-info" style={{ marginTop: '20px' }}>
            <Alert
              message="Please note: The app is initializing and may take a few extra seconds to load on first login due to server cold start. If you receive a 'Server is busy' message, please wait a moment and try again."
              type="warning"
              closable
              showIcon
            />
          </div>
        </FormContainer>
      </CardWrapper>
    </Container>
  );
};

export default AuthScreen;
