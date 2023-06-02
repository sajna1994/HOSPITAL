const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));
const fs=require('fs');
const rawData = fs.readFileSync('data.json');
const jsonData =JSON.parse(rawData)
router.get('/',(req,res)=>{
    res.send(rawData);

});
router.post('/add',(req,res)=>{
    console.log(req.body);
    res.send(rawData);

});
// router.put('/update/:ind',(req,res)=>{
//     const index=req.params.ind;
//     console.log(index);
//     res.send('updated');

// });
router.put('/update/:ind',(req,res)=>{
    const index=req.params.ind;
    console.log(index);
    res.send('updated');

});
// app.put('/hospitals/:name', (req, res) => {
//   const name = req.params.name;
//   fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     let hospitals = JSON.parse(data);
//     const hospitalIndex = hospitals.findIndex(h => h.NameHospital === name);
//     if (hospitalIndex !== -1) {
//       hospitals[hospitalIndex] = req.body;
//       fs.writeFile(jsonFilePath, JSON.stringify(hospitals), 'utf8', err => {
//         if (err) {
//           console.error(err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.send('Hospital updated');
//       });
//     } else {
//       res.status(404).send('Hospital not found');
//     }
//   });
// });
router.delete('/delete/:ind',(req,res)=>{
    const index=req.params.ind;
    console.log(index);
    res.send('deleted');

});
module.exports=router;
// server.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const jsonFilePath = 'data.json';

// // Middleware
// app.use(bodyParser.json());

// // Read all hospital data
// app.get('/hospitals', (req, res) => {
//   fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     res.json(JSON.parse(data));
//   });
// });

// // Read a specific hospital
// app.get('/hospitals/:name', (req, res) => {
//   const name = req.params.name;
//   fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     const hospitals = JSON.parse(data);
//     const hospital = hospitals.find(h => h.NameHospital === name);
//     if (hospital) {
//       res.json(hospital);
//     } else {
//       res.status(404).send('Hospital not found');
//     }
//   });
// });

// // Create a new hospital
// app.post('/hospitals', (req, res) => {
//   fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     const hospitals = JSON.parse(data);
//     hospitals.push(req.body);
//     fs.writeFile(jsonFilePath, JSON.stringify(hospitals), 'utf8', err => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       res.status(201).send('Hospital created');
//     });
//   });
// });

// // Update a hospital
// app.put('/hospitals/:name', (req, res) => {
//   const name = req.params.name;
//   fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     let hospitals = JSON.parse(data);
//     const hospitalIndex = hospitals.findIndex(h => h.NameHospital === name);
//     if (hospitalIndex !== -1) {
//       hospitals[hospitalIndex] = req.body;
//       fs.writeFile(jsonFilePath, JSON.stringify(hospitals), 'utf8', err => {
//         if (err) {
//           console.error(err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.send('Hospital updated');
//       });
//     } else {
//       res.status(404).send('Hospital not found');
//     }
//   });
// });

// // Delete a hospital
// app.delete('/hospitals/:name', (req, res) => {
//     const name = req.params.name;
//     fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         let hospitals = JSON.parse(data);
//         const hospitalIndex = hospitals.findIndex(h => h.NameHospital === name);
//         if (hospitalIndex !== -1) {
//           hospitals[hospitalIndex] = req.body;
//           fs.deleteFile(jsonFilePath, JSON.stringify(hospitals), 'utf8', err => {
//             if (err) {
//               console.error(err);
//               res.status(500).send('Internal Server Error');
//               return;
//             }
//             res.send('Hospital updated');
//           });
//         } else {
//           res.status(404).send('Hospital not found');
//         }
//       });
//     });
// module.exports=app;