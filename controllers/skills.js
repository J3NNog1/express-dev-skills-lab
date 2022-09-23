import { Skill } from '../models/skill.js'



// DONT NEED TO IMPORT THIS FROM THE "FAKE DATA" 
// I WILL BE REPLACING WITH THE NEW IMPORT'./models/skill.js
// import { skills } from '../data/skill-data.js'


function index(req, res) {
//KEEP THE FUNCTION WITH EMPTY CURLY BRAKETS TO FIND ALL DOCUMENTS
  Skill.find({})
  .then(skills => { // todos represents the result of the query, in this case ALL todos
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}


export {
  index,
}