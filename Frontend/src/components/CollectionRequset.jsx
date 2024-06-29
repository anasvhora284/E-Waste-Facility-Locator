// src/components/CollectionRequest.js
import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/lab";

const CollectionRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    items: [],
    preferredDate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const items = checked
        ? [...prevData.items, value]
        : prevData.items.filter((item) => item !== value);
      return { ...prevData, items };
    });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, preferredDate: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/collection-requests", formData);
      alert("Request submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit request.");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        E-Waste Collection Request
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <Typography variant="h6" gutterBottom>
          Items to Dispose
        </Typography>
        <FormControlLabel
          control={
            <Checkbox value="Mobile Phones" onChange={handleCheckboxChange} />
          }
          label="Mobile Phones"
        />
        <FormControlLabel
          control={<Checkbox value="Laptops" onChange={handleCheckboxChange} />}
          label="Laptops"
        />
        <FormControlLabel
          control={
            <Checkbox value="Televisions" onChange={handleCheckboxChange} />
          }
          label="Televisions"
        />
        <FormControlLabel
          control={
            <Checkbox value="Batteries" onChange={handleCheckboxChange} />
          }
          label="Batteries"
        />
        <DatePicker
          label="Preferred Pickup Date"
          value={formData.preferredDate}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField {...params} fullWidth margin="normal" />
          )}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Request
        </Button>
      </form>
    </Box>
  );
};

export default CollectionRequest;
