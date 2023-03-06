import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

// Define responsive styles for the cards
const CardContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    // Small devices (mobile phones)
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    // Larger devices (tablets and desktops)
    width: "33.33%",
    marginBottom: theme.spacing(3),
  },
}));

function App() {
  const [centimeter, setcentimeter] = useState(1);
  const [inch, setinch] = useState(0.303);
  const [foot, setfoot] = useState(0.0303);
  const [TaiCm, setTaiCm] = useState(3.03);

  const handleLengthChange = (number, unit) => {
    if (unit === "centimeter") {
      setcentimeter(number);
      setinch(number * 0.303);
      setfoot(number * 0.0303);
      setTaiCm(number * 3.3);
    } else if (unit === "inch") {
      setcentimeter(number * 3.03);
      setinch(number);
      setfoot(number * 0.1);
      setTaiCm(number * 10);
    } else if (unit === "foot") {
      setcentimeter(number * 30.3);
      setinch(number * 10);
      setfoot(number);
      setTaiCm(number * 100);
    } else if (unit === "TaiCm") {
      setcentimeter(number * 0.303);
      setinch(number * 0.1);
      setfoot(number * 0.01);
      setTaiCm(number);
    }
  };

  const [squareCm, setSquareCm] = useState(10000);
  const [squareMeter, setSquareMeter] = useState(1);
  const [chai, setChai] = useState(10.89);
  const [ping, setPing] = useState(0.3025);

  const handleAreaChange = (number, unit) => {
    if (unit === "squareCm") {
      setSquareCm(number);
      setSquareMeter(number * 0.0001);
      setChai(number / (30.3 * 30.3));
      setPing(number / (181.8 * 181.8));
    } else if (unit === "squareMeter") {
      setSquareCm(number * 10000);
      setSquareMeter(number);
      setChai((number * 10000) / (30.3 * 30.3));
      setPing((number * 10000) / (181.8 * 181.8));
    } else if (unit === "chai") {
      setSquareCm(number * (30.3 * 30.3));
      setSquareMeter((number * (30.3 * 30.3)) / 10000);
      setChai(number);
      setPing((number * (30.3 * 30.3)) / (181.8 * 181.8));
    } else if (unit === "ping") {
      setSquareCm(number * (181.8 * 181.8));
      setSquareMeter((number * (181.8 * 181.8)) / 10000);
      setChai((number * (181.8 * 181.8)) / (30.3 * 30.3));
      setPing(number);
    }
  };

  return (
    <Grid container spacing={3}>
      {/* Three cards on larger devices */}
      <CardContainer item xl={6}>
        <Card sx={{ backgroundColor: "#F5F5F5" }}>
          <CardContent>
            <Typography variant="h6">台製長度</Typography>
            <TextField
              label="公分"
              variant="standard"
              type="number"
              value={centimeter}
              onChange={(event) =>
                handleLengthChange(event.target.value, "centimeter")
              }
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            />
            <TextField
              label="台分"
              type="number"
              variant="standard"
              value={TaiCm}
              onChange={(event) =>
                handleLengthChange(event.target.value, "TaiCm")
              }
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
            <TextField
              label="台寸"
              variant="standard"
              type="number"
              value={inch}
              onChange={(event) =>
                handleLengthChange(event.target.value, "inch")
              }
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
            <TextField
              label="台尺"
              type="number"
              variant="standard"
              value={foot}
              onChange={(event) =>
                handleLengthChange(event.target.value, "foot")
              }
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
          </CardContent>
        </Card>
      </CardContainer>

      <CardContainer item xl={6}>
        <Card sx={{ backgroundColor: "#F5F5F5" }}>
          <CardContent>
            <Typography variant="h6">台製面積</Typography>
            <TextField
              label="平方公分"
              variant="standard"
              type="number"
              value={squareCm}
              onChange={(event) =>
                handleAreaChange(event.target.value, "squareCm")
              }
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            />
            <TextField
              label="平方公尺"
              type="number"
              variant="standard"
              value={squareMeter}
              onChange={(event) =>
                handleAreaChange(event.target.value, "squareMeter")
              }
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
            <TextField
              label="才"
              variant="standard"
              type="number"
              value={chai}
              onChange={(event) => handleAreaChange(event.target.value, "chai")}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
            <TextField
              label="坪"
              type="number"
              variant="standard"
              value={ping}
              onChange={(event) => handleAreaChange(event.target.value, "ping")}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
          </CardContent>
        </Card>
      </CardContainer>
      <CardContainer item xl={6}>
        <Card sx={{ backgroundColor: "transparent" }}>
          <CardContent>
            <Typography variant="h6">換算筆記</Typography>
            <TextField
            aria-readonly="true"
              label="坪數的換算法: "
              variant="standard"
              value="長度(台尺) x 寬度(台尺) 除以36 = 坪數"
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "100%", marginBottom: 1 }}
            />
            <TextField
              label="才數的換算法:"
              variant="standard"
              value="長度(公分) x 寬度(公分) 除以900 = 才數"
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
            <TextField
              label="平方公尺轉換坪數:"
              variant="standard"
              value="平方公尺 x 0.3025 = 坪數"
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
          </CardContent>
        </Card>
      </CardContainer>
      {/* One card on smaller devices */}
      {/* <CardContainer item xs={12}>
        <Card sx={{ backgroundColor: "#F5F5F5" }}>

        <CardContent>
            <Typography variant="h6">台製長度</Typography>
            <TextField
              label="公分"
              variant="standard"
              type="number"
              value={centimeter}
              onChange={handleLengthChange(centimeter,"centimeter")}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            />
            <TextField
              label="寸"
              variant="standard"
              type="number"
              value={inch}
              onChange={handleLengthChange(inch,"inch")}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
            <TextField
              select
              label="尺"
              variant="standard"
              value={foot}
              onChange={handleLengthChange(foot,"foot")}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: 0 }}
              sx={{ width: "100%", marginBottom: 1 }}
            ></TextField>
          </CardContent>
        </Card>
      </CardContainer> */}
    </Grid>
  );
}
export default App;
