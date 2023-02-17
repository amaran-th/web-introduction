import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { movies } from "../../shared/data/movie";

const Movie = () => {
  return (
    <div className="space-y-8 p-4">
      <p name="title" className="text-h1">
        인생 영화 BEST5
      </p>
      <div name="content" className="space-y-4">
        {movies.map((movie) => (
          <div key={movie.id} className="flex w-full space-x-4">
            <img
              src={movie.img}
              alt="img-blur-shadow"
              className="w-64 rounded-md"
            />
            <Card className="w-full bg-mainBlack">
              <CardBody className="h-full text-center">
                <Typography variant="h5" className="mb-2">
                  {movie.name}
                </Typography>
                <Typography className="break-keep text-left text-sm">
                  {movie.info}
                </Typography>
              </CardBody>
              <CardFooter divider className="py-3">
                <Typography
                  variant="small"
                  color="gray"
                  className="flex justify-center gap-1"
                >
                  <Link to={movie.link} target="_blank">
                    {movie.link}
                  </Link>
                </Typography>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
