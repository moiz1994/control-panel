import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      if (data.success) {
        localStorage.setItem("auth", true);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 px-3">
      <Card
        className="p-3 w-100 mb-2"
        style={{ maxWidth: "530px", maxHeight: "496px" }}
      >
        <Card.Body>
          <div className="text-center">
            <img
              src="/images/cp_logo.png"
              alt="Logo"
              className="img-fluid mb-4"
              style={{ maxWidth: "250px" }}
            />
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </Form.Group>

            <Button type="submit" size="lg" className="w-100 btn-purple">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
