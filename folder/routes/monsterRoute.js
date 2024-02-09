import Express from "express";
import { getMonster, getMonsters } from "../controllers/monsterController.js";

const router = Express.Router();

router.get("/", getMonsters);
router.get("/:id", getMonster);
// router.post("/", createSuperHero);
// router.patch("/:id", updateSuperHero);
// router.delete("/:id", deleteSuperHero);

export default router;
