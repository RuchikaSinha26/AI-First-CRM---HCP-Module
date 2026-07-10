import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInteraction,
  resetInteraction,
} from "../../redux/slices/interactionSlice";

import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const AIChat = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.interaction);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chatMessages]);

  const clearChat = () => {
    setChatMessages([]);
    dispatch(resetInteraction());
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setChatMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          hcpName: form.hcpName,
          hospital: form.hospital,
          interactionDate: form.interactionDate,
          interactionType: form.interactionType,
          productsDiscussed: form.productsDiscussed,
          meetingSummary: form.meetingSummary,
          followUp: form.followUp,
        }),
      });

      if (!response.ok) {
        throw new Error("Backend Error");
      }

      const data = await response.json();

      console.log("========== AI DATA ==========");
      console.log(JSON.stringify(data, null, 2));
      console.log("=============================");

      dispatch(updateInteraction(data));

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text:
            data.response ||
            "✅ Interaction recorded successfully.",
          data,
        },
      ]);
    } catch (error) {
      console.error(error);

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Failed to connect with backend.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <Card elevation={3} sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          AI Assistant
        </Typography>

        <Box
          sx={{
            height: 400,
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: 2,
            p: 2,
            background: "#fafafa",
            mb: 2,
          }}
        >
          {chatMessages.length === 0 && (
            <Typography color="text.secondary">
              👋 Hello! Describe your interaction with an HCP.
            </Typography>
          )}

          {chatMessages.map((chat, index) => (
            <Box
  key={index}
  sx={{
    display: "flex",
    justifyContent:
      chat.sender === "user"
        ? "flex-end"
        : "flex-start",
    mb: 2,
  }}
>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  maxWidth: "80%",
                  backgroundColor:
                    chat.sender === "user"
                      ? "#1976d2"
                      : "#ffffff",
                  color:
                    chat.sender === "user"
                      ? "#fff"
                      : "#000",
                }}
              >
                <Typography fontWeight="bold" mb={1}>
                  {chat.sender === "user"
                    ? "👤 You"
                    : "🤖 AI"}
                </Typography>

                <Typography>{chat.text}</Typography>

                {chat.data && (
                  <Box mt={2}>
                    <Typography variant="body2">
                      <b>Doctor:</b> {chat.data.hcpName}
                    </Typography>

                    <Typography variant="body2">
                      <b>Hospital:</b> {chat.data.hospital}
                    </Typography>

                    <Typography variant="body2">
                      <b>Date:</b> {chat.data.interactionDate}
                    </Typography>

                    <Typography variant="body2">
                      <b>Interaction:</b>{" "}
                      {chat.data.interactionType}
                    </Typography>

                    <Typography variant="body2">
                      <b>Product:</b>{" "}
                      {chat.data.productsDiscussed}
                    </Typography>

                    <Typography variant="body2">
                      <b>Summary:</b>{" "}
                      {chat.data.meetingSummary}
                    </Typography>

                    <Typography variant="body2">
                      <b>Follow Up:</b>{" "}
                      {chat.data.followUp}
                    </Typography>
                  </Box>
                )}
              </Paper>
            </Box>
          ))}

          {loading && (
            <Typography color="primary">
              🤖 AI is thinking...
            </Typography>
          )}

          <div ref={bottomRef}></div>
        </Box>

        <TextField
          fullWidth
          multiline
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Example: Today I met Dr. John at Apollo Hospital. We discussed CardioX. Follow up next Monday."
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "Processing..." : "Send"}
        </Button>

        <Button
          fullWidth
          color="error"
          variant="outlined"
          sx={{ mt: 1 }}
          onClick={clearChat}
        >
          Clear Chat
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIChat;