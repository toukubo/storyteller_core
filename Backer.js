recHZ4yK5dr1FEqHK
: is verb_id
[
  {
    name: 'campfire-airtable-typescript',
    project: [ 'recjYYAFFcSoySyxN' ],
    Templates: [ 'reccqSguJsk2LTGrm' ],
    'template layer': [ 'recA7f2KZkWy4l49i' ],
    id_string: 'campfire-airtable-typescript',
    repository_url: 'https://github.com///campfire-airtable-typescript',
    id: 'reccAUjoIXmm1CxZK'
  },
  {
    name: 'campfire-typescript',
    project: [ 'recjYYAFFcSoySyxN' ],
    Templates: [ 'reckGjMyIGBYyYoW8', 'recgUqWZNwyb0Hscq' ],
    'template layer': [ 'rec94pRcG9rWjOgvM', 'recjeomVz4Dila4fl' ],
    id_string: 'campfire-typescript',
    repository_url: 'https://github.com///campfire-typescript',
    id: 'recnztnk9FK9AjfTa'
  },
  {
    name: 'campfire-redash-airtable',
    project: [ 'recjYYAFFcSoySyxN' ],
    Templates: [ 'reciajOQ1QS8aS9s6' ],
    'template layer': [ 'recA7f2KZkWy4l49i' ],
    id_string: 'campfire-redash-airtable',
    repository_url: 'https://github.com///campfire-redash-airtable',
    id: 'rectfhi4uKexp4may'
  }
]
: is frameworks

import { RemoteDataSource } from "../../backer";
import { Backer } from "../backers/backer";

export class BackerRepository {
  private datasource: RemoteDataSource<Backer>;

  constructor(datasource: RemoteDataSource<Backer>) {
    this.datasource = datasource;
  }

  async fetchList(): Promise<Backer[]> {
    return this.datasource.fetch();
  }
}
import { Model } from "../../type";

export interface Backer extends Model<typeof Backer> {}

export class Backer implements Model<typeof Backer> {
  constructor(
          readonly deleted_at: any,
          readonly back_type: any,
          readonly amount: any,
          readonly private_comment: any,
          readonly transaction_fee: any,
          readonly executed_at: any,
          readonly back_flow_version: any,
          readonly user_id: any,
          readonly project_id: any,
          readonly created_at: any,
          readonly comment: any,
          readonly status: any,
          readonly updated_at: any,
          readonly additional_amount: any,
          readonly payment_limit_at: any,
          readonly status_fixed_at: any,
          readonly received_at: any,
          readonly id: any,
  ) {
        this.deleted_at = deleted_at;
        this.back_type = back_type;
        this.amount = amount;
        this.private_comment = private_comment;
        this.transaction_fee = transaction_fee;
        this.executed_at = executed_at;
        this.back_flow_version = back_flow_version;
        this.user_id = user_id;
        this.project_id = project_id;
        this.created_at = created_at;
        this.comment = comment;
        this.status = status;
        this.updated_at = updated_at;
        this.additional_amount = additional_amount;
        this.payment_limit_at = payment_limit_at;
        this.status_fixed_at = status_fixed_at;
        this.received_at = received_at;
        this.id = id;

  }

  toData() {
    return "";
  }
}




