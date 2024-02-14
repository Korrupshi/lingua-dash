import StudyDataSource from "../../domain/datasource/StudyDataSource";
import { StudyData } from "../../domain/models/StudyData";
import StudyRepository from "../../domain/repository/StudyRepository";

export default class StudyRepositoryImpl implements StudyRepository {
  private studyDataSource: StudyDataSource;

  constructor(studyDataSource: StudyDataSource) {
    this.studyDataSource = studyDataSource;
  }

  getByDate(date: string): Promise<StudyData | undefined> {
    return this.studyDataSource.getByDate(date);
  }
  getAll(): Promise<StudyData[]> {
    return this.studyDataSource.getAll();
  }

  save(data: StudyData): void {
    this.studyDataSource.save(data);
  }
  saveAll(data: StudyData[]): void {
    this.studyDataSource.saveAll(data);
  }
}
