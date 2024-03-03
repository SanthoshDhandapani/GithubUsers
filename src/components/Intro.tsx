import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getIsLightMode } from "../store/themeSlice";

type IntroProps = {
  caption1: string;
  caption2: string;
};

export default function Intro({ caption1, caption2 }: IntroProps) {
  const isLightMode = useSelector(getIsLightMode);
  const headerStyle = useMemo(
    () => ({
      color: isLightMode ? "primary.main" : "primary.light",
    }),
    [isLightMode]
  );
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 14, sm: 14 },
        pb: { xs: 6, sm: 6 },
      }}
    >
      <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
        <Typography
          component="h3"
          variant="h3"
          textAlign={"center"}
          alignSelf={"center"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          Explore&nbsp;
          <Typography component="span" variant="h3" sx={headerStyle}>
            GitHub Space
          </Typography>
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary">
          {caption1}
          <br />
          {caption2}
        </Typography>
      </Stack>
    </Container>
  );
}
