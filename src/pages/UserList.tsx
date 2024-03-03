import {
  Avatar,
  Button,
  Card,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from ".././service";
import { getCardStyle } from "../theme";
import Intro from "../components/Intro";

const TableRowsLoader: React.FC<{ rowsNum: number }> = ({ rowsNum }) => {
  return [...Array(rowsNum)].map((_, index) => (
    <TableRow key={index}>
      <TableCell component="th" scope="row">
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
    </TableRow>
  ));
};

const UserList: React.FC = () => {
  const [page, setPage] = useState(0);
  const theme = useTheme();
  const mode = theme.palette.mode;
  const isLightMode = mode === "light";
  const navigate = useNavigate();

  const {
    data: users,
    isFetching,
    isLoading,
    isError,
  } = useGetUsersQuery(page, {
    skip: false,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching && !isError) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <>
    <Intro caption1="Await the thrill of retrieving random GitHub users via the GitHub API." caption2="Scroll to get more profiles!"/>
    <TableContainer
      component={Card}
      variant="outlined"
      sx={getCardStyle(isLightMode)}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Avatar</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">View More</TableCell>
          </TableRow>
        </TableHead>

        {!users && isLoading ? (
          <TableRowsLoader rowsNum={8} />
        ) : (
          <TableBody>
            {users?.map((user: any) => (
              <TableRow key={user.login}>
                <TableCell align="center">
                  <Avatar
                    alt={user.login}
                    src={user.avatar_url}
                    sx={{ margin: "auto" }}
                  />
                </TableCell>
                <TableCell align="center">{user.login}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      navigate(`/user/${user.login}`);
                    }}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      {isFetching && (
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{
            marginY: 5,
          }}
        >
          <LinearProgress />
        </Typography>
      )}
    </TableContainer>
    </>
  );
};

export default UserList;
