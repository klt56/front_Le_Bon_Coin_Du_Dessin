import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

function AddArt({ userId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3000/posts`, {
        title,
        description,
        artist,
        image,
        category,
      });
      alert("Oeuvre d'art ajoutée avec succès!");
      setTitle("");
      setDescription("");
      setArtist("");
      setImage("");
      setCategory("");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen}> Ajouter +</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent className="add-artwork">
          <ModalHeader>Ajouter une oeuvre d'art</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <label>
                Titre:
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                />
              </label>
              <label>
                Description:
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                ></textarea>
              </label>
              <label>
                Artiste:
                <input
                  type="text"
                  value={artist}
                  onChange={(event) => setArtist(event.target.value)}
                  required
                />
              </label>
              <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image"
               />
             <label>
                Catégorie:
                <input
                  type="text"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  required
                />
              </label>
              <Button type="submit">Ajouter</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddArt;
