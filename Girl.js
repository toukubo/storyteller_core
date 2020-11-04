class Girl {
    constructor() {
        this.girlDao = require('../daos/girl_dao.js')
    }

    instantiate(json) {
        var girl = new Girl()

        girl.json = json

        return girl

    }



    loadAll() {
        this.girlsJson = this.girlDao.loadAll()

        var girls = []
        let girlClass = new Girl()

        this.GirlsJson.forEach(GirlJson => {
            
            let girl = girlClass.instantiate(GirlJson)
            girls.push(girl)
        });
        return girls
    }
}
module.exports = new Girl()


