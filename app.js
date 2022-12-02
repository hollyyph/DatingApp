require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
const path = require('path')
    // const monk = require('monk')
    // const db = require('monk')(process.env.DB_URL)
const db = require('./db')
const detailsCollection = "details"
const partnersCollection = "partners"
    // const partners_data = db.get('dating_partners');
    // const details = db.get('details');

db.connect((err) => {
    if (err) {
        console.log('unable to connect to database');
        process.exit(1);
    } else {
        app.listen(9999, () => {
            console.log('connected to database, app listening on port 9999')
        });
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'));
})

app.get('/choose', (req, res) => {
    res.sendFile(path.join(__dirname, 'choose.html'));
})

app.get('/getDetails', (req, res) => {
    db.getDB().collection(detailsCollection).find({}).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            console.log(documents);
            res.json(documents);
        }
    })
})

app.get('/getPartners', (req, res) => {
    db.getDB().collection(partnersCollection).find({}).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            console.log(documents);
            res.json(documents);
        }
    })
})

app.post('/', (req, res) => {
    const userINput = req.body;
    db.getDB().collection(partnersCollection).insertOne(userInput, (err, result) => {
        if (err)
            console.log(err);
        else {
            res.json({ result: result, document: result.ops[0] });
        }
    })
})

// app.get('/getAllPartners', async(req, res) => {
//     const limit = 5;
//     let skip = limit * (parseInt(req.query.page || 1))
//     const partnerListdata = await dating_data.find({}, {
//         fields: {
//             original_title: 1,
//             vote_average: 1,
//             vote_count: 1,
//             genres: 1
//         },
//         limit: 5,
//         skip,
//         sort: { _id: 1 }
//     })

//     res.json({
//         movieListdata
//     })
// })

// app.get('/getRecommendation', async(req, res) => {
//     const recommendadtion = await movie_data.aggregate([{
//             $match: {
//                 "vote_average": { $not: { $type: "string" } },
//                 "vote_count": { $not: { $type: "string" } },
//                 "genres": req.query.genres,
//                 "_id": { $ne: monk.id(req.query._id) }
//             }
//         },
//         {
//             $project: {
//                 original_title: 1,
//                 vote_average: 1,
//                 vote_count: 1,
//                 overview: 1,
//                 release_date: 1,
//                 genres: 1,
//                 distance: {
//                     $sqrt: {
//                         $add: [
//                             { $pow: [{ $subtract: [Number(req.query.vote_average), "$vote_average"] }, 2] },
//                             { $pow: [{ $subtract: [Number(req.query.vote_count), "$vote_count"] }, 2] }
//                         ]
//                     }
//                 }
//             }
//         },
//         {
//             $match: {
//                 distance: { $ne: null }
//             }
//         },
//         {
//             $sort: { distance: 1 },
//         },
//         {
//             $limit: 5
//         }
//     ])

//     res.json({
//         recommendation
//     })
// })

// app.listen(process.env.PORT || 9999, (err) => {
//     if (err) console.log(err);
//     else console.log('Server on port 9999');
// })