module.exports = {
    getFood: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_Food()
        .then(Food => { res.status(200).send(Food); })
        .catch( err => {
          console.log(err);
          res.status(500).send(err);
        });
    }
  };