import { IMediaRepository } from "../repositories/IMediaRepository";

interface IGraph {
  byRegion: Record<string, number>;
  byType: Record<string, number>;
  byProduct: Record<string, number>;
}

export class GetCashFlowPieChart {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(): Promise<IGraph> {
    const media = await this.mediaRepository.listAllWithCashFlow();

    const graph: IGraph = {
      byRegion: {},
      byType: {},
      byProduct: {},
    };

    media.forEach((media) => {
      media.MediaCashFlow.forEach((cashflow) => {
        graph.byRegion[media.region] = graph.byRegion[media.region] ?? 0;
        graph.byRegion[media.region] += cashflow.quantity;

        graph.byType[media.type] = graph.byType[media.type] ?? 0;
        graph.byType[media.type] += cashflow.quantity;
      });
    });

    return graph;
  }
}
