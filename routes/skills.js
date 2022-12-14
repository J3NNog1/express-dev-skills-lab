import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

//NO LONGER NEED THIS IMPORT BC WE ARE IMPORTING A REPLACEMENT FILE ON LINE 3
// import { skills } from '../data/skill-data.js'




const router = Router()



/* GET skills listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show) 

//POST -localhost:3000/skills
router.post('/', skillsCtrl.create)

//DELETE - localhost:3000/skills/:id
router.delete('/:id', skillsCtrl.delete)




router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})



export {
  router
}
