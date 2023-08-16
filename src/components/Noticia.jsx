/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  return (
    <Card>
      {urlToImage && (
        <CardMedia
          component="img"
          alt={`Imagen de la noticia ${title}`}
          image={urlToImage}
          height={"250"}
        />
      )}
      <CardContent>
        <Typography variant="body1" color="error">
          {source.name}
        </Typography>
        <Typography variant="h5" component={"div"}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <CardActions>
          <Link
            href={url}
            target="_blanck"
            variant="button"
            width={"100%"}
            textAlign={"center"}
          >
            Leer Noticia
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Noticia;
