#Event Dashboard

This is a project that displays a list of events from a given URL on a web page. 

By default, the page will display a list of events loaded from https://gist.githubusercontent.com/yiwenluo/9d60c89c8e019151f2a3/raw/yiwenluo-events.json

If you want to load an event from a different URL, you can load events from your own JSON file by run the following command in the browser console. 
```
 EventListing.showEventsFromUrl("https://yourUrl/toYour.json") 
```

An example of the JSON file should look like this. 
```
{
  "events": [
    {
      "occasion": "Birthday party",
      "invited_count": 120,
      "year": 2015,
      "month": 3,
      "day": 14
    },
    {
      "occasion": "Technical discussion",
      "invited_count": 23,
      "year": 2015,
      "month": 4,
      "day": 24
    },
    {
      "occasion": "Press release",
      "invited_count": 64,
      "year": 2015,
      "month": 6,
      "day": 7,
      "cancelled": true
    },
    {
      "occasion": "New year party",
      "invited_count": 55,
      "year": 2016,
      "month": 1,
      "day": 1
    }
  ]
}
```

# Areas of improvements
* Provide a User Interface the allow users to easily load or reload the events from a given URL. 
* Use Templates to construct DOM element more cleanly. Or, use React to deal with DOM more efficiently
* 
