import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { repositoryProvider } from "../../../di/RepositoryProvider";
import { StudyData } from "../../../domain/models/StudyData";
import { LargeGraphContainer } from "./LargeGraphContainer";

export const WeeklystudyGraph = () => {
  var studyRepository = repositoryProvider.studyRepository;

  const [data, setData] = useState<StudyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const studyData = await studyRepository.getAll();
      setData(studyData);
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <LargeGraphContainer title="2024" content={<BarGraph data={data} />} />
  );
};

const BarGraph: React.FC<{ data: StudyData[] }> = ({ data }) => {
  const studyDataToWeeklyData = (data: StudyData[]): WeeklyStudy[] => {
    const uiData: WeeklyStudy[] = data.map((it: StudyData) => {
      return { date: it.date.substring(5), studyMin: it.readMin };
    });
    return uiData;
  };

  return (
    <div className="flex flex-col text-center w-full h-full">
      <div className="flex items-center">
        <p className="-rotate-90">Min</p>
        <ResponsiveContainer
          className="flex h-full w-full "
          width={600}
          height={300}
        >
          <BarChart data={studyDataToWeeklyData(data)}>
            <XAxis dataKey="date" stroke="#FFF" color="#fff" />
            <YAxis dataKey="studyMin" stroke="#FFF" />
            <Tooltip />
            <Bar dataKey="studyMin" fill="#14CB42" width={10} maxBarSize={60}>
              {/* {data.map((entry, index) => (
                <Cell key={`cell-${index}`} name={entry.date.substring(5)} />
              ))} */}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p>Date</p>
    </div>
  );
};

interface WeeklyStudy {
  date: string;
  studyMin: number;
}
