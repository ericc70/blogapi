const Tag = require('../model/tag')

exports.CreateTag = (req, res, next) =>{
    const tagObj = JSON.parse(req.body.tag)
    delete tagObj._id;
  
    const tag = new Tag({
      ...tagObj
    });
    tag.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
}

exports.getAllTag = (req, res, next) =>{

  Tag.find().then(
    (tags) => {
      res.status(200).json(tags);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
exports.getOneTag = (req, res, next) =>{
    Tag.findOne({
        _id: req.params.id
      }).then(
        (tag) => {
          res.status(200).json(tag);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );

}
exports.updateTag = (req, res, next) =>{

    const tagObj = JSON.parse(req.body.tag)
    
    Tag.updateOne({_id : req.params.id}{...thingObject, _id: req.params.id})
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));

}



exports.deleteTag = (req, res, next) =>{
    Tag.findOne({ _id: req.params.id })
    .then(() => {
      
           Tag.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      
    })
    .catch(error => res.status(500).json({ error }));
}
