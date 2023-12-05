
// const { requestBodyFieldsChecker } = require('../../helpers/requestBodyFieldsChecker.js');
const { getReaponse } = require('../../helpers/responses.js');

const {
    addDishMod,
    getDishsMod,
//     getDish,
//     deleteAllDishs,
//     deleteDish
} = require('./models.ts');

exports.addDish = async (req: any, res: any) => {
  try {
    console.log('контролер')
    return await addDishMod(req, res);
  } catch (error) {
    console.log(error)
    const message = getReaponse('DB-ERROR');
    res.status(message.statusCode).json(message)
  }
}

exports.getDishs = async (req: any, res: any) => {
  console.log('контролер')
  try {
    return await getDishsMod(req, res);
  } catch (error) {
    const message = getReaponse('DB-ERROR');
    return res.status(message.statusCode).json(message)
  }
}




