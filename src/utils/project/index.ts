import { Project } from '../../store/project/project.types';
import { Report } from '../../store/report/report.types';

export const returnProjectName = (
  projectId: string,
  projectArray: Project[]
) => {
  return projectArray?.find((el) => el.projectId === projectId)?.name;
};

export const returnTotal = (arr: any) => {
  return arr
    .reduce((partialSum: any, a: any) => partialSum + a.amount, 0)
    .toFixed(0);
};
