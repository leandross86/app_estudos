const variables = {
    Database: {
        connection:process.env.connection
    },
    Security: {
        secretKey: process.env.secretKey
    },
    Pagarme: {
        pagarmeKey: process.env.pagarme
    }
}
module.exports = variables;