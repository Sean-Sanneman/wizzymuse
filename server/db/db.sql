-- CREATE DATABASE wizzymuse;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    avatar VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO users (email, username, password, avatar) VALUES ('seanisyourdj@gmail.com', 'seanc0ne', 'ilyatroisstylos', '');

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
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
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO profiles (user_id, first_name, last_name, dob, phone, city, state, country, bio, band, artist_name, website, youtube, twitter, facebook, linkedin, instagram, soundcloud, twitch, tiktok) VALUES (1, 'sean', 'cone', '06/28/93', '720-985-6588', 'Burbank', 'CA', 'USA', 'I like parties and fun.', 'No band.', 'Sean is your DJ', 'soundcloud.com/seanisyourdj', '', '', '', 'linkedin.com/seanc0ne', 'seanisyourdj', 'seanisyourdj', '', '');

CREATE TABLE instruments (
    id SERIAL PRIMARY KEY,
    instrument_name VARCHAR NOT NULL
);

INSERT INTO instruments (instrument_name) VALUES ('accordion'), ('acoustic_guitar'), ('bagpipes'), ('banjo'), ('bass'), ('bassoon'), ('bongo'), ('cello'), ('clarinet'), ('clavichord'), ('computer/software'), ('conga'), ('cowbell'), ('daxophone'), ('didgeridoo'), ('djembe'), ('double_bass'), ('drums'), ('dulcimer'), ('electric_guitar'), ('fiddle'), ('flute'), ('glockenspiel'), ('gong'), ('guitar'), ('hang_drum'), ('harmonica'), ('harmonium'), ('harp'), ('harpsichord'), ('hurdy_gurdy'), ('kalimba'), ('kazoo'), ('keyboard'), ('mandolin'), ('mbira'), ('mouth_harp'), ('oboe'), ('organ'), ('oud'), ('percussion'), ('piano'), ('piccolo'), ('recorder'), ('saxophone'), ('sitar'), ('software/computer'), ('spoons'), ('steel_drums'), ('synthesizer'), ('tabla'), ('tambourine'), ('trombone'), ('trumpet'), ('theremin'), ('tongue_drum'), ('tuba'), ('turntables'), ('ukelele'), ('viola'), ('violin'), ('vocals'), ('volca'), ('xylophone'), ('zither'), ('autoharp'), ('marimba'), ('background_vocals'), ('toy_piano'), ('electric_piano'), ('timbales');

CREATE TABLE instrument_assignments (
    id SERIAL PRIMARY KEY,
    profile_id INTEGER NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    instrument_id INTEGER NOT NULL REFERENCES instruments(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO instrument_assignments (profile_id, instrument_id) VALUES(1,1);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR NOT NULL
);

INSERT INTO genres (genre_name) VALUES ('Alternative'), ('Ambient'), ('Blues'), ('Bluegrass'), ('Classical'), ('Country'), ('Disco'), ('Dub'), ('Dubstep'), ('EDM'), ('Electroclash'), ('Electronic'), ('Folk'), ('Funk'), ('Goth'), ('Happy Hardcore'), ('Heavy Metal'), ('Hip Hop'), ('House'), ('Industrial'), ('Indie Rock'), ('Jazz'), ('Latin'), ('Metal'), ('Motown'), ('New Age'), ('New Wave'), ('Nu Disco'), ('Nu Metal'), ('Opera'), ('Pop'), ('Progressive'), ('Psychedelic'), ('Psytrance'), ('Punk'), ('R&B'), ('Rap'), ('Reggae'), ('Rock'), ('Rockabilly'), ('Shoegaze'), ('Soul'), ('Soundtracks'), ('Ska'), ('Synthpop'), ('Techno'), ('Tejano'), ('Trance'), ('Trip Hop'), ('World Music'), ('Background Music'), ('Italo Disco'), ('Indie Disco'), ('Hi-NRG'), ('Glam');

CREATE TABLE genre_assignments (
    id SERIAL PRIMARY KEY,
    profile_id INTEGER NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    genre_id INTEGER NOT NULL REFERENCES genres(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO genre_assignments (profile_id, genre_id) VALUES(1,1);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500),
    description VARCHAR(500)
);

-- INSERT INTO categories (title, description) VALUES ('Judy Collins Wannabes', 'They took it all from her!');

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    post_text VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO posts (user_id, category_id, post_text) VALUES (1,1,'The Carpenters were more punk than the Ramones. Daft Punk are rendered completely inessential if you listen to enough Giorgio Moroder.');

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    comment_text VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO comments (post_id, user_id, comment_text) VALUES (1,1,'hi baby poster kins');