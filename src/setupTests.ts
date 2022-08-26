import '@testing-library/jest-dom/extend-expect';

const windowMock = {
  scrollTo: jest.fn(),
};

Object.assign(global, global, windowMock);