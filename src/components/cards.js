import React, { useState } from "react";
// import Tab from "./components/tab";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import img1 from "./static/images/realtor.jpg";
import img2 from "./static/images/apartm.jpg";
import img3 from "./static/images/img3.jpg";
import img4 from "./static/images/img4.jpg";
import img5 from "./static/images/img5.jpg";
import img6 from "./static/images/img6.jpg";
import Typography from "@mui/material/Typography";
import "../App.css";
// Dummy data for properties
const dummyProperties = [
  {
    id: 1,
    type: "Apartment",
    bedrooms: 2,
    rent: 1200,
    distance: 2,
    image: img3,
  },
  { id: 2, type: "House", bedrooms: 3, rent: 1800, distance: 2, image: img4 },
  {
    id: 3,
    type: "Apartment",
    bedrooms: 1,
    rent: 800,
    distance: 4,
    image: img5,
  },
  { id: 4, type: "House", bedrooms: 2, rent: 1500, distance: 3, image: img1 },
  {
    id: 5,
    type: "Apartment",
    bedrooms: 4,
    rent: 1600,
    distance: 1,
    image: img2,
  },
  { id: 6, type: "House", bedrooms: 4, rent: 3000, distance: 1, image: img6 },
  { id: 7, type: "House", bedrooms: 3, rent: 2400, distance: 1, image: img1 },
  { id: 8, type: "House", bedrooms: 2, rent: 2100, distance: 2, image: img5 },
  {
    id: 9,
    type: "Apartment",
    bedrooms: 4,
    rent: 2100,
    distance: 2,
    image: img2,
  },

  // Add more properties
];

const CardComp = () => {
  const [properties, setProperties] = useState(dummyProperties);
  const [filter, setFilter] = useState({
    type: "",
    minBedrooms: "",
    maxRent: "",
    maxDistance: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const filteredProperties = properties.filter((property) => {
    const { type, minBedrooms, maxRent, maxDistance } = filter;

    return (
      (!type || property.type === type) &&
      (!minBedrooms || property.bedrooms >= parseInt(minBedrooms)) &&
      (!maxRent || property.rent <= parseInt(maxRent)) &&
      (!maxDistance || property.distance <= parseInt(maxDistance))
    );
  });

  return (
    <>
      <div className="bgApp">
        <div
          className="row mx-auto my-auto"
          style={{
            border: "2px",
            margin: "10px",
            borderRadius: "10px",
            height: "40px",
          }}
        >
          <label>Type:</label>
          <select name="type" onChange={handleFilterChange}>
            <option value="">Any</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>

            {/* Add more property types */}
          </select>

          <label>Min Bedrooms:</label>
          <input
            type="number"
            name="minBedrooms"
            value={filter.minBedrooms}
            onChange={handleFilterChange}
          />

          <label>Max Rent:</label>
          <input
            type="number"
            name="maxRent"
            value={filter.maxRent}
            onChange={handleFilterChange}
          />

          <label>Max Distance(in km):</label>
          <input
            type="number"
            name="maxDistance"
            value={filter.maxDistance}
            onChange={handleFilterChange}
          />
        </div>

        <div style={{ textAlign: "center", margin: "10px" }}>
          <h2>Results:</h2>
        </div>
        <div>
          <div
            className="row mx-auto"
            style={{ display: "flex", margin: "auto" }}
          >
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                sx={{
                  maxWidth: 345,
                  marginBottom: "20px",
                  marginLeft: "7%",
                  borderRadius: "15px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 140 }}
                  image={property.image}
                  title="home"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {property.type}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    These are houses and apartments.
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {property.bedrooms} Bedrooms
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    ${property.rent}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {property.distance} kms
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComp;
