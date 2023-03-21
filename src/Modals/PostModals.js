import { React, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Typography, Box, Paper, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updatePost } from "../Slice/EditSlice";
import { toast } from "react-hot-toast";
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
  console.log("data", data);
  const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState(data.body);
  const dispatch = useDispatch();
  const [showData, setShowData] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${data}`)
      .then((response) => {
        setShowData(response.data);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = { title, body };
    dispatch(updatePost({ id: data.id, postData }));
    console.log({ postData });
    if (postData) {
      return toast.success("Data Updated");
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
              width:'300px'
            }}
            value={showData?.title.substring(0,15)}
            onChange={(event) => setTitle(event.target.value)}
          >
          </TextField>
          <TextField
            required
            sx={{
              backgroundColor: "white",
              mt: 3,
              borderRadius: "10px",
              width:'300px'
            }}
            value={showData?.body.substring(0,20)}
            onChange={(event) => setBody(event.target.value)}
          >
          </TextField>
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
      </Modal>
    </Paper>
  );
}

export default DashboardModal;
