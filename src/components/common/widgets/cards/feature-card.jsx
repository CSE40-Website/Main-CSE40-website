import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import {
  CardHeader,
  CardFooter,
  Button,
} from "@material-tailwind/react";


export function FeatureCard({ color, icon, title, description }) {
  console.log(icon);
  return (


      <Card className=" overflow-hidden shadow w-full mx-auto relative group rounded-lg cursor-pointer">
        <div className="rounded-lg absolute z-10 inset-0 bg-black bg-opacity-60 transition-transform transform translate-x-[-200%] group-hover:translate-x-0 duration-500"></div>
        <CardHeader shadow={false} floated={false} className=" h-80 m-0">
          <img
              src={icon}
              alt="card-image"
              className="h-full w-full object-cover"
          />
        </CardHeader>

        <CardBody className="relative z-8">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" variant={'h5'}>
              {title}
            </Typography>
            <Typography color="green" variant='h6'>
              New
            </Typography>
          </div>
          <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
          >
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging case.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 relative z-10">
          <Button
              ripple={false}
              fullWidth={true}
              variant={'gradient'}
              color={'amber'}
              className="shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>

      // <Card className="rounded-lg shadow-lg shadow-gray-500/10">
      //   <CardBody className="px-8 text-center">
      //     <IconButton
      //       variant="gradient"
    //       size="lg"
    //       color={color}
    //       className="pointer-events-none mb-6 rounded-full"
    //     >
    //       {icon}
    //     </IconButton>
    //     <Typography variant="h5" className="mb-2" color="blue-gray">
    //       {title}
    //     </Typography>
    //     <Typography className="font-normal text-blue-gray-600">
    //       {description}
    //     </Typography>
    //   </CardBody>
    // </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
