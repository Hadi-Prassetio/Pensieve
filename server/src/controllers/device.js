const { device, location } = require('../../models')
const Joi = require('joi')

exports.addDevice = async (req, res) => {
    try {
        const data = req.body;
        const deviceId = Math.floor(Math.random() * 10000);
        data.deviceId = `D-${deviceId}`

        const scema = Joi.object({
            deviceId: Joi.string().required(),
            deviceType: Joi.string().min(5).required(),
        })

        const {error} = scema.validate(data);

        if(error){
            return res.status(400).send({
                error:{
                    message : error.details[0].message,
                }
            })
        }

        const newDevice = await device.create(data);
        res.send({
            status:"success",
            newDevice
        })
    } catch (error) {
        res.stauts(500).send({
            status: "failed",
            message: "server error"
        })
    }
};

exports.getDevices = async(req, res) => {
    try {
        const devices = await device.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: {
                model: location,
                as: "locations",
            }
        }) 
        res.send({
            status: 'success',
            data: devices
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            message: 'server error'
        })
    }
};

exports.getDevice = async(req,res) => {
    try {
        const {id} = req.params
        const data = await device.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: {
                model: location,
                as: "locations",
            }
        });

        res.send({
            status: 'success',
            data: data
        })

    } catch (error) {
        res.status(500).send({
            status: 'failed',
            message: 'server error'
        })
    }
};