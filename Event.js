class Event {
    constructor() {
        this.eventDao = require('../daos/event_dao.js')
    }

    instantiate(json) {
        var event = new Event()

        event.json = json

        event.date from = event.json.date from

        // this is for nested models. to reference to the date from model eventibutes
        event.date fromsJson = event.json.date froms
        event.date froms = []
        event.date fromsJson.forEach(date fromJson => {
            const Date from = require('./date from.js')
            var date from = Date from.instantiate(date fromJson)
            date from.setEvent(date from)
            event.date froms.push(date from)
        });
        event.thread = event.json.thread

        // this is for nested models. to reference to the thread model eventibutes
        event.threadsJson = event.json.threads
        event.threads = []
        event.threadsJson.forEach(threadJson => {
            const Thread = require('./thread.js')
            var thread = Thread.instantiate(threadJson)
            thread.setEvent(thread)
            event.threads.push(thread)
        });
        event.label = event.json.label

        // this is for nested models. to reference to the label model eventibutes
        event.labelsJson = event.json.labels
        event.labels = []
        event.labelsJson.forEach(labelJson => {
            const Label = require('./label.js')
            var label = Label.instantiate(labelJson)
            label.setEvent(label)
            event.labels.push(label)
        });
        event.now = event.json.now

        // this is for nested models. to reference to the now model eventibutes
        event.nowsJson = event.json.nows
        event.nows = []
        event.nowsJson.forEach(nowJson => {
            const Now = require('./now.js')
            var now = Now.instantiate(nowJson)
            now.setEvent(now)
            event.nows.push(now)
        });
        event.context = event.json.context

        // this is for nested models. to reference to the context model eventibutes
        event.contextsJson = event.json.contexts
        event.contexts = []
        event.contextsJson.forEach(contextJson => {
            const Context = require('./context.js')
            var context = Context.instantiate(contextJson)
            context.setEvent(context)
            event.contexts.push(context)
        });
        event.thread project = event.json.thread project

        // this is for nested models. to reference to the thread project model eventibutes
        event.thread projectsJson = event.json.thread projects
        event.thread projects = []
        event.thread projectsJson.forEach(thread projectJson => {
            const Thread project = require('./thread project.js')
            var thread project = Thread project.instantiate(thread projectJson)
            thread project.setEvent(thread project)
            event.thread projects.push(thread project)
        });
        event.end = event.json.end

        // this is for nested models. to reference to the end model eventibutes
        event.endsJson = event.json.ends
        event.ends = []
        event.endsJson.forEach(endJson => {
            const End = require('./end.js')
            var end = End.instantiate(endJson)
            end.setEvent(end)
            event.ends.push(end)
        });
        return event

    }


    findByDate from(date from) {
        
        var json = this.date fromDao.findByDate from(date from)
        return this.instantiate(json)
    }
    findByThread(thread) {
        
        var json = this.threadDao.findByThread(thread)
        return this.instantiate(json)
    }
    findByLabel(label) {
        
        var json = this.labelDao.findByLabel(label)
        return this.instantiate(json)
    }
    findByNow(now) {
        
        var json = this.nowDao.findByNow(now)
        return this.instantiate(json)
    }
    findByContext(context) {
        
        var json = this.contextDao.findByContext(context)
        return this.instantiate(json)
    }
    findByThread project(thread project) {
        
        var json = this.thread projectDao.findByThread project(thread project)
        return this.instantiate(json)
    }
    findByEnd(end) {
        
        var json = this.endDao.findByEnd(end)
        return this.instantiate(json)
    }

    loadAll() {
        this.eventsJson = this.eventDao.loadAll()

        var events = []
        let eventClass = new Event()

        this.EventsJson.forEach(EventJson => {
            
            let event = eventClass.instantiate(EventJson)
            events.push(event)
        });
        return events
    }
}
module.exports = new Event()


const AirtablePlus = require('airtable-plus');
const airtable = require('airtable-plus-rest-dao-config.js');
const { create } = require('domain');
const config = { tableName: 'Events' };

class EventDao{
 
    async create({json){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id){
        const res = await airtable.find(id);
        return res
    }

    async findByDate from(date from){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Date from = '+date from,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByThread(thread){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Thread = '+thread,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByLabel(label){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Label = '+label,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByNow(now){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Now = '+now,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByContext(context){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Context = '+context,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByThread project(thread project){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Thread project = '+thread project,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByEnd(end){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'End = '+end,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    
     // this is for OF restriction. 
    async ofDate from(date from){ 
        const readRes = await airtable.read({
            filterByFormula: 'Date from = '+date from,
            maxRecords: 500
        });
        events = readRes // ? this must be more like the 
        return events
    }
 // this is for OF restriction. 
    async ofThread(thread){ 
        const readRes = await airtable.read({
            filterByFormula: 'Thread = '+thread,
            maxRecords: 500
        });
        events = readRes // ? this must be more like the 
        return events
    }
 // this is for OF restriction. 
    async ofLabel(label){ 
        const readRes = await airtable.read({
            filterByFormula: 'Label = '+label,
            maxRecords: 500
        });
        events = readRes // ? this must be more like the 
        return events
    }
 // this is for OF restriction. 
    async ofNow(now){ 
        const readRes = await airtable.read({
            filterByFormula: 'Now = '+now,
            maxRecords: 500
        });
        events = readRes // ? this must be more like the 
        return events
    }
 // this is for OF restriction. 
    async ofContext(context){ 
        const readRes = await airtable.read({
            filterByFormula: 'Context = '+context,
            maxRecords: 500
        });
        events = readRes // ? this must be more like the 
        return events
    }
 // this is for OF restriction. 
    async ofThread project(thread project){ 
        const readRes = await airtable.read({
            filterByFormula: 'Thread project = '+thread project,
            maxRecords: 500
        });
        events = readRes // ? this must be more like the 
        return events
    }
 // this is for OF restriction. 
    async ofEnd(end){ 
        const readRes = await airtable.read({
            filterByFormula: 'End = '+end,
            maxRecords: 500
        });
        events = readRes // ? this must be more like the 
        return events
    }
    
    async loadAllFromCache() {
        var fs = require('fs');
        var events = []
        var eventFiles = fs.readdirSync(process.cwd() + '/events/');

        eventsFiles.forEach(eventFile => {
            if (eventFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/events/' + eventFile)
                events.push(jsonObject)
            }

        });
        return events
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
module.exports = new EventDao()

