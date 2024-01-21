import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import { stats } from "../../constants";
import { revenueGenerated } from "../../constants";
// import { campaign } from "../../constants";
import {
  DownloadOutlined as DownloadOutlinedIcon,
  Email as EmailIcon,
  PointOfSale as PointOfSaleIcon,
  PersonAdd as PersonAddIcon,
  Traffic as TrafficIcon,
} from "@mui/icons-material";
import {FoodBankIcon as FoodBankIcon} from '@mui/icons-material/FoodBank';

const ProDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "EmailIcon":
        return (
          <EmailIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
      case "PointOfSaleIcon":
        return (
          <PointOfSaleIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
      case "PersonAddIcon":
        return (
          <PersonAddIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
      
      case "DownloadOutlinedIcon":
        return (
          <DownloadOutlinedIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
        case "Food":
        return (
          <FoodBankIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

    
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {stats.map((stat, index) => (
          <Box
            key={index}
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={stat.title}
              subtitle={stat.subtitle}
              progress={stat.progress}
              increase={stat.increase}
              icon={renderIcon(stat.icon)}
            />
          </Box>
        ))}

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                {revenueGenerated.title}
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.redAccent[300]}
              >
                {revenueGenerated.amount}
              </Typography>
            </Box>
            <Box>
              <IconButton>{renderIcon(revenueGenerated.icon)}</IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isProDashboard={true} />
          </Box>
        </Box>
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
           Hunger Zones Cured
          </Typography>
          <Box height="200px">
            <GeographyChart isProDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProDashboard;
