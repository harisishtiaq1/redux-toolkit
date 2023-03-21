import { React, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Typography, Box, Paper, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updatePost } from "../Slice/EditSlice";
import { toast } from "react-hot-toast";
import { getData } from "../Slice/PostsSlice";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "white",
  backgroundColor: "black",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
function DashboardModal({ openModal, closeModal, data }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${data}`)
      .then((response) => {
        setShowData(response.data);
      });
  }, []);
  useEffect(() => {
    if (showData !== null) setTitle(showData?.title);
  }, [showData]);
  useEffect(() => {
    if (showData !== null) setBody(showData?.body);
  }, [showData]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = { title, body };
    console.log("title", title);
    console.log("body", body);
    dispatch(updatePost({ id: data.id, postData }));
    if (postData) {
      return toast.success("Data Updated");
    }
    if (!title) {
      return toast.error("Title is required");
    }
    if (!body) {
      return toast.error("Body is required");
    }
  };
  return (
    <Paper
      sx={{
        background: "background.default",
        backgroundColor: "backgroundColor.default",
      }}
    >
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit
            </Typography>
            <TextField
              required
              sx={{
                backgroundColor: "white",
                mt: 3,
                borderRadius: "10px",
                width: "300px",
              }}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></TextField>
            <TextField
              required
              sx={{
                backgroundColor: "white",
                mt: 3,
                borderRadius: "10px",
                width: "300px",
              }}
              value={body}
              onChange={(event) => setBody(event.target.value)}
            ></TextField>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "blueviolet",
                "&:hover": {
                  backgroundColor: "blueviolet",
                },
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Modal>
    </Paper>
  );
}

export default DashboardModal;
