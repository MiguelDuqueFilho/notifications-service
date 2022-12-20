import { Module } from '@nestjs/common';
import { NotificationController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-comsumer.service';
import { SendNotification } from '../../application/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.mobule';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationController],
})
export class MessagingModule {}
