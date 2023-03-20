import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  IconButton,
} from "@mui/material";
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Slice/PostsSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PostModals from "../Modals/PostModals"

function Posts() {
  const { data, message } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData()).unwrap();
  }, [dispatch]);
  return (
    <>
      {message && <h2>{message}</h2>}
      <TableContainer component={Paper} sx={{ mt: 10 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Body</TableCell>
              <TableCell align="left">Edit</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((items) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {items.id}
                  </TableCell>
                  <TableCell align="left">
                    {items.title.substring(0, 20)}
                  </TableCell>
                  <TableCell align="left">
                    {items.body.substring(0, 20)}
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Posts;
