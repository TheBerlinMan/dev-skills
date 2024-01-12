
// import { skills } from '../data/skills-data.js'

import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
    }) 
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req,res){
  res.render('skills/new')
}

function create(req,res){
  console.log(req.body)
  console.log(req.body.done = false);
  req.body.done = false
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}


export {
  index,
  newSkill as new,
  create,
}