import StudyDataSourceImpl from "../data/datasource/StudyDataSourceImpl";
import StudyRepositoryImpl from "../data/repository/StudyRepositoryImpl";
import StudyRepository from "../domain/repository/StudyRepository";

class RepositoryProvider {
  private static _instance: RepositoryProvider;
  studyRepository: StudyRepository;

  private constructor() {
    this.studyRepository = new StudyRepositoryImpl(new StudyDataSourceImpl());
  }

  public static get Instance() {
    // Do you need arguments? Make it a regular static method instead.
    return this._instance || (this._instance = new this());
  }
}
export const repositoryProvider = RepositoryProvider.Instance;
