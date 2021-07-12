https://www.elastic.co/start

## Locallly

1. `saurabh.kumar@C02D70TBMD6N elasticsearch-7.13.1 % bin/elasticsearch`
2. `saurabh.kumar@C02D70TBMD6N kibana-7.13.1-darwin-x86_64 % bin/kibana`

3. decompress data/logs.jsonl

then go to

- http://localhost:5601/app/dev_tools#/console

## data types

- core -> `text, numeric, boolean, binary, range`
- complex -> `array, object, nested json`
- geo -> `geopoint - lat long, geoshape - polygons to draw a shape`
- specialized -> `handling ip / autocomplete / string token etc`

bool query -> when you need to group multiple match/term/terms/range queries

match query -> standard query for performing full text queries, including fuzzy matching and phrase or proximity queries
```
## must == and
GET bank/account/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": {"state": "CA"} },
        { "match": {"employer": "Techade"}}
      ]
    }
  }
}
```

term query -> only on keyword and numeric - will not work on text (use match)

```
# Returns null because "state" is a text field (hence not an exact match)
GET bank/account/_search
{
  "query": {
    "term": {
      "state": "RI"
    }
  }
}
```

terms query -> bulk search

```
GET bank/account/_search
{
  "query": {
    "terms": {
      "account_number": [516,851]
    }
  }
}
```

range query -> compare ranges

```
# Show all accounts between 516 and 851, boosting the importance
GET bank/account/_search
{
  "query": {
    "range": {
      "account_number": {
        "gte": 516,
        "lte": 851,
        "boost": 2
      }
    }
  }
}


```


## Analysers
1. standard -> lower cased tokens
2. letter -> 
3. english -> non plural
4. uax_url_email -> respects email symbols and verbs


## aggregations
- use size: 0 to not get any regular data

## Troubleshoot

- `ElasticsearchIllegalStateException[Failed to obtain node lock, is the following location writable?: [/home/user1/elasticsearch-1.4.4/data/elasticsearch]`

Solution

```bash
ps aux | grep 'java'

kill -9 <PID>
```

or

```bash
ps aux | grep 'elastic'
```
