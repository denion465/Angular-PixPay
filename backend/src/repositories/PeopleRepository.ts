import { EntityRepository, Repository } from 'typeorm';
import People from '../model/People';

@EntityRepository(People)
class PeopleRepository extends Repository<People> {}

export default PeopleRepository;
