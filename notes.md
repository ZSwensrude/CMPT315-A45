5 endpoints:
 - get/ - return all monsters
 - get/id - return specific monster
 - patch/id - return 200 (return the object) or 202 (return nothing)
 - post - return 200 (return the object)
 - delete - return 200 (new array/list) or 202 (nothing)

 - patch/id - when updating something that does not exist either handle and return error, or create new monster


required json properties:
- image
- name
- id
- address
- phone # and website
- some nested properties


This is the format for each monster:
```
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  },
  "image_url": "https://robohash.org/1?set=set2&size =15x15"
},
```
