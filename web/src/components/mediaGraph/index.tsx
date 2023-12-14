import { useForm } from "react-hook-form";
import {
  DateDiv,
  DateContainer,
  DateInput,
  DateTitle,
  GraphContainer,
} from "./styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface cashflow {
  description: string;
  reference_date: string;
  quantity: number;
}

export default function MediaGraph({ data }: { data: cashflow[] }) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // 'en-GB' uses day/month/year format
  }

  const { register, watch } = useForm({
    defaultValues: {
      initial_date: "2022-01-01",
      end_date: "2030-12-31",
    },
  });

  watch("initial_date");

  let acc;
  let accProfit = 0;
  let accExpense = 0;

  const formatedData = data
    .filter((data) => {
      const initialDate = new Date(watch("initial_date"));
      const endDate = new Date(watch("end_date"));

      const referenceDate = new Date(data.reference_date);

      return (
        initialDate.getTime() <= referenceDate.getTime() &&
        referenceDate.getTime() <= endDate.getTime()
      );
    })
    .map((item) => {
      if (item.quantity > 0) {
        accProfit += item.quantity;
      } else {
        accExpense -= item.quantity;
      }

      console.log(accProfit);
      const ratio = accExpense == 0 ? 0 : accProfit / accExpense;

      acc = accProfit - accExpense;

      return {
        ...item,
        reference_date: formatDate(item.reference_date),
        quantity: acc,
        ratio: ratio,
        profit: accProfit,
        expense: accExpense,
      };
    });

  const lastElement = formatedData.at(-1);

  const resultadoMaior =
    lastElement && lastElement.profit > lastElement.expense
      ? "profit"
      : "expense";

  return (
    <GraphContainer>
      <DateContainer>
        <DateDiv>
          <DateTitle>Data inicial</DateTitle>
          <DateInput type="date" {...register("initial_date")} />
        </DateDiv>
        <DateDiv>
          <DateTitle>Data final</DateTitle>
          <DateInput type="date" {...register("end_date")} />
        </DateDiv>
      </DateContainer>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formatedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="reference_date" style={{ fill: "#fff" }} />
          <YAxis dataKey={resultadoMaior} style={{ fill: "#fff" }} />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="quantity" stroke="#ffd900" />
          <Line type="monotone" dataKey="expense" stroke="#ff0c0c" />
          <Line type="monotone" dataKey="profit" stroke="#14ff0c" />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
}
