import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import auth from "../../components/service/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const defaultTheme = createTheme();

export default function SignIn() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.sign_in(form);
      if (result.status === 200) {
        navigate("/main");
        toast.success("Hush kelibsiz");
      }
    } catch (error) {
      toast.error("emailingiz yoki parolingiz xato, qaytadan urunib ko'ring");
    }

    e.target.reset();
  };

  const handleClick = () => {
    navigate("/sign-up");
  };

  const handlePassword = () => {
    navigate("/forgot-password");
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <div className="flex justify-between">
              <h4
                onClick={handleClick}
                className="text-left cursor-pointer text-[#4400ff]
              text-xl"
              >
                Register
              </h4>

              <h4
                className="hover:underline hover:cursor-pointer"
                onClick={handlePassword}
              >
                Forgot Password
              </h4>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
