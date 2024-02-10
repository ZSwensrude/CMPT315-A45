import Express from "express";
import { createMonster, deleteMonster, getMonster, getMonsters, updateMonster } from "../controllers/monsterController.js";

const router = Express.Router();

// example get: http://localhost:3000/monsters/
router.get("/", getMonsters);
// example get: http://localhost:3000/monsters/3
router.get("/:id", getMonster);
/* example: post with the following object in the body:
{
  "name": "test",
  "username": "Bret",
  "email": "test.biz",
  "address": {
    "street": "test",
    "suite": "test",
    "city": "test",
    "zipcode": "test",
    "geo": {
      "lat": "test",
      "lng": "test"
    }
  },
  "phone": "test",
  "website": "test.org",
  "company": {
    "name": "test",
    "catchPhrase": "test-layered client-server neural-net",
    "bs": "test real-time e-markets"
  },
  "image_url": "https://robohash.org/1?set=set2&size =15x15"
}
*/ 
router.post("/", createMonster);
router.patch("/:id", updateMonster);
router.delete("/:id", deleteMonster);

export default router;
