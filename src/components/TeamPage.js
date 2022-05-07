import React from "react";
import MTable from "./MTable";
import "./css/Main.css";
import HeaderMain from "./HeaderMain";
import MainSidebar from "./MainSidebar";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
} from "@material-ui/core";
import { AccountCircle, Add } from "@material-ui/icons";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TeamPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <HeaderMain />
      <div className="appBody">
        <MainSidebar />
        <Button
          onClick={handleOpen}
          style={{ height: "50px" }}
          variant="outlined"
          startIcon={<Add />}
        >
          Add Team Member
        </Button>
        <MTable />

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                  With a start adornment
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default TeamPage;
