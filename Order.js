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

import { RemoteDataSource } from "../../order";
import { Order } from "../orders/order";

export class OrderRepository {
  private datasource: RemoteDataSource<Order>;

  constructor(datasource: RemoteDataSource<Order>) {
    this.datasource = datasource;
  }

  async fetchList(): Promise<Order[]> {
    return this.datasource.fetch();
  }
}
import { Model } from "../../type";

export interface Order extends Model<typeof Order> {}

export class Order implements Model<typeof Order> {
  constructor(
          readonly status: any,
          readonly fraud_status: any,
          readonly created_at: any,
          readonly updated_at: any,
          readonly order_key: any,
          readonly shipping_cost: any,
          readonly amount: any,
          readonly order_token: any,
          readonly payment_uid: any,
          readonly current_order_transaction_id: any,
          readonly discount_amount: any,
          readonly backer_id: any,
          readonly payment_type: any,
          readonly deleted_at: any,
          readonly id: any,
  ) {
        this.status = status;
        this.fraud_status = fraud_status;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.order_key = order_key;
        this.shipping_cost = shipping_cost;
        this.amount = amount;
        this.order_token = order_token;
        this.payment_uid = payment_uid;
        this.current_order_transaction_id = current_order_transaction_id;
        this.discount_amount = discount_amount;
        this.backer_id = backer_id;
        this.payment_type = payment_type;
        this.deleted_at = deleted_at;
        this.id = id;

  }

  toData() {
    return "";
  }
}




