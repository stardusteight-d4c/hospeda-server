interface ReplyDTO<T> {
  message: string | null;
  error: string | null;
  statusCode: number;
  data: T | null;
}
