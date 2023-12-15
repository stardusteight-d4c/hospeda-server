interface INotification {
  id: string;
  title: string;
  message: string;
  recipientId?: string;
  read: boolean;
  createdAt: Date;
}
