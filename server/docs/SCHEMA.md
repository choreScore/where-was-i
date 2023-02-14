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
  show_id id [ref: > tv_shows.id, not null]
  user_id id [ ref: > order_info.id, not null]
  show_progress varchar(64) [not null]

  Indexes: {
    (show_id, user_id) [ name: 'show_user_index', unique ]
  }
}
```
