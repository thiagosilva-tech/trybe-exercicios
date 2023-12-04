const teams = require('../utils/teams');

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
    if (teams.some((team) => team.id === id)) {
        return next();
    }
    res.sendStatus(400);
};

module.export = existingId;