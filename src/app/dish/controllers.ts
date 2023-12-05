
// const { requestBodyFieldsChecker } = require('../../helpers/requestBodyFieldsChecker.js');
const { getReaponse } = require('../../helpers/responses.js');

const {
//     addDish,
    getDishsMod,
//     getDish,
//     deleteAllDishs,
//     deleteDish
} = require('./models.ts');

exports.getDishs = async (req: any, res: any) => {
  console.log('контролер')
    try {
      return await getDishsMod(req, res);
    } catch (error) {
      const message = getReaponse('DB-ERROR');
      return res.status(message.statusCode).json(message)
    }
}




