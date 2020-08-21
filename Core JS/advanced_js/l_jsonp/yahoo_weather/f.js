/**/
processData({
    "query": {
        "count": 1,
        "created": "2017-09-16T05:15:48Z",
        "lang": "en",
        "diagnostics": {
            "cache": {
                "execution-start-time": "0",
                "execution-stop-time": "1",
                "execution-time": "1",
                "method": "GET",
                "type": "MEMCACHED",
                "content": "ENV.queryyahooapiscomproductionsg3.store://datatables.org/alltableswithkeys.15a841ff462a38eb6175e73b4dc747ef"
            },
            "env": "Failed to read from storage: store://datatables.org/alltableswithkeys: Invalid store url: store://datatables.org/alltableswithkeys",
            "warning": "Invalid environment specified: store://datatables.org/alltableswithkeys",
            "publiclyCallable": "true",
            "url": [{
                "execution-start-time": "4",
                "execution-stop-time": "5",
                "execution-time": "1",
                "content": "http://unifiedgeo.geotech.yahoo.com:4080/geo/v1/geocode?q=delhi%2C%20in&start=0&size=1&optionalfields=woe.ancestors&minconfidence=0.0001"
            }, {
                "execution-start-time": "7",
                "execution-stop-time": "12",
                "execution-time": "5",
                "content": "http://weather-ydn-yql.media.yahoo.com:4080/v3/public/weather/rss?w=2295019"
            }],
            "javascript": {
                "execution-start-time": "3",
                "execution-stop-time": "6",
                "execution-time": "3",
                "instructions-used": "14759",
                "table-name": "geo.places"
            },
            "user-time": "12",
            "service-time": "7",
            "build-version": "2.0.177"
        },
        "results": {
            "channel": {
                "units": {
                    "distance": "mi",
                    "pressure": "in",
                    "speed": "mph",
                    "temperature": "F"
                },
                "title": "Yahoo! Weather - Delhi, DL, IN",
                "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2295019/",
                "description": "Yahoo! Weather for Delhi, DL, IN",
                "language": "en-us",
                "lastBuildDate": "Sat, 16 Sep 2017 10:45 AM IST",
                "ttl": "60",
                "location": {
                    "city": "Delhi",
                    "country": "India",
                    "region": " DL"
                },
                "wind": {
                    "chill": "82",
                    "direction": "0",
                    "speed": "4"
                },
                "atmosphere": {
                    "humidity": "70",
                    "pressure": "982.0",
                    "rising": "0",
                    "visibility": "16.1"
                },
                "astronomy": {
                    "sunrise": "6:7 am",
                    "sunset": "6:25 pm"
                },
                "image": {
                    "title": "Yahoo! Weather",
                    "width": "142",
                    "height": "18",
                    "link": "http://weather.yahoo.com",
                    "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
                },
                "item": {
                    "title": "Conditions for Delhi, DL, IN at 09:30 AM IST",
                    "lat": "28.643999",
                    "long": "77.091003",
                    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2295019/",
                    "pubDate": "Sat, 16 Sep 2017 09:30 AM IST",
                    "condition": {
                        "code": "28",
                        "date": "Sat, 16 Sep 2017 09:30 AM IST",
                        "temp": "83",
                        "text": "Mostly Cloudy"
                    },
                    "forecast": [{
                        "code": "28",
                        "date": "16 Sep 2017",
                        "day": "Sat",
                        "high": "91",
                        "low": "77",
                        "text": "Mostly Cloudy"
                    }, {
                        "code": "28",
                        "date": "17 Sep 2017",
                        "day": "Sun",
                        "high": "90",
                        "low": "78",
                        "text": "Mostly Cloudy"
                    }, {
                        "code": "30",
                        "date": "18 Sep 2017",
                        "day": "Mon",
                        "high": "94",
                        "low": "77",
                        "text": "Partly Cloudy"
                    }, {
                        "code": "30",
                        "date": "19 Sep 2017",
                        "day": "Tue",
                        "high": "92",
                        "low": "76",
                        "text": "Partly Cloudy"
                    }, {
                        "code": "4",
                        "date": "20 Sep 2017",
                        "day": "Wed",
                        "high": "88",
                        "low": "78",
                        "text": "Thunderstorms"
                    }, {
                        "code": "4",
                        "date": "21 Sep 2017",
                        "day": "Thu",
                        "high": "82",
                        "low": "78",
                        "text": "Thunderstorms"
                    }, {
                        "code": "47",
                        "date": "22 Sep 2017",
                        "day": "Fri",
                        "high": "80",
                        "low": "77",
                        "text": "Scattered Thunderstorms"
                    }, {
                        "code": "4",
                        "date": "23 Sep 2017",
                        "day": "Sat",
                        "high": "82",
                        "low": "77",
                        "text": "Thunderstorms"
                    }, {
                        "code": "4",
                        "date": "24 Sep 2017",
                        "day": "Sun",
                        "high": "84",
                        "low": "75",
                        "text": "Thunderstorms"
                    }, {
                        "code": "4",
                        "date": "25 Sep 2017",
                        "day": "Mon",
                        "high": "86",
                        "low": "75",
                        "text": "Thunderstorms"
                    }],
                    "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/28.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Mostly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Sat - Mostly Cloudy. High: 91Low: 77\n<BR /> Sun - Mostly Cloudy. High: 90Low: 78\n<BR /> Mon - Partly Cloudy. High: 94Low: 77\n<BR /> Tue - Partly Cloudy. High: 92Low: 76\n<BR /> Wed - Thunderstorms. High: 88Low: 78\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2295019/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
                    "guid": {
                        "isPermaLink": "false"
                    }
                }
            }
        }
    }
});