const ToolModel = require('../models/toolModal')

module.exports = {
    store: (req, res)=>{
        const tool = new ToolModel({
            title: req.body.title,
            link: req.body.link,
            description: req.body.description,
            tag: req.body.tag
        })
        
        tool.save()
            //teste
            .then(result=>{
                res.json({ success: true, result: result})
            })
            .catch(err=>{
                res.json({ success: false, result: err})
            })
    },
    update: (req, res)=>{
        ToolModel.findByIdAndUpdate(req.body.toolId,{
            title: req.body.title,
            link: req.body.link,
            description: req.body.description,
            tag: req.body.tag
        }, { new: true })
        .then(tool=>{
            if(!tool) res.json({ success: false, result: "Não encontrado"})
                
            res.json(tool)
        })
        .catch(err=>{
            res.json({ success: false, result: err})
        })
    },
    index: (req, res)=>{
        ToolModel.find()
            .then(result=>{
                if(!result) res.json({ success: true, result: "Não encontrado"})

                res.json({ success: true, result: result})
            })
            .catch(err=>{
                res.json({ success: true, result: err  })
            })
    },
    show: (req, res)=>{

    }
}