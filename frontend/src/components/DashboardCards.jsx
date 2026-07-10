import { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const DashboardCards = () => {
  const [stats, setStats] = useState({
    doctors: 0,
    interactions: 0,
    followups: 0,
    products: 0,
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8001/dashboard");
        const data = await response.json();

        console.log("Dashboard API:", data);

        setStats(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    };

    loadDashboard();
  }, []);

  const cards = [
    { title: "Doctors", value: stats.doctors },
    { title: "Interactions", value: stats.interactions },
    { title: "Follow Ups", value: stats.followups },
    { title: "Products", value: stats.products },
  ];

  return (
    <Grid container spacing={2} mb={3}>
      {cards.map((card) => (
        <Grid
          key={card.title}
          size={{ xs: 12, sm: 6, md: 3 }}
        >
          <Card elevation={3}>
            <CardContent>
              <Typography color="text.secondary">
                {card.title}
              </Typography>

              <Typography variant="h4" fontWeight="bold">
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCards;