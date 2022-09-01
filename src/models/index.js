// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { JourneyDB } = initSchema(schema);

export {
  JourneyDB
};