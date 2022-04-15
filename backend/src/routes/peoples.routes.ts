import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import PeopleRepository from '../repositories/PeopleRepository';
import CreatePeopleService from '../services/CreatePeopleService';

const peoplesRouter = Router();

peoplesRouter.get('/', async (req, res) => {
  const peopleRepository = getCustomRepository(PeopleRepository);
  const peoples = await peopleRepository.find();

  return res.json(peoples);
});

peoplesRouter.post('/', async (req, res) => {
  try {
    const { name, last_name, age, city_uf, profission, wage } = req.body;

    const createPeople = new CreatePeopleService();

    const people = await createPeople.execute({
      name,
      last_name,
      age,
      city_uf,
      profission,
      wage,
    });

    return res.json(people);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default peoplesRouter;
