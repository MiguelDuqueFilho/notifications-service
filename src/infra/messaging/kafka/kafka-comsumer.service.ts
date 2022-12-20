import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import processEnv from 'node:process';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  async onModuleDestroy() {
    await this.close();
  }

  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['proven-aardvark-11874-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cHJvdmVuLWFhcmR2YXJrLTExODc0JEPj9yzMl1sBFkEG4E1wtLCHXlTmdrMKOlE',
          password:
            'I9aZ2wkg8FMxMnGjouE-iAeNBjU2QdQsPaErdIED702IuvMAJexIMNw8tA5LeCvfZempJg==',
        },
        ssl: true,
      },
    });
  }
}
