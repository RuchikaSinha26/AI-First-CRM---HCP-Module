import InteractionForm from "../components/Form/InteractionForm";
import AIChat from "../components/Chat/AIChat";
import DashboardCards from "../components/DashboardCards";

import {
  Grid,
  Typography,
} from "@mui/material";

import MainLayout from "../components/Layout/MainLayout";

const CRMPage = () => {
  return (
    <MainLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        AI First CRM - HCP Module
      </Typography>

      {/* Dashboard Cards */}
      <DashboardCards />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <InteractionForm />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <AIChat />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default CRMPage;