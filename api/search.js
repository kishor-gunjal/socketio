const UserModel = require("../models/UserModel");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");


router.get('/:searchText',authMiddleware,async(req, res) => {
      const searchText = req.params;
      if(searchText.length > 0)  return;

      

      try{

        // const userPattern = new RegExp(`^${searchText}`);
        const result = await UserModel.find({
            searchText, options: 'i'
        })
        console.log(result);

         res.json(result);

      }catch(err){
          console.error(err);
      }
})





module.exports = router;
