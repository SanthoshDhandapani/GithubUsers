import Box from "@mui/material/Box";
import { alpha } from "@mui/material";
import { brand, gray } from "../theme";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box
    id="hero"
    sx={(theme) => ({
      width: "100%",
      backgroundImage:
        theme.palette.mode === "light"
          ? `linear-gradient(180deg, ${brand[200]}, #FFF)`
          : `linear-gradient(${brand[800]}, ${alpha(gray[900], 0.0)})`,
      backgroundSize: "100% 10%",
      backgroundRepeat: "no-repeat",
    })}
  >
    {children}
  </Box>
);

export default Layout;
