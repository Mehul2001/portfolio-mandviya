const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://mehulmandviya.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://mehulmandviya.herokuapp.com',
    'process.env.CLIENT_ID': '01iPOsNpaC5VWeCowQiUW5ifKz6wIBdA'
}