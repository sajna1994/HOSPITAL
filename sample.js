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
router.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { NameHospital, PatientCount, HospitalLocation } = req.body;
  
    // Find the hospital by id
    const hospital = jsonData.find((item) => item.Id === id);
  
    if (hospital) {
      // Update the hospital properties
      hospital.NameHospital = NameHospital;
      hospital.PatientCount = PatientCount;
      hospital.HospitalLocation = HospitalLocation;
  
      // Save the updated JSON data to the file
      fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
  
      res.send(`Hospital with ID ${id} updated successfully.`);
    } else {
      res.send(`Hospital with ID ${id} not found.`);
    }
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
