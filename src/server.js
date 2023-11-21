const app = require('./app');
const sequelize = require('./utils/connection');
require('./models');

const PORT = process.env.PORT || 8080;

const main = async () => {
    try {
        sequelize.sync();
        console.log("DB connected");
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.log(error)
    }
}

main();

/*
1 Traer la movie con el id de URL
2 Setear los generos del artista
3 Traer los generos del artista y retornar*/
