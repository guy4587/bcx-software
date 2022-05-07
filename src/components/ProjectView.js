import faker from "@faker-js/faker";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
  Modal,
  Box,
  TextField,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import "./css/ProjectView.css";
import { Add, Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

let USERS = [],
  STATUSES = ["Active", "On Bench", "On Leave"];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
    company: faker.company.companyName(),
    joinDate: faker.date.past().toLocaleDateString("en-US"),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

let tasks = [
  {
    id: 1,
    name: "Create Login Button",
    project: "User Interface",
    startDate: "12/02/2022",
    endDate: "15/05/2022",
    projectStatus: "In Progress",
    taskStatus: "Done",
  },
  {
    id: 2,
    name: "User Profile",
    project: "User Interface",
    startDate: "12/02/2022",
    endDate: "15/05/2022",
    projectStatus: "Pending",
    taskStatus: "Pending",
  },
  {
    id: 3,
    name: "Sprint 3",
    project: "Project Management System",
    startDate: "25/04/2022",
    endDate: "6/05/2022",
    projectStatus: "In Progress",
    taskStatus: "In Progress",
  },
];

let projects = [
  { name: "User Interface", id: 1 },
  { name: "Project Management System", id: 2 },
  { name: "Banking App", id: 3 },
  { name: "School Management System", id: 4 },
];

function ProjectView() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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

  const [project, setProject] = React.useState("");

  const handleChange = (event) => {
    setProject(event.target.value);
  };

  return (
    <div>
      <div className="summary">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  Ongoing Tasks
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Ongoing Projects
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Grid container>
                    <Grid item lg={10}>
                      <Typography className={classes.name}>
                        {tasks.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell>
                  <Grid container>
                    <Grid item lg={10}>
                      <Typography className={classes.name}>
                        {projects.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={handleOpenModal} variant="contained" color="success" endIcon={<Add />}>
          Add Task
        </Button>

        <Modal
          className="addTask"
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="addTaskModal">
            <TextField className="modalItem"
              id="task-name"
              defaultValue=""
              helperText="Enter Task Name"
            />
            <TextField className="modalItem"
              id="outlined-select-currency"
              select
              value={project}
              onChange={handleChange}
              helperText="Please select project"
            >
              {projects.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField className="modalItem"
              id="date"
              label="Start Date"
              type="date"
              defaultValue="2022-01-01"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField className="modalItem"
              id="date"
              label="End Date"
              type="date"
              defaultValue="2022-01-01"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField className="modalItem"
              id="project-progress"
              select
              value={project}
              onChange={handleChange}
              helperText="Project Progress"
            >
              <MenuItem >
                  Pending
                </MenuItem>
                <MenuItem >
                  In Progress
                </MenuItem>
                <MenuItem >
                  Done
                </MenuItem>
            </TextField>
            <TextField className="modalItem"
              id="task-progress"
              select
              value={project}
              onChange={handleChange}
              helperText="Task Progress"
            >
                <MenuItem >
                  Pending
                </MenuItem>
                <MenuItem >
                  In Progress
                </MenuItem>
                <MenuItem >
                  Done
                </MenuItem>
            </TextField>
            <Button variant="outlined" color="success" endIcon={<Send />}>
        Submit
      </Button>

          </div>
        </Modal>
      </div>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Task</TableCell>
              <TableCell className={classes.tableHeaderCell}>Project</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Start Date
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                End Date
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Project Status
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Task Status
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={10}>
                        <Typography className={classes.name}>
                          {row.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.project}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                  <TableCell>
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor:
                          (row.projectStatus === "Pending" && "gray") ||
                          (row.projectStatus === "In Progress" && "blue") ||
                          (row.projectStatus === "Done" && "green"),
                      }}
                    >
                      {row.projectStatus}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor:
                          (row.taskStatus === "Pending" && "gray") ||
                          (row.taskStatus === "In Progress" && "blue") ||
                          (row.taskStatus === "Done" && "green"),
                      }}
                    >
                      {row.taskStatus}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      Options
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Edit Task</MenuItem>
                      <MenuItem onClick={handleClose}>View Project</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          {/*<TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter>*/}
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProjectView;
