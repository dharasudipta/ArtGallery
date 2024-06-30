import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 3150,
  login: 'c82|@aRx\\pXw',
};

export const sampleWithPartialData: IUser = {
  id: 14452,
  login: '-@QBZF8\\67j3t\\WjBBHM\\6j5tIF\\qEjQB',
};

export const sampleWithFullData: IUser = {
  id: 15951,
  login: 'C@dls9f',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
