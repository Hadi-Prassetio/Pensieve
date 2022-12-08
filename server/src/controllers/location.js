const { location } = require('../../models')
const Joi = require('joi')

exports.addLocation = async (req, res) => {
    try {
        const data = req.body
        // const scema = Joi.object({
        //     idDevice: Joi.integer().required(),
        //     location: Joi.string().required()
        // })

        // const {error} = scema.validate(data);

        // if(error){
        //     return res.status(400).send({
        //         error:{
        //             message : error.details[0].message,
        //         }
        //     })
        // };

        const newLocation = await location.create(data);
        res.send({
            status: 'success',
            newLocation
        });
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            message: 'server error'
        })
    }
};