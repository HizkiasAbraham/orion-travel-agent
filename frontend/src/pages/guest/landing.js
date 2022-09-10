import { Parallax } from "react-parallax";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  useTheme,
} from "@mui/material";

import airportWaiting from "../../assets/pictures/airport2.jpg";
import Trip from "../../assets/pictures/trip_in.jpg";
import AirportLuggage from "../../assets/pictures/airport_w.jpeg";

import AirTicketIcon from "@mui/icons-material/AirplaneTicket";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import BookingIcon from "@mui/icons-material/BookOnline";
import TourPackagesIcon from "@mui/icons-material/CardGiftcard";
import VacationIcon from "@mui/icons-material/BeachAccess";
import LocationIcon from "@mui/icons-material/LocationOn";
import PhoneNumberIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import { topDestinations } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
};

function LandingPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Slide autoplay={false} duration={5000} arrows={false}>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(${airportWaiting})`,
                  disply: "block",
                }}
              >
                <div style={{ backgroundColor: "rgba(50, 50, 50, 0.4)" }}>
                  <Typography
                    p={2}
                    textAlign={"center"}
                    variant="h2"
                    fontWeight={"bold"}
                    color={"whitesmoke"}
                  >
                    Orion Travel Agency
                  </Typography>
                  <Typography
                    p={2}
                    pt={0}
                    color="yellow"
                    variant="h5"
                    textAlign={"center"}
                  >
                    Where your journey begins!
                  </Typography>
                  <Box p={2} zIndex={1} textAlign={"center"}>
                    <button
                      style={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        borderRadius: 25,
                        height: 50,
                        width: 160,
                        border: "none",
                        cursor: "pointer",
                        fontSize: 20,
                      }}
                      onClick={() => navigate("/book-trip")}
                    >
                      Book Now!
                    </button>
                  </Box>
                </div>
              </div>
            </div>
          </Slide>

          <Box bgcolor={theme.palette.primary.main} textAlign="center">
            <Typography p={3} variant="h4" color={"white"} textAlign={"center"}>
              Our Services
            </Typography>
            <Grid container spacing={2} justifyContent={"center"} p={5} pt={0}>
              <Grid item xs={12} md={3}>
                <Card>
                  <CardContent>
                    <BookingIcon color="primary" fontSize="large" />
                    <Typography color="primary" variant="h5" component="div">
                      Air Ticket
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card>
                  <CardContent>
                    <AirTicketIcon
                      color="primary"
                      height={10}
                      fontSize="large"
                    />

                    <Typography
                      color="primary"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Hotel Reservation
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card>
                  <CardContent>
                    <TourPackagesIcon color="primary" fontSize="large" />
                    <Typography color="primary" variant="h5" component="div">
                      Vacation Packages
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card>
                  <CardContent>
                    <VacationIcon color="primary" fontSize="large" />
                    <Typography color="primary" variant="h5" component="div">
                      Tour
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <div style={styles}>
            <Parallax bgImage={AirportLuggage} strength={800}>
              <div style={{ height: 340 }}></div>
            </Parallax>
          </div>
          <Box bgcolor={theme.palette.primary.main}>
            <Typography p={3} textAlign="center" variant="h4" color="white">
              Top Destinations
            </Typography>
            <Grid container spacing={2} justifyContent={"center"} p={5} pt={0}>
              {topDestinations.map((destination) => (
                <Grid item xs={12} sm={3}>
                  <Card>
                    <CardMedia
                      height={160}
                      width={160}
                      component={"img"}
                      image={destination.picture}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {destination?.city}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {destination.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">
                        Book Now ({destination.price})
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <div style={styles}>
            <Parallax bgImage={Trip} strength={800}>
              <div style={{ height: 400 }}></div>
            </Parallax>
          </div>
          <Box bgcolor={theme.palette.primary.main} justifyContent={"center"}>
            <Grid container spacing={1} justifyContent={"center"} p={5}>
              <Grid item xs={{ disply: "none" }} sm={2}></Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" color="white">
                  {"   "} Address
                </Typography>
                <Typography color={"white"}>
                  <LocationIcon fontSize="small" /> 4 Killo Gellila Building 3rd
                  Floor, Addis Ababa, Ethiopia
                </Typography>
                <Typography color="white">
                  <PhoneNumberIcon fontSize="small" /> +251 910 29 59 65
                </Typography>
                <Typography color="white">
                  <PhoneNumberIcon fontSize="small" /> +251 926 87 10 60
                </Typography>
                <Typography color="white">
                  <EmailIcon fontSize="small" /> touragent@gmial.com
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3} justifyContent="left">
                <Typography variant="h6" color="white">
                  Follow us
                </Typography>
                <Typography color="white">
                  <TwitterIcon fontSize="small" /> Twitter
                </Typography>
                <Typography color="white">
                  <FacebookIcon fontSize="small" /> Facebook
                </Typography>
                <Typography color="white">
                  <InstagramIcon fontSize="small" /> Instagram
                </Typography>
              </Grid>
            </Grid>
            <Typography p={2} textAlign={"center"} color="white">
              Copy Right &copy; {new Date().getFullYear()} orion travel agent
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
