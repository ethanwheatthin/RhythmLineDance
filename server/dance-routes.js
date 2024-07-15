// danceRoutes.js
const express = require('express');
const DanceDetails = require('./mongoose.js').DanceDetails;
const router = express.Router();

router.get('/dances', async (req, res) => {
    try {
      console.log("🚀 ~ router.get ~ dances:");
      const dances = await DanceDetails.find().limit(20);
      console.log("🚀 ~ router.get ~ dances result:", dances);
      res.json(dances);
    } catch (err) {
      console.error("🚀 ~ router.get ~ error:", err);
      res.status(500).send(err.message);
    }
  });

  router.get('/search', async (req, res) => {
    const searchTerm = req.query.term;
    console.log("🚀 ~ router.get ~ searchTerm:", searchTerm)
    try {
      const dances = await DanceDetails.find({
        $or: [
          { dance_name: { $regex: searchTerm, $options: 'i' } },
          { music: { $regex: searchTerm, $options: 'i' } },
          { choreographer: { $regex: searchTerm, $options: 'i' } }
        ]
      })
      .select('-dance_steps')  // Exclude the dance_steps field
      .limit(10)
      .exec();      
      res.json(dances);
    } catch (err) {
      console.error('Error searching dances:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Get a dance by ID
router.get('/dances/:id', async (req, res) => {
  try {
    const dance = await DanceDetails.findById(req.params.id);
    if (!dance) return res.status(404).send('Dance not found');
    res.json(dance);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/random-dance', async (req, res) => {
  console.log("🚀 ~ router.get ~ dance:", req)

  try {
    const count = await DanceDetails.countDocuments();
    const random = Math.floor(Math.random() * count);
    const dance = await DanceDetails.findOne().skip(random);

    if (!dance) {
      return res.status(404).send('No dance found');
    }
    console.log("🚀 ~ router.get ~ dance:", dance)

    res.json(dance);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update a dance by ID
// router.put('/dances/:id', async (req, res) => {
//   try {
//     const updatedDance = await Dance.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedDance) return res.status(404).send('Dance not found');
//     res.json(updatedDance);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

// // Delete a dance by ID
// router.delete('/dances/:id', async (req, res) => {
//   try {
//     const deletedDance = await Dance.findByIdAndDelete(req.params.id);
//     if (!deletedDance) return res.status(404).send('Dance not found');
//     res.json({ message: 'Dance deleted successfully' });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// Create a new dance
// router.post('/dances', async (req, res) => {
//   try {
//     const newDance = new Dance(req.body);
//     const savedDance = await newDance.save();
//     res.status(201).json(savedDance);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });


module.exports = router;
