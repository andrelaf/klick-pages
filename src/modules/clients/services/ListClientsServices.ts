
import { injectable, inject } from 'tsyringe';
import IClientsRepository from '../repositories/IClientsRepository';
import IPaginationDto from '@shared/dto/IPaginationDto';
import IPaginationResultDto from '@shared/dto/IPaginationResultDto';
import Pagination from '@shared/infra/http/Pagination';
interface Request{
  page: number;
  limit: number;
}

@injectable()
class  ListClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository) {}

  public async execute(paginationDto: IPaginationDto) : Promise<IPaginationResultDto> {
    const totalItems = await this.clientsRepository.count()
    const clients = await this.clientsRepository.findAllPaginated(paginationDto.page, paginationDto.limit)

    var paginated = new Pagination(totalItems,paginationDto.page,paginationDto.limit)
    var clientsPaginated = paginated.paginate();
    clientsPaginated.data = clients;
    return clientsPaginated;
  }
}

export default ListClientsService;