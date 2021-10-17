import './alias/index.js';
import Repository from '@/repository';
import OrderformRepository from '@/repository/modules/OrderformRepository';
import OrderformService from './service/OrderForm';

export {
    // Repositories
    Repository,
    OrderformRepository,
    OrderformService,
}

// TODO: armazenar o orderformId no localStorage