import Box from "@mui/material/Box";
import { alpha } from "@mui/material";
import { brand, gray } from "../theme";
import { useSelector } from "react-redux";
import { getIsLightMode } from "../store/themeSlice";

const Layout = ({ children }: React.PropsWithChildren) => {
  const isLightMode = useSelector(getIsLightMode);
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        backgroundImage: isLightMode
          ? `linear-gradient(180deg, ${brand[200]}, #FFF)`
          : `linear-gradient(${brand[800]}, ${alpha(gray[900], 0.0)})`,
        backgroundSize: `100% ${isLightMode ? "6%" : "8%"}`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
