import React from "react";
import Modal from "@mui/material/Modal";
import {
  Typography,
  Box,
  Paper,
  TextField,
} from "@mui/material";

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
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column'
};
function DashboardModal({openModal,closeModal}) {

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
          <TextField required  label="Edit-Title" sx={{
            backgroundColor:'white',
            mt:3,
            borderRadius:'10px',
            
          }}>

          </TextField>
          <TextField required  label="Edit-Title" sx={{
            backgroundColor:'white',
            mt:3,
            borderRadius:'10px',
            
          }}>

          </TextField>
        </Box>
      </Modal>
    </Paper>
  );
}

export default DashboardModal;
