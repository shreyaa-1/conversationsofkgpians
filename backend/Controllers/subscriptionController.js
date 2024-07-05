const contactUsModel = require("../Models/subscriptionModel");
exports.postsubscription = async (req, res, next) => {
  try{

    const { email } = req.body;
    let con = await contactUsModel.create({email })
    return res.json({
        
      successMessage:"form succesfully submitted",
      formDetails:con
    })
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
