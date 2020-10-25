const AirtablePlus = require('airtable-plus');
const airtable = require('airtable-plus-rest-dao-config.js');
const { create } = require('domain');
const config = { tableName: 'MessagePosts' };

class MessagePostDao{
 
    async create({json){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id){
        const res = await airtable.find(id);
        return res
    }

    
        
    async loadAllFromCache() {
        var fs = require('fs');
        var messageposts = []
        var messagepostFiles = fs.readdirSync(process.cwd() + '/messageposts/');

        messagepostsFiles.forEach(messagepostFile => {
            if (messagepostFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/messageposts/' + messagepostFile)
                messageposts.push(jsonObject)
            }

        });
        return messageposts
    }

    async update(json){
        const updateRes = await airtable.update(json.id, {
            Name: 'foobar'
        }, config);
        return updateRes
    }

    delete(id){
        const deleteRes = await airtable.delete(id,config);
    }


}
module.exports = new MessagePostDao()

class MessagePost {
    constructor() {
        this.messagepostDao = require('../daos/messagepost_dao.js')
    }

    instantiate(json) {
        var messagepost = new MessagePost()

        messagepost.json = json

        return messagepost

    }



    loadAll() {
        this.messagepostsJson = this.messagepostDao.loadAll()

        var messageposts = []
        let messagepostClass = new MessagePost()

        this.MessagePostsJson.forEach(MessagePostJson => {
            
            let messagepost = messagepostClass.instantiate(MessagePostJson)
            messageposts.push(messagepost)
        });
        return messageposts
    }
}
module.exports = new MessagePost()


