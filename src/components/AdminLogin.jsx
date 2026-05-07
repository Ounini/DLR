import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Card, Container, Form } from "react-bootstrap";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      navigate("/admin/upload");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        className="shadow border-0 rounded-4 p-4"
        style={{ width: "420px" }}
      >
        <h3 className="text-center mb-4">Admin Login</h3>

        <Form onSubmit={login}>
          <Form.Control
            className="mb-3"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Control
            className="mb-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" className="w-100" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AdminLogin;
