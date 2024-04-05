import express from 'express';



const app = express();

//Config EXPRESS
//app.use(express.static(__dirname+'public'));
//app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
//app.use(cookieParser());
/* app.use(
    session({
        store: MongoStore.create({ mongoUrl: `${process.env.mongo_string}`, ttl: 7200 }),
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
); */



// node --env-file .dev.env server.js ----> ejecutar así para .env nativo de VSC