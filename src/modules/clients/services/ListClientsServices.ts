
import { injectable, inject } from 'tsyringe';
import IClientsRepository from '../repositories/IClientsRepository';
import IClientsResultPaginatedDto from '../dto/IClientsResultPaginatedDto';
import IPaginationDto from '@shared/dto/IPaginationDto';

interface Request{
  page: number;
  limit: number;
}

@injectable()
class  ListClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository) {}

  public async execute(paginationDto: IPaginationDto) : Promise<IClientsResultPaginatedDto> {
    const totalCount = await this.clientsRepository.count()
    const products = await this.clientsRepository.findAllPaginated(paginationDto.page, paginationDto.limit)

    return {
      totalCount,
      page: paginationDto.page,
      limit: paginationDto.limit,
      data: products,
    }
  }
}

export default ListClientsService;