-- CREATE DATABASE wizzymuse;

-- @TODO: validate password?
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    avatar VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (email, username, password, avatar) VALUES ('seanisyourdj@gmail.com', 'seanc0ne', 'ilyatroisstylos', '');

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR,
    dob DATE,
    phone VARCHAR,
    city VARCHAR,
    state VARCHAR,
    country VARCHAR,
    bio VARCHAR,
    band VARCHAR,
    website VARCHAR,
    youtube VARCHAR,
    twitter VARCHAR,
    facebook VARCHAR,
    linkedin VARCHAR,
    instagram VARCHAR,
    soundcloud VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO artists (user_id, first_name, last_name, dob, phone, city, state, country, bio, band, website, youtube, twitter, facebook, linkedin, instagram, soundcloud) VALUES (1, 'sean', 'cone', '06/28/93', '720-985-6588','Burbank', 'CA', 'USA', '', '', 'soundcloud.com/seanisyourdj', '', '', '', 'linkedin.com/seanc0ne', 'seanisyourdj', 'soundcloud.com/seanisyourdj');

CREATE TABLE instruments (
    id SERIAL PRIMARY KEY,
    instrument_name VARCHAR NOT NULL
);

CREATE TABLE instrument_assignments (
    id SERIAL PRIMARY KEY,
    artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE,
    instrument_id INTEGER NOT NULL REFERENCES instruments(id) ON DELETE CASCADE,
    proficiency INTEGER CHECK(proficiency >= 1 AND proficiency <=5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO instruments (instrument_name) VALUES ('Trumpet');
INSERT INTO instrument_assignments (artist_id, instrument_id, proficiency) VALUES(1,1,4);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR NOT NULL
);

CREATE TABLE genre_assignments (
    id SERIAL PRIMARY KEY,
    artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE,
    genre_id INTEGER NOT NULL REFERENCES genres(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO genres (genre_name) VALUES ('Dubstep');
INSERT INTO genre_assignments (artist_id, genre_id) VALUES(1,1);

SELECT artists.first_name, instruments.instrument_name FROM instrument_assignments
LEFT JOIN artists ON (artists.id = instrument_assignments.artist_id)
LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id);

SELECT artists.first_name, genres.genre_name FROM genre_assignments
LEFT JOIN artists ON (artists.id = genre_assignments.artist_id)
LEFT JOIN genres ON (genres.id = genre_assignments.genre_id);

-- SELECT artists.first_name, instruments.instrument_name FROM instrument_assignments, artists, instruments
-- WHERE artists.id = instrument_assignments.artist_id AND instruments.id = instrument_assignments.instrument_id
-- ;