-- CREATE DATABASE wizzymuse-pern;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(40), 
    last_name VARCHAR(40), 
    email VARCHAR(60) NOT NULL,
    username VARCHAR(40) NOT NULL,
    password VARCHAR(20) NOT NULL,
    dob DATE,
    phone VARCHAR,
    avatar VARCHAR(200),
    city VARCHAR,
    state VARCHAR,
    country VARCHAR,
    bio VARCHAR(500),
    band VARCHAR,
    website VARCHAR(200),
    youtube VARCHAR(200),
    twitter VARCHAR(200),
    facebook VARCHAR(200),
    linkedin VARCHAR(200),
    instagram VARCHAR(200),
    soundcloud VARCHAR(200),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO artists (first_name, last_name, email, username, password, dob, phone, avatar, city, state, country, bio, band, website, youtube, twitter, facebook, linkedin, instagram, soundcloud) VALUES ('sean', 'cone', 'seanisyourdj@gmail.com', 'seanc0ne', 'ilyatroisstylos', '06/28/93',
'720-985-6588','facebook.com', 'Burbank', 'CA', 'USA', '', '', 'soundcloud.com/seanisyourdj',
'', '', '', 'linkedin.com/seanc0ne', 'seanisyourdj', 'soundcloud.com/seanisyourdj');

CREATE TABLE instruments (
    id SERIAL PRIMARY KEY,
    instrument_name VARCHAR NOT NULL
);

CREATE TABLE instrument_assignments (
    id SERIAL PRIMARY KEY,
    artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE ,
    instrument_id INTEGER NOT NULL REFERENCES instruments(id) ON DELETE CASCADE,
    proficiency INTEGER CHECK(proficiency >= 1 AND proficiency <=5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO instruments (instrument_name) VALUES ('Trumpet');
INSERT INTO instrument_assignments (artist_id, instrument_id, proficiency) VALUES(1,1,4);


SELECT artists.first_name, instruments.instrument_name FROM instrument_assignments
LEFT JOIN artists ON (artists.id = instrument_assignments.artist_id)
LEFT JOIN instruments ON (instruments.id = instrument_assignments.instrument_id);

-- SELECT artists.first_name, instruments.instrument_name FROM instrument_assignments, artists, instruments
-- WHERE artists.id = instrument_assignments.artist_id AND instruments.id = instrument_assignments.instrument_id
-- ;