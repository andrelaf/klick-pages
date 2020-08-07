import Client from "../infra/typeorm/entities/Client";

export default interface IClientsResultPaginatedDto {
  data: Client[]
  page: number
  limit: number
  totalCount: number
}