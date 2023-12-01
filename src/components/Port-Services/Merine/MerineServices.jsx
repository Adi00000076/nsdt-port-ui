import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MerineServices() {
  return (
    <div className="container">
      <div className="row">
        <Typography variant="h3">
          Marine <strong style={{ color: "teal" }}>Services</strong>
        </Typography>
        <div className="col-sm-4">
          <Card
            sx={{
              maxWidth: 350,
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image="https://www.jmbaxi.com/images/list-jm-baxi.jpg"
              title="J. M. Baxi & Co"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                J. M. Baxi & Co
              </Typography>
              <Typography variant="body2" color="text.info">
                J. M. Baxi & Co. is India's premier shipping services company,
                standing firmly on the pillars of innovation, commitment, and
                performance. J. M. Baxi & Co. is India's premier shipping
                services company, standing firmly on the pillars of innovation,
                commitment, and performance.{" "}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="col-sm-4">
          <Card
            sx={{
              maxWidth: 350,
              transition: "box-shadow 0.3s", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image="https://www.jmbaxi.com/images/list-boxco-shipping.jpg"
              title="Boxco Shipping Services"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Boxco Shipping Services
              </Typography>
              <Typography variant="body2" color="text.info">
                Boxco Shipping Services was founded in 2012 and then appointed
                as sub-agents for Evergreen Shipping Agency (India) Pvt. Ltd.
                which are the agents for Evergreen Line in India. Evergreen Line
                has services worldwide from India covering almost the major
                globe.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="col-sm-4">
          <Card
            sx={{
              maxWidth: 350,
              transition: "box-shadow 0.3s", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image="https://www.jmbaxi.com/images/list-united-liner.jpg"
              title="United Liner Shipping Services"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                United Liner Shipping Services
              </Typography>
              <Typography variant="body2" color="text.info">
                United Liner Shipping Services (ULSS) has a vast network of
                offices across India, including at all major and minor Indian
                ports and Inland Container Depots (ICD’S). With over 180
                Dynamic, focused, highly motivated, dedicated, qualified, and
                diversified experienced personnel.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>


      <div className="row mt-2 ">

{/* second row start here  */}
      <div className="col-sm-4 ">
          <Card
            sx={{
              maxWidth: 350,
              transition: "box-shadow 0.3s", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image="https://www.jmbaxi.com/images/list-arya-offshore.jpg"
              title="United Liner Shipping Services"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Arya Offshore Services
              </Typography>
              <Typography variant="body2" color="text.info">
              Founded in 1976, Arya Offshore Services has over the years evolved into India’s largest and most comprehensive oil and gas logistics company, working with the top blue chip companies around the world.


              </Typography>
            </CardContent>
          </Card>
        </div>




        <div className="col-sm-4 ">
          <Card
            sx={{
              maxWidth: 350,
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image="https://www.jmbaxi.com/images/list-container-movement.jpg"
              title="United Liner Shipping Services"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Container Movement (Bombay) Transport
              </Typography>
              <Typography variant="body2" color="text.info">
              Container Movement (Bombay) Transport (CMT), was founded in May 1989. CMT was then appointed, in 1994, as marketing agents for the Shipping Corporation of India Ltd (SCI), 
              </Typography>
            </CardContent>
          </Card>
        </div>




        <div className="col-sm-4 ">
          <Card
            sx={{
              maxWidth: 350,
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image="https://www.jmbaxi.com/images/list-steamships-agencies.jpg"
              title="United Liner Shipping Services"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              K Steamship Agencies
              </Typography>
              <Typography variant="body2" color="text.info">
              K Steamship Agencies was established in 2006 to provide technical and crew management to ship owners as an extended arm of the owner rather than as a mere service provider. Due to business loyalty, transparency and the personalised services provided to our principals, we have to our credit many happy and satisfied ship owners 
              </Typography>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
