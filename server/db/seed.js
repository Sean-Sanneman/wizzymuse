require('dotenv').config();
const db = require('./index');
const faker = require('faker');

// Function to save a fake user
const saveToUsersTable = async (fakeUserObj) => {
  try {
    const newFakeUserData = await db.query(
      'INSERT INTO users (email, username, password, avatar) VALUES ($1, $2, $3, $4) RETURNING *;',
      [
        fakeUserObj.email,
        fakeUserObj.username,
        fakeUserObj.password,
        fakeUserObj.avatar,
      ]
    );
    return newFakeUserData.rows[0].id;
  } catch (err) {
    console.log(err.message);
  }
};

// Function to save a fake profile
const saveToProfilesTable = async (fakeProfileObj) => {
  try {
    const newFakeProfileData = await db.query(
      `INSERT INTO profiles (user_id, public_profile, first_name, last_name, dob, phone, city, state,
       country, bio, band, artist_name, website, youtube, twitter, facebook, linkedin, instagram, 
       soundcloud, twitch, tiktok) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, 
        $15, $16, $17, $18, $19, $20, $21) RETURNING *;`,
      [
        fakeProfileObj.userId,
        fakeProfileObj.publicProfile,
        fakeProfileObj.firstName,
        fakeProfileObj.lastName,
        fakeProfileObj.dob,
        fakeProfileObj.phone,
        fakeProfileObj.city,
        fakeProfileObj.state,
        fakeProfileObj.country,
        fakeProfileObj.bio,
        fakeProfileObj.band,
        fakeProfileObj.artistName,
        fakeProfileObj.website,
        fakeProfileObj.youtube,
        fakeProfileObj.twitter,
        fakeProfileObj.facebook,
        fakeProfileObj.linkedin,
        fakeProfileObj.instagram,
        fakeProfileObj.soundcloud,
        fakeProfileObj.twitch,
        fakeProfileObj.tiktok,
      ]
    );
    return newFakeProfileData.rows[0].id;
  } catch (err) {
    console.log(err.message);
  }
};

// Function to save a fake forum
const saveToForumsTable = async (fakeForumObj) => {
  try {
    await db.query('INSERT INTO forums (topic, description) VALUES ($1, $2)', [
      fakeForumObj.topic,
      fakeForumObj.description,
    ]);
  } catch (err) {
    console.log(err.message);
  }
};

async function seed() {
  // create 10 fake forums
  for (let i = 0; i < 10; i++) {
    const fakeForumObj = {
      topic: faker.lorem.words(Math.floor(Math.random() * 10 + 1)),
      description: faker.lorem.sentences(Math.floor(Math.random() * 5 + 1)),
    };
    await saveToForumsTable(fakeForumObj);
  }

  // create 100 fake users
  for (let i = 0; i < 100; i++) {
    try {
      // Create a new fake user object
      const fakeUserObj = {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        password: 'password',
      };
      // Save the new fake user into the USERS table and collect the new fake user's id
      const fakeUserId = await saveToUsersTable(fakeUserObj);

      // Create a new fake profile object
      const fakeProfileObj = {
        userId: fakeUserId,
        publicProfile: faker.datatype.boolean(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        dob: faker.date.between(new Date('01/01/1921'), new Date('01/01/2010')),
        phone: faker.phone.phoneNumber(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        bio: faker.lorem.sentences(Math.floor(Math.random() * 5)),
        band: faker.lorem.words(Math.floor(Math.random() * 3)),
        artistName: faker.lorem.words(Math.floor(Math.random() * 3)),
        website: faker.internet.url(),
        youtube: faker.internet.url(),
        twitter: faker.internet.url(),
        facebook: faker.internet.url(),
        linkedin: faker.internet.url(),
        instagram: faker.internet.url(),
        soundcloud: faker.internet.url(),
        twitch: faker.internet.url(),
        tiktok: faker.internet.url(),
      };
      // Save the new fake profile into the PROFILES table and collect the new fake profile's id
      const fakeProfileId = await saveToProfilesTable(fakeProfileObj);

      // Save a profile's instruments into the INSTRUMENT_ASSIGNMENTS table
      const instrumentIds = instrumentIdsList();
      for (let i = 0; i < instrumentIds.length; i++) {
        await db.query(
          `INSERT INTO instrument_assignments 
        (profile_id, instrument_id) VALUES ($1, $2);`,
          [fakeProfileId, instrumentIds[i]]
        );
      }

      // Save a profile's genres into the GENRE_ASSIGNMENTS table
      const genreIds = genreIdsList();
      for (let i = 0; i < genreIds.length; i++) {
        await db.query(
          `INSERT INTO genre_assignments 
        (profile_id, genre_id) VALUES ($1, $2);`,
          [fakeProfileId, genreIds[i]]
        );
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}

seed();

/*** UTIL FUNCTIONS ***/
// Function to create a random list of instrument ids for a fake profile
function instrumentIdsList() {
  const nbInstruments = Math.floor(Math.random() * 5);
  const instrumentIdsList = [];
  for (let i = 0; i <= nbInstruments; i++) {
    const instrumentId = Math.floor(Math.random() * 71) + 1;
    instrumentIdsList.push(instrumentId);
  }
  return instrumentIdsList;
}

// Function to create a random list of genre ids for a fake profile
function genreIdsList() {
  const nbGenres = Math.floor(Math.random() * 10);
  const genreIdsList = [];
  for (let i = 0; i <= nbGenres; i++) {
    const genreId = Math.floor(Math.random() * 55) + 1;
    genreIdsList.push(genreId);
  }
  return genreIdsList;
}
