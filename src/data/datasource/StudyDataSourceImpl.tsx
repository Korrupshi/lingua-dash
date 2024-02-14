import StudyDataSource from "../../domain/datasource/StudyDataSource";
import { StudyData } from "../../domain/models/StudyData";

export default class StudyDataSourceImpl implements StudyDataSource {
  private demoData: StudyData[] = [
    {
      date: "2024-02-14",
      readMin: 56,
      listenMin: 12,
      speakingMin: 10,
      passiveMin: 5,
      otherMin: 0,
    },
    {
      date: "2024-02-13",
      readMin: 122,
      listenMin: 12,
      speakingMin: 100,
      passiveMin: 50,
      otherMin: 5,
    },
    {
      date: "2024-02-12",
      readMin: 34,
      listenMin: 12,
      speakingMin: 0,
      passiveMin: 0,
      otherMin: 0,
    },
    {
      date: "2024-02-11",
      readMin: 233,
      listenMin: 12,
      speakingMin: 0,
      passiveMin: 0,
      otherMin: 0,
    },
    {
      date: "2024-02-10",
      readMin: 200,
      listenMin: 12,
      speakingMin: 0,
      passiveMin: 0,
      otherMin: 0,
    },
  ];

  constructor() {}
  saveAll(data: StudyData[]): void {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<StudyData[]> {
    return new Promise<StudyData[]>((resolve, reject) => {
      resolve(this.demoData); // Resolve the promise with the data
    });
  }

  getByDate(date: string): Promise<StudyData | undefined> {
    return new Promise<StudyData | undefined>((resolve, reject) => {
      var data = this.demoData.find((value: StudyData) => value.date === date);
      resolve(data); // Resolve the promise with the data
    });
  }

  save(data: StudyData): void {
    throw new Error("Method not implemented.");
  }
}
