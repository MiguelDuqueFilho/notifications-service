import { Module } from '@nestjs/common';
import { NotificationsController } from '../http/controllers/notifications.controller';

import { SendNotification } from '../../application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.mobule';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipients-notification';
import { CancelNotification } from '@application/use-cases/cancel-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    CancelNotification,
  ],
})
export class HttpModule {}
