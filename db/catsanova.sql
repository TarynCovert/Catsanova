DROP TABLE IF EXISTS cats, messages, photos;

CREATE TABLE cats (
    id VARCHAR (8) NOT NULL PRIMARY KEY,
    name VARCHAR (30) NOT NULL,
    url VARCHAR (2100) NOT NULL,
    primarybreed VARCHAR (100) NOT NULL,
    secondarybreed VARCHAR (100) NOT NULL,
    mixed BOOLEAN,
    colorprimary VARCHAR (31),
    colorsecondary VARCHAR (32),
    age VARCHAR (10) NOT NULL,
    gender VARCHAR (10) NOT NULL,
    size VARCHAR (10) NOT NULL,
    spayed BOOLEAN,
    housetrained BOOLEAN,
    specialneeds BOOLEAN,
    children BOOLEAN,
    dogsother BOOLEAN,
    catsother BOOLEAN,
    description VARCHAR (1000)
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    message VARCHAR (2000) NOT NULL,
    url VARCHAR (2100) NOT NULL,
    photo VARCHAR (2100) NOT NULL,
    cats_id INTEGER REFERENCES cats(id)
);

CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    photo VARCHAR (2100),
    cats_id INTEGER REFERENCES cats(id)
);

