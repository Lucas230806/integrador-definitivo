const Address = require('../models/Address')
const User = require('../models/User')


module.exports = class ElderlyController  {
  static async showApps(req, res){
    return res.render('partials/home') //Mostrando uma view
  }

  static async dashboardrender(req, res){
    return res.render('partials/dashboard') //Mostrando uma view
  }

  static async creditos(req, res){
    return res.render('partials/credtitos') //Mostrando uma view
  }

  static async dashboard(req, res){
    const userId = req.session.userId

const user = await User.findAll({
  where:{
    id:userId
  },
  include:Address,
  plain:true
})
  if(!user){
    res.redirect('/login')
  }

  const toughts = user.Address.map((result)=> result.dataValues)

  return res.render('partials/dashboard', {toughts})
 }

   static createElderly(req, res){
    return res.render('partials/create')
}
static async createElderlySave(req, res){

  const tought = {
    Qidosos: req.body.Qidosos,
    city: req.body.city,
    states: req.body.states,
    times: req.body.times,
    description: req.body.description,
    UserId:req.session.userId
  }

  try {
    await Address.create(tought)
    req.flash('message', 'Pensamento criado')
    req.session.save(()=>{
      res.render('partials/dashboard')
    })
  } catch (err){
    console.log(err)
  }

}

static perfilElderly(req, res){
  return res.render('partials/perfil')


}

static remedio(req, res){
  return res.render('partials/remedio')


}
// ************ Aqui Ainda não

static async removeElderly(req, res){
  const id = req.body.id
  const userId = req.session.userId

try {
  await Address.destroy({where: {id:id, UserId:userId}})

  req.flash('message', 'Pensamento removido ')
  req.session.save(()=>{
    res.redirect('/toughts/dashboard')
  })



}catch(err){
  console.log(`Aconteceu um erro`)
}


}

static async editElderly(req, res){
  const id = req.params.id;
  const userId = req.session.userId
  const elderly = await Address.findOne({raw:true, where: {id: id, UserId:userId}})
  return res.render('toughts/edit', {elderly})
}

static async updateElderly(req, res){
  const id = req.body.id
  const userId = req.session.userId
  const elderly = {
    Qidosos: req.body.Qidosos,
    city: req.body.city,
    states: req.body.states,
    times: req.body.times,
    description: req.body.description
  }
  try {
    await App.update(elderly, {where: {id: id, UserId:userId}})
    req.flash('message', 'Pensamento Atualizado ')
    req.session.save(()=>{
      res.redirect('/toughts/dashboard')
    })
  } catch{
  console.log(`Aconteceu um erro`)
  }

}

static async toggleStatus(req, res){
  const id = req.body.id
  const tought = {
      done: req.body.done === "0" ? true : false
  }
  await App.update(tought, {where: {id:id}})
  return res.redirect('toughts/dashboard')

}




}