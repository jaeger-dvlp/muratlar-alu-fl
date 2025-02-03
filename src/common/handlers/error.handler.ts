import { IClientError } from '@/types/boilerplate.types';

class ClientError extends Error implements IClientError {
  readonly name: string;

  readonly message: string;

  readonly code?: string | number | undefined;

  constructor({ message, code }: { message: string; code?: string | number }) {
    super(message);
    this.name = 'HelperError';
    this.message = message;
    this.code = code || undefined;
  }
}

export default ClientError;
