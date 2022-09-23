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

function newSkill(req,res) {
  // console.log('This works!') // WHEN I CONSOLED LOGGED IT, IT SHOWED UP IN VSCODE SERVER TERMINAL!
  res.render('skills/new')
}

function create(req, res) {
  // console.log('req.body')
  Skill.create(req.body)
  .then(skill => {
		// REDIRECT SKILLS
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
}