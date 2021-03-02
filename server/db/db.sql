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