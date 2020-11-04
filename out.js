class Node {
    constructor() {
        this.nodeDao = require('../daos/node_dao.js')
    }

    instantiate(json) {
        var node = new Node()

        node.json = json

        node.status = node.json.status

        // this is for nested models. to reference to the status model nodeibutes
        node.statussJson = node.json.statuss
        node.statuss = []
        node.statussJson.forEach(statusJson => {
            const Status = require('./status.js')
            var status = Status.instantiate(statusJson)
            status.setNode(status)
            node.statuss.push(status)
        });
        return node

    }


    findByStatus(status) {
        
        var json = this.statusDao.findByStatus(status)
        return this.instantiate(json)
    }

    loadAll() {
        this.nodesJson = this.nodeDao.loadAll()

        var nodes = []
        let nodeClass = new Node()

        this.NodesJson.forEach(NodeJson => {
            
            let node = nodeClass.instantiate(NodeJson)
            nodes.push(node)
        });
        return nodes
    }
}
module.exports = new Node()


const AirtablePlus = require('airtable-plus');
const airtable = require('airtable-plus-rest-dao-config.js');
const { create } = require('domain');
const config = { tableName: 'Nodes' };

class NodeDao{
 
    async create({json){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id){
        const res = await airtable.find(id);
        return res
    }

    async findByStatus(status){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Status = '+status,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    
     // this is for OF restriction. 
    async ofStatus(status){ 
        const readRes = await airtable.read({
            filterByFormula: 'Status = '+status,
            maxRecords: 500
        });
        nodes = readRes // ? this must be more like the 
        return nodes
    }
    
    async loadAllFromCache() {
        var fs = require('fs');
        var nodes = []
        var nodeFiles = fs.readdirSync(process.cwd() + '/nodes/');

        nodesFiles.forEach(nodeFile => {
            if (nodeFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/nodes/' + nodeFile)
                nodes.push(jsonObject)
            }

        });
        return nodes
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
module.exports = new NodeDao()

