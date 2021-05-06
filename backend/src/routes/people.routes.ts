import express from 'express';
import People from '../model/People';

const peopleRoutes = express.Router();

peopleRoutes.get('/peoples', async (req, res) => {
  const peoples = await People.find()
  res.send(peoples)
})

peopleRoutes.post('/peoples', async (req, res) => {
  try {
    const post = new People({
      name: req.body.name,
      lastName: req.body.lastName,
      age: req.body.age,
      cityUf: req.body.cityUf,
      profission: req.body.profission,
      wage: req.body.wage,
    })
    await post.save()
    res.send(post)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }

})

export default peopleRoutes;


