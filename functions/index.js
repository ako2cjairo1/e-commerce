const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HubBlH7UmlcOp0AnBtLDQDY2ELxS4UqugRAHrK7hUqGrIETvsYJn33IZiLARPIPEisS8Regb923jQySkxcdu6Z400RYL6RnOp')

// API

// - App coinfig
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hellow world'))
// - API routes
app.post('/payments/create?', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'php',
    })

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// - Listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });