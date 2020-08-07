
import {container} from 'tsyringe';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import ClientsRepository from '@modules/clients/infra/typeorm/repositories/ClientsRepository';
import ITagsRepository from '@modules/tags/repositories/ITagsRepository';
import TagsRepository from '@modules/tags/infra/typeorm/repositories/TagsRepository';
import IFormsRepository from '@modules/forms/repositories/IFormsRepository';
import FormsRepository from '@modules/forms/infra/typeorm/repositories/FormsRepository';

container.registerSingleton<IClientsRepository>('ClientsRepository',ClientsRepository);
container.registerSingleton<IFormsRepository>('FormsRepository',FormsRepository);
container.registerSingleton<ITagsRepository>('TagsRepository',TagsRepository);