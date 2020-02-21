const ToolModel = require('../models/toolModal')

module.exports = {
    async store (req, res) {
        const tool = new ToolModel({
            title: req.body.title,
            link: req.body.link,
            description: req.body.description,
            tag: req.body.tag
        })
        
        const createdTool = await tool.save()
            //teste
            .then(result=>{
                res.json({ success: true, result: createdTool})
            })
            .catch(err=>{
                res.json({ success: false, result: err})
            })
    },
    async index (req, res) {
        await ToolModel.find()
            .then(result=>{
                if(!result) res.json({ success: true, result: "Não encontrado"})

                res.json({ success: true, result: result })
            })
            .catch(err=>{
                res.json({ success: true, result: err  })
            })
    },
    async show (req, res){
        
    },
    async delete (req, res){
       const removedTool = await ToolModel.remove({ _id: req.params.toolId })
       res.json(removedTool)
    }
}