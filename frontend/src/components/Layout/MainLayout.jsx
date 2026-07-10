import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f4f6f8",
        padding: "20px",
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;