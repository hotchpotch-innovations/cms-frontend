import DashboardDrawer from "@/components/dashboard/dashboardDrawer/DashboardDrawer";
import { Box } from "@mui/material";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardDrawer>
      {" "}
      <Box
        sx={{
          width: "90%",
          mx: "auto",
        }}
      >
        {children}
      </Box>
    </DashboardDrawer>
  );
};

export default DashboardLayout;
