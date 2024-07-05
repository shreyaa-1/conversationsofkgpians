const contactUsModel = require("../Models/formModel");
exports.postform = async (req, res, next) => {
  try{

    const { name, email, contact, linkedin_url } = req.body;
    let con = await contactUsModel.create({ name, email, contact, linkedin_url })
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
