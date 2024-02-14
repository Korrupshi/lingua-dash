import { StudyData } from "../models/StudyData";

export default interface StudyDataSource {
  getAll(): Promise<StudyData[]>;
  getByDate(date: string): Promise<StudyData | undefined>;
  save(data: StudyData): void;
  saveAll(data: StudyData[]): void;
}
