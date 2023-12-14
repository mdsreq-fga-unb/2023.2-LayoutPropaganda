"use client";

import { ResponsivePie } from "@nivo/pie";
import {
  Button,
  ButtonContainer,
  CenterContainer,
  Container,
  GraphContainer,
  Title,
} from "./styles";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

interface IPieChartData {
  byRegion: Record<string, number>;
  byType: Record<string, number>;
  byProduct: Record<string, number>;
}

export default function StatisticsPage() {
  const [data, setData] = useState<IPieChartData>({
    byRegion: {},
    byType: {},
    byProduct: {},
  });

  const getMedia = async (): Promise<IPieChartData> => {
    const response = await api.get("/medias/cashFlow/pieChart");
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMedia();

        console.log("response");
        console.log(response);

        setData(response);

        setSelectedData(formatData(response.byRegion));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const formatData = (data: Record<string, number>) => {
    return Object.entries(data).map(([key, value]) => ({
      id: key,
      value,
    }));
  };

  const dataByRegion = formatData(data.byRegion);
  const dataByType = formatData(data.byType);
  const dataByProduct = formatData(data.byProduct);

  const [selectedData, setSelectedData] = useState(dataByRegion);

  const CustomTooltip = ({ datum }) => (
    <div
      style={{
        color: datum.color,
        backgroundColor: "#00000066",
        padding: "1px",
        borderRadius: "4px",
      }}
    >
      <strong>{datum.id}</strong>: {datum.value}
    </div>
  );

  return (
    <Container>
      <CenterContainer>
        <Title>Análise</Title>

        <GraphContainer>
          <ResponsivePie
            data={selectedData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#ffffff"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            tooltip={CustomTooltip}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#fff",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </GraphContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              setSelectedData(dataByRegion);
            }}
          >
            Região
          </Button>
          <Button
            onClick={() => {
              setSelectedData(dataByType);
            }}
          >
            Tipo
          </Button>
          {/* <Button
            onClick={() => {
              setSelectedData(dataByProduct);
            }}
          >
            Produto
          </Button> */}
        </ButtonContainer>
      </CenterContainer>
    </Container>
  );
}
