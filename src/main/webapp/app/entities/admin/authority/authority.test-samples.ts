import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9a7d9155-33ec-423b-9e26-40f180708981',
};

export const sampleWithPartialData: IAuthority = {
  name: '4efda8a8-b555-4d45-a681-a5baded2c022',
};

export const sampleWithFullData: IAuthority = {
  name: '26dc5e62-7bb9-4e85-b9e4-7324c0a53d09',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
