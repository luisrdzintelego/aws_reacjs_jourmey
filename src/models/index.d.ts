import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type JourneyDBMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class JourneyDB {
  readonly id: string;
  readonly Nombre?: string | null;
  readonly url_img?: string | null;
  readonly Negocio?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<JourneyDB, JourneyDBMetaData>);
  static copyOf(source: JourneyDB, mutator: (draft: MutableModel<JourneyDB, JourneyDBMetaData>) => MutableModel<JourneyDB, JourneyDBMetaData> | void): JourneyDB;
}