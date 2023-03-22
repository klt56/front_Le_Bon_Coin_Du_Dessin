import { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`https://starfish-app-3xk6j.ondigitalocean.app/users/`, {
        user: {
          first_name: firstName,
          email: email,
          password: password,
        },
      });
      setIsOpen(true);
      setFirstName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="form-section">
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit">Sign Up</Button>
            <Modal isOpen={isOpen} onClose={handleClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Success</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Vous êtes connecté avec succès!
                </ModalBody>
              </ModalContent>
            </Modal>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
