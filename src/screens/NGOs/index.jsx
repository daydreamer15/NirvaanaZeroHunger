import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FaPhone, FaMapMarkerAlt, FaMapMarkedAlt } from "react-icons/fa"; // Import the icons
import Header from "../../components/Header";
import styled from "styled-components"; // Import styled-components
import { ngo1 } from "../../assets";
import { ngo2 } from "../../assets";

const StyledCard = styled(Card)`
  width: 275px;
  margin-bottom: 20px;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    background-color: #f7f7f7; /* Light background color on hover */
  }
`;

const StyledIcon = styled.span`
  position: relative;
  top: -2px;
  margin-right: 8px;
  transition: color 0.3s;

  ${StyledCard}:hover & {
    color: #4cceac; /* Change hover color to a complementary color */
  }
`;

const StyledRestaurantName = styled(Typography)`
  margin-bottom: 8px;
  font-weight: bold; /* Emphasize restaurant name */
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NGOs = () => {
  const horecaData = [
    {
      image: ngo1, //image URL from cloudinary
      name: " Akshaya Patra Foundation",
      location: "123 Morena, Gwalior",
      distance: "2.5 km",
      phoneNumber: "123-456-7890",
    },
    {
      image: ngo1,
      name: "RotiBank",
      location: "456 Lashkar, Gwalior",
      distance: "1.8 km",
      phoneNumber: "987-654-3210",
    },
    {
      image: ngo1,
      name: "Saatvik Food Bank",
      location: "789 City Centre, Gwalior",
      distance: "3.2 km",
      phoneNumber: "555-123-4567",
    },
  ];

  return (
    <Box m="20px">
      <Header title="All NGOs" subtitle="Savor Generosity, Minimize Hunger" />

      <Box display="flex" flexWrap="wrap" gap="20px">
        {horecaData.map((item, index) => (
          <StyledCard key={index} variant="outlined">
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.name}
              style={{ borderRadius: "15px 15px 0 0" }}
            />
            <CardContent style={{ padding: "16px", marginTop: "8px" }}>
              <StyledRestaurantName variant="h5">
                {item.name}
              </StyledRestaurantName>
              <div style={{ marginTop: "10px" }}>
                <ContentWrapper>
                  <StyledIcon as={FaMapMarkedAlt} />
                  <Typography>{item.location}</Typography>
                </ContentWrapper>
              </div>
              <div style={{ marginTop: "10px" }}>
                <ContentWrapper>
                  <StyledIcon as={FaMapMarkerAlt} />
                  <Typography>{item.distance}</Typography>
                </ContentWrapper>
              </div>
              <div style={{ marginTop: "10px" }}>
                <ContentWrapper>
                  <StyledIcon as={FaPhone} />
                  <Typography>{item.phoneNumber}</Typography>
                </ContentWrapper>
              </div>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default NGOs;