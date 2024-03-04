import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserDetailsQuery } from "../service";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Intro from "../components/Intro";
import { getIsLightMode } from "../store/themeSlice";
import { getCardStyle } from "../theme";

const NOT_APPLICABLE = "N/A";
const CARD_IMAGE_HEIGHT = 320;

const getValue = (value: unknown, fallBackValue = NOT_APPLICABLE) =>
  value || fallBackValue;

const UserDetailsLoading = () => {
  return (
    <>
      <Skeleton sx={{ height: CARD_IMAGE_HEIGHT }} variant="rectangular" />
      <CardContent>
        <Skeleton sx={{ mb: 2 }} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton sx={{ mb: 6 }} />
      </CardContent>
    </>
  );
};

const CardContentLabel: React.FC<{ header: string; value: string }> = ({
  header,
  value,
}) => (
  <Typography gutterBottom variant="body2" color="text.secondary">
    <strong>{header} : </strong>
    {value}
  </Typography>
);

const UserDetails: React.FC = () => {
  const { username = "" } = useParams<{ username: string }>();
  const { data, isLoading } = useGetUserDetailsQuery(username);
  const isLightMode = useSelector(getIsLightMode);
  const navigate = useNavigate();

  const user = data!;

  const { name, avatar_url, login } = user || {};
  const userNameSplit = name?.split(" ");
  const firstName = getValue(userNameSplit?.[0]) as string;
  const secondName = getValue(userNameSplit?.[1]) as string;
  const location = getValue(user?.location) as string;
  const company = getValue(user?.company) as string;

  return (
    <>
      <Intro caption1="View the selected 👤 user profile details" caption2="" />
      <Container
        sx={{
          ...getCardStyle(isLightMode),
          p: { xs: 0, sm: 2, md: 4 },
          pb: { xs: 0, sm: 1 },
          mb: 2,
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: { xs: "100%", sm: "70%", md: "50%" },
            margin: { xs: "0", sm: "auto" },
          }}
        >
          {!user && isLoading ? (
            <UserDetailsLoading />
          ) : (
            <>
              <CardMedia
                image={`${avatar_url}`}
                title={login}
                sx={{ height: CARD_IMAGE_HEIGHT }}
              />
              <CardContent>
                <Typography gutterBottom variant="h2" component="h2">
                  {login}
                </Typography>
                <CardContentLabel header="First Name" value={firstName} />
                <CardContentLabel header="Second Name" value={secondName} />
                <CardContentLabel header="Location" value={location} />
                <CardContentLabel header="Company" value={company} />
              </CardContent>
            </>
          )}
        </Card>
        <Button
          sx={{ m: 1, mb: { xs: 5, sm: 0 } }}
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
      </Container>
    </>
  );
};

export default UserDetails;
