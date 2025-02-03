import { WaitUtil } from '@/types/boilerplate.types';

const Wait: WaitUtil = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default Wait;
