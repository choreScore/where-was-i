# Schema Design

`pk` = Primary Key
`ref: >` = Many to one
`ref: <` = One to many
`ref: -` = One to one

## Customer Table

```
Table users {
  id int [pk]
  username varchar(32) [not null]
  password varchar(40) [not null]
}
```

## Tv Shows Table

```
Table tv_shows {
  id int [pk]
  name varchar(64) [not null]
}
```


## Auth Table
```
Table auth {
  aut_token varchar(64) [not null] [pk]
  user_id id [ref: > users.id, not null]
  expire_time date [not null]
}
```

## Users and Shows Table

```
Table user_show {
  product_id id [ref: > product.id, not null]
  order_id id [ ref: > order_info.id, not null]
  quantity int [not null]

  Indexes: {
    (product_id, order_id) [ name: 'order_product_index', unique ]
  }
}
```
