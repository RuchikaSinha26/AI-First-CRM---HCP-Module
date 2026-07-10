import { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";

const InteractionForm = () => {
  const form = useSelector((state) => state.interaction);

  useEffect(() => {
    console.log("========== FORM UPDATED ==========");
    console.log(JSON.stringify(form, null, 2));
    console.log("==================================");
  }, [form]);

  const saveInteraction = async () => {
    console.log("========== SAVING FORM ==========");
    console.log(JSON.stringify(form, null, 2));
    console.log("================================");

    try {
      const response = await fetch("http://127.0.0.1:8001/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      alert(data.message);

    } catch (error) {
      console.error(error);
      alert("Failed to save interaction");
    }
  };

  return (
    <Card elevation={3}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Interaction Details
        </Typography>

        <Stack spacing={2}>

          <TextField
            label="HCP Name"
            fullWidth
            value={form.hcpName || ""}
          />

          <TextField
            label="Hospital"
            fullWidth
            value={form.hospital || ""}
          />

          <TextField
            label="Interaction Date"
            type="date"
            fullWidth
            value={form.interactionDate || ""}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <TextField
            select
            label="Interaction Type"
            fullWidth
            value={form.interactionType || ""}
          >
            <MenuItem value="">Select Interaction Type</MenuItem>
            <MenuItem value="Visit">Visit</MenuItem>
            <MenuItem value="Call">Call</MenuItem>
            <MenuItem value="Online Meeting">
              Online Meeting
            </MenuItem>
          </TextField>

          <TextField
            label="Products Discussed"
            fullWidth
            value={form.productsDiscussed || ""}
          />

          <TextField
            label="Meeting Summary"
            multiline
            rows={4}
            fullWidth
            value={form.meetingSummary || ""}
          />

          <TextField
            label="Follow Up"
            fullWidth
            value={form.followUp || ""}
          />

          <Button
            variant="contained"
            onClick={saveInteraction}
          >
            Save Interaction
          </Button>

        </Stack>

      </CardContent>
    </Card>
  );
};

export default InteractionForm;