DROP DATABASE IF EXISTS wizzymuse;
CREATE DATABASE wizzymuse;

-- Move into the db
\c wizzymuse

-- Create table INSTRUMENTS and insert values (71)
CREATE TABLE instruments
(
    id SERIAL PRIMARY KEY,
    instrument_name VARCHAR NOT NULL
);
INSERT INTO instruments
    (instrument_name)
VALUES
    ('Accordion'),
    ('Acoustic Guitar'),
    ('Bagpipes'),
    ('Banjo'),
    ('Bass'),
    ('Bassoon'),
    ('Bongo'),
    ('Cello'),
    ('Clarinet'),
    ('Clavichord'),
    ('Computer/Software'),
    ('Conga'),
    ('Cowbell'),
    ('Daxophone'),
    ('Didgeridoo'),
    ('Djembe'),
    ('Double Bass'),
    ('Drums'),
    ('Dulcimer'),
    ('Electric Guitar'),
    ('Fiddle'),
    ('Flute'),
    ('Glockenspiel'),
    ('Gong'),
    ('Guitar'),
    ('Hang Drum'),
    ('Harmonica'),
    ('Harmonium'),
    ('Harp'),
    ('Harpsichord'),
    ('Hurdy Gurdy'),
    ('Kalimba'),
    ('Kazoo'),
    ('Keyboard'),
    ('Mandolin'),
    ('Mbira'),
    ('Mouth Harp'),
    ('Oboe'),
    ('Organ'),
    ('Oud'),
    ('Percussion'),
    ('Piano'),
    ('Piccolo'),
    ('Recorder'),
    ('Saxophone'),
    ('Sitar'),
    ('Software/Computer'),
    ('Spoons'),
    ('Steel Drums'),
    ('Synthesizer'),
    ('Tabla'),
    ('Tambourine'),
    ('Trombone'),
    ('Trumpet'),
    ('Theremin'),
    ('Tongue Drum'),
    ('Tuba'),
    ('Turntables'),
    ('Ukelele'),
    ('Viola'),
    ('Violin'),
    ('Vocals'),
    ('Volca'),
    ('Xylophone'),
    ('Zither'),
    ('Autoharp'),
    ('Marimba'),
    ('Background Vocals'),
    ('Toy Piano'),
    ('Electric Piano'),
    ('Timbales');

-- Create table GENRES and insert values (55)
CREATE TABLE genres
(
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR NOT NULL
);

INSERT INTO genres
    (genre_name)
VALUES
    ('Alternative'),
    ('Ambient'),
    ('Blues'),
    ('Bluegrass'),
    ('Classical'),
    ('Country'),
    ('Disco'),
    ('Dub'),
    ('Dubstep'),
    ('EDM'),
    ('Electroclash'),
    ('Electronic'),
    ('Folk'),
    ('Funk'),
    ('Goth'),
    ('Happy Hardcore'),
    ('Heavy Metal'),
    ('Hip Hop'),
    ('House'),
    ('Industrial'),
    ('Indie Rock'),
    ('Jazz'),
    ('Latin'),
    ('Metal'),
    ('Motown'),
    ('New Age'),
    ('New Wave'),
    ('Nu Disco'),
    ('Nu Metal'),
    ('Opera'),
    ('Pop'),
    ('Progressive'),
    ('Psychedelic'),
    ('Psytrance'),
    ('Punk'),
    ('R&B'),
    ('Rap'),
    ('Reggae'),
    ('Rock'),
    ('Rockabilly'),
    ('Shoegaze'),
    ('Soul'),
    ('Soundtracks'),
    ('Ska'),
    ('Synthpop'),
    ('Techno'),
    ('Tejano'),
    ('Trance'),
    ('Trip Hop'),
    ('World Music'),
    ('Background Music'),
    ('Italo Disco'),
    ('Indie Disco'),
    ('Hi-NRG'),
    ('Glam');

-- Create table USERS
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    avatar VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create table PROFILES
CREATE TABLE profiles
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    public_profile BOOLEAN DEFAULT TRUE,
    first_name VARCHAR,
    last_name VARCHAR,
    dob DATE,
    phone VARCHAR,
    city VARCHAR,
    state VARCHAR,
    country VARCHAR,
    bio VARCHAR,
    band VARCHAR,
    artist_name VARCHAR,
    website VARCHAR,
    youtube VARCHAR,
    twitter VARCHAR,
    facebook VARCHAR,
    linkedin VARCHAR,
    instagram VARCHAR,
    soundcloud VARCHAR,
    twitch VARCHAR,
    tiktok VARCHAR,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create table INSTRUMENT_ASSIGNMENTS
CREATE TABLE instrument_assignments
(
    id SERIAL PRIMARY KEY,
    profile_id INTEGER NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    instrument_id INTEGER NOT NULL REFERENCES instruments(id) ON DELETE CASCADE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create table GENRE_ASSIGNMENTS
CREATE TABLE genre_assignments
(
    id SERIAL PRIMARY KEY,
    profile_id INTEGER NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    genre_id INTEGER NOT NULL REFERENCES genres(id) ON DELETE CASCADE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create table FORUM_TOPICS
CREATE TABLE forum_topics
(
    id SERIAL PRIMARY KEY,
    topic_title VARCHAR NOT NULL,
    topic_description VARCHAR
);

-- Create table POSTS
CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    topic_id INTEGER NOT NULL REFERENCES forum_topics(id) ON DELETE CASCADE,
    post_text VARCHAR,
    nb_views INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create table REPLIES
CREATE TABLE replies
(
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reply_text VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);