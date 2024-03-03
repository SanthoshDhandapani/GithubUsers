import GitHubIcon from "@mui/icons-material/GitHub";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMode, getIsLightMode, toggleTheme } from "../store/themeSlice";

function AppNavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector(getMode);
  const lightMode = useSelector(getIsLightMode);
  const toggleMode = useCallback(
    () => dispatch(toggleTheme()),
    [dispatch, toggleTheme]
  );
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={() => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: lightMode
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: lightMode
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <Box sx={{ display: { xs: "flex" } }}>
                <MenuItem
                  sx={{ py: "6px", px: "12px" }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/");
                  }}
                >
                  <GitHubIcon fontSize="large" />
                  <Typography
                    sx={{ mx: "12px" }}
                    variant="h6"
                    color="text.primary"
                  >
                    Github Users
                  </Typography>
                </MenuItem>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <MenuItem onClick={toggleMode}>
                {!lightMode ? (
                  <WbSunnyRoundedIcon fontSize="small" />
                ) : (
                  <ModeNightRoundedIcon fontSize="small" />
                )}
                <Typography
                  sx={{ mx: "12px", textTransform: "capitalize" }}
                  variant="body1"
                  color="text.primary"
                >
                  {mode}
                </Typography>
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppNavBar;
