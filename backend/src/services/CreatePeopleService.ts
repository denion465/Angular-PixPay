import { getCustomRepository } from 'typeorm';
import People from '../model/People';

import PeopleRepository from '../repositories/PeopleRepository';

interface Request {
  name: string;
  last_name: string;
  age: string;
  city_uf: string;
  profission: string;
  wage: string;
}

class CreatePeopleService {
  public async execute({
    name,
    last_name,
    age,
    city_uf,
    profission,
    wage,
  }: Request): Promise<People> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = peopleRepository.create({
      name,
      last_name,
      age,
      city_uf,
      profission,
      wage,
    });

    await peopleRepository.save(people);

    return people;
  }
}

export default CreatePeopleService;
