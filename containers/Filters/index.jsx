import React, {useState} from "react";
import { Card, Divider, Grid, Slider } from "@mui/material";
import { Box, width } from "@mui/system";
import { FiSliders } from "react-icons/fi";
import { currencyFormatter } from "utilities";

const Filters = (props) => {
  const [priceRangeValue, setPriceRangeValue] = useState([0, 100]);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRangeValue(newValue);
  };

  return (
    <Card sx={{ padding: "1rem" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <FiSliders size={15} />
        <p>Filters</p>
      </Box>
      <Divider />
      <h5>Price Range</h5>
      <Slider
        getAriaLabel={() => "Price range"}
        valueLabelDisplay="auto"
        value={priceRangeValue}
        onChange={handlePriceRangeChange}
        size="small"
      />
      <h6>
        {currencyFormatter(0, "NGN")} - {currencyFormatter(300000, "NGN")}
      </h6>
      <Box>
        <p>Top Products</p>
        <p>Latest Products</p>
      </Box>
      <Box>
        <h5>Categories</h5>
        <p>Mobile Phones and Accesories</p>
        <p>Kids</p>
        <p>Beauty</p>
        <p>Fashion</p>
        <p>Household</p>
        <p>Sports and Fitness</p>
        <p>Toys</p>
        <p>Electronics</p>
      </Box>
      <Box>
        <h5>Brands</h5>
        <p>Nike</p>
        <p>Adidas</p>
        <p>Puma</p>
        <p>Generic</p>
        <p>Samsung</p>
        <p>Apple</p>
      </Box>
    </Card>
  );
};

export default Filters;
