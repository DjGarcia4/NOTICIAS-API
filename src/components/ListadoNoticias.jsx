import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";
const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component="h2"
        fontSize={30}
      >
        Últimas Noticias
      </Typography>
      <Grid container spacing={3}>
        {noticias.map((noticia) => (
          <Grid item key={noticia.url} md={6} lg={4}>
            <Noticia noticia={noticia} />
          </Grid>
        ))}
      </Grid>
      <Stack
        sx={{
          marginY: 5,
        }}
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Pagination
          count={totalPaginas}
          color="primary"
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
