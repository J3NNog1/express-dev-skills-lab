import { Router } from 'express'
import { skills } from '../data/skill-data.js'
import * as skillsCtrl from '../controllers/skills.js'


const router = Router()



/* GET skills listing. */
router.get('/', skillsCtrl.index)

router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

export {
  router
}
