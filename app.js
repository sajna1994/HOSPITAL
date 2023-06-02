const express = require('express');
const morgan = require('morgan');
const app = new express();
const api=require('./sample');
require('dotenv').config()
app.use(morgan('dev'));
app.use('/api',api);

const PORT=process.env.PORT;
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});

// const path = require('path');

// const dataFilePath = path.join(__dirname, 'data.json');

// // Read all hospitals from the JSON file
// function readData() {
//   const rawData = fs.readFileSync(dataFilePath);
//   return JSON.parse(rawData);
// }

// // Write hospitals to the JSON file
// function writeData(data) {
//   fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
// }

// // Get all hospitals
// function getAllHospitals() {
//   const data = readData();
//   return data.hospitals;
// }

// // Get a specific hospital by name
// function getHospitalByName(name) {
//   const data = readData();
//   return data.hospitals.find(hospital => hospital.name === name);
// }

// // Add a new hospital
// function addHospital(hospital) {
//   const data = readData();
//   data.hospitals.push(hospital);
//   writeData(data);
// }

// // Update a hospital's details
// function updateHospital(name, updatedHospital) {
//   const data = readData();
//   const index = data.hospitals.findIndex(hospital => hospital.name === name);
//   if (index !== -1) {
//     data.hospitals[index] = { ...data.hospitals[index], ...updatedHospital };
//     writeData(data);
//     return true;
//   }
//   return false;
// }

// // Delete a hospital
// function deleteHospital(name) {
//   const data = readData();
//   const index = data.hospitals.findIndex(hospital => hospital.name === name);
//   if (index !== -1) {
//     data.hospitals.splice(index, 1);
//     writeData(data);
//     return true;
//   }
//   return false;
// }