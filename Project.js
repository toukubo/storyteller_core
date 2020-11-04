import { RemoteDataSource } from "../../../type";
import { Project } from "../../models/project";

import { AirtablePlus } from 'airtable-plus';
import { airtable } from 'airtable-plus-rest-dao-config.js';
import { create } from 'domain'

const config = { tableName: 'Projects' } 

export class ProjectAirtableData implements RemoteDataSource<Project>{
 
    async create(json:object){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id:string){
        const res = await airtable.find(id);
        return res
    }
    fromData(row: any): Project { 
        return new Project(
            hoge
            row.priority,
            row.id,
            row.pay_a_commission_fee_rate,
            row.area_id,
            row.editing_version_id,
            row.is_factoring,
            row.is_send_restore_mail,
            row.funded_at,
            row.preview_token,
            row.last_rejected_at,
            row.succeeded_at,
            row.created_at,
            row.first_submitted_at,
            row.last_submitted_at,
            row.transfer_method,
            row.community_finished_at,
            row.payment_status,
            row.project_activities_count,
            row.excluded_from_facebook,
            row.payment_requested_at,
            row.alliance_partner_supported,
            row.excluded_from_gdr,
            row.project_rewards_overseas_count,
            row.deleted_at,
            row.support_fee_status,
            row.visibility,
            row.status,
            row.approved_version_id,
            row.commission_fee_rate,
            row.first_payment_requested_at,
            row.project_option_type,
            row.user_bank_account_id,
            row.submit_count,
            row.funding_type,
            row.project_type,
            row.updated_at,
            row.additional_fee_rate,
            row.advertising_cost,
            row.project_source_id,
            row.guest_backable,
            row.curator_id,
            row.excluded_from_criteo,
            row.backer_total,
            row.will_enable_show_coming_soon_at,
            row.user_id,
            row.theme_type,
            row.backer_count,
            row.show_coming_soon,
            row.project_inflow_id,
            row.tax_free,
        );
    }

    async findBypriority(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Priority = '+priority,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByid(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Id = '+id,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBypay_a_commission_fee_rate(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Pay_a_commission_fee_rate = '+pay_a_commission_fee_rate,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByarea_id(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Area_id = '+area_id,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByediting_version_id(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Editing_version_id = '+editing_version_id,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByis_factoring(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Is_factoring = '+is_factoring,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByis_send_restore_mail(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Is_send_restore_mail = '+is_send_restore_mail,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByfunded_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Funded_at = '+funded_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBypreview_token(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Preview_token = '+preview_token,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBylast_rejected_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Last_rejected_at = '+last_rejected_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBysucceeded_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Succeeded_at = '+succeeded_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBycreated_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Created_at = '+created_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByfirst_submitted_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'First_submitted_at = '+first_submitted_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBylast_submitted_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Last_submitted_at = '+last_submitted_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBytransfer_method(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Transfer_method = '+transfer_method,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBycommunity_finished_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Community_finished_at = '+community_finished_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBypayment_status(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Payment_status = '+payment_status,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByproject_activities_count(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Project_activities_count = '+project_activities_count,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByexcluded_from_facebook(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Excluded_from_facebook = '+excluded_from_facebook,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBypayment_requested_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Payment_requested_at = '+payment_requested_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByalliance_partner_supported(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Alliance_partner_supported = '+alliance_partner_supported,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByexcluded_from_gdr(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Excluded_from_gdr = '+excluded_from_gdr,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByproject_rewards_overseas_count(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Project_rewards_overseas_count = '+project_rewards_overseas_count,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBydeleted_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Deleted_at = '+deleted_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBysupport_fee_status(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Support_fee_status = '+support_fee_status,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByvisibility(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Visibility = '+visibility,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBystatus(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Status = '+status,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByapproved_version_id(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Approved_version_id = '+approved_version_id,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBycommission_fee_rate(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Commission_fee_rate = '+commission_fee_rate,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByfirst_payment_requested_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'First_payment_requested_at = '+first_payment_requested_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByproject_option_type(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Project_option_type = '+project_option_type,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByuser_bank_account_id(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'User_bank_account_id = '+user_bank_account_id,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBysubmit_count(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Submit_count = '+submit_count,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByfunding_type(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Funding_type = '+funding_type,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByproject_type(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Project_type = '+project_type,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByupdated_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Updated_at = '+updated_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByadditional_fee_rate(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Additional_fee_rate = '+additional_fee_rate,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByadvertising_cost(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Advertising_cost = '+advertising_cost,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByproject_source_id(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Project_source_id = '+project_source_id,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByguest_backable(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Guest_backable = '+guest_backable,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBycurator_id(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Curator_id = '+curator_id,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByexcluded_from_criteo(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Excluded_from_criteo = '+excluded_from_criteo,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBybacker_total(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Backer_total = '+backer_total,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBywill_enable_show_coming_soon_at(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Will_enable_show_coming_soon_at = '+will_enable_show_coming_soon_at,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByuser_id(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'User_id = '+user_id,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBytheme_type(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Theme_type = '+theme_type,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBybacker_count(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Backer_count = '+backer_count,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByshow_coming_soon(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Show_coming_soon = '+show_coming_soon,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByproject_inflow_id(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Project_inflow_id = '+project_inflow_id,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBytax_free(){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Tax_free = '+tax_free,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    
     // this is for OF restriction. 
    async ofPriority(priority){ 
        const readRes = await airtable.read({
            filterByFormula: 'Priority = '+priority,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofId(id){ 
        const readRes = await airtable.read({
            filterByFormula: 'Id = '+id,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofPay_a_commission_fee_rate(pay_a_commission_fee_rate){ 
        const readRes = await airtable.read({
            filterByFormula: 'Pay_a_commission_fee_rate = '+pay_a_commission_fee_rate,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofArea_id(area_id){ 
        const readRes = await airtable.read({
            filterByFormula: 'Area_id = '+area_id,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofEditing_version_id(editing_version_id){ 
        const readRes = await airtable.read({
            filterByFormula: 'Editing_version_id = '+editing_version_id,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofIs_factoring(is_factoring){ 
        const readRes = await airtable.read({
            filterByFormula: 'Is_factoring = '+is_factoring,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofIs_send_restore_mail(is_send_restore_mail){ 
        const readRes = await airtable.read({
            filterByFormula: 'Is_send_restore_mail = '+is_send_restore_mail,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofFunded_at(funded_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Funded_at = '+funded_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofPreview_token(preview_token){ 
        const readRes = await airtable.read({
            filterByFormula: 'Preview_token = '+preview_token,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofLast_rejected_at(last_rejected_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Last_rejected_at = '+last_rejected_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofSucceeded_at(succeeded_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Succeeded_at = '+succeeded_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofCreated_at(created_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Created_at = '+created_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofFirst_submitted_at(first_submitted_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'First_submitted_at = '+first_submitted_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofLast_submitted_at(last_submitted_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Last_submitted_at = '+last_submitted_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofTransfer_method(transfer_method){ 
        const readRes = await airtable.read({
            filterByFormula: 'Transfer_method = '+transfer_method,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofCommunity_finished_at(community_finished_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Community_finished_at = '+community_finished_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofPayment_status(payment_status){ 
        const readRes = await airtable.read({
            filterByFormula: 'Payment_status = '+payment_status,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofProject_activities_count(project_activities_count){ 
        const readRes = await airtable.read({
            filterByFormula: 'Project_activities_count = '+project_activities_count,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofExcluded_from_facebook(excluded_from_facebook){ 
        const readRes = await airtable.read({
            filterByFormula: 'Excluded_from_facebook = '+excluded_from_facebook,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofPayment_requested_at(payment_requested_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Payment_requested_at = '+payment_requested_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofAlliance_partner_supported(alliance_partner_supported){ 
        const readRes = await airtable.read({
            filterByFormula: 'Alliance_partner_supported = '+alliance_partner_supported,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofExcluded_from_gdr(excluded_from_gdr){ 
        const readRes = await airtable.read({
            filterByFormula: 'Excluded_from_gdr = '+excluded_from_gdr,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofProject_rewards_overseas_count(project_rewards_overseas_count){ 
        const readRes = await airtable.read({
            filterByFormula: 'Project_rewards_overseas_count = '+project_rewards_overseas_count,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofDeleted_at(deleted_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Deleted_at = '+deleted_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofSupport_fee_status(support_fee_status){ 
        const readRes = await airtable.read({
            filterByFormula: 'Support_fee_status = '+support_fee_status,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofVisibility(visibility){ 
        const readRes = await airtable.read({
            filterByFormula: 'Visibility = '+visibility,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofStatus(status){ 
        const readRes = await airtable.read({
            filterByFormula: 'Status = '+status,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofApproved_version_id(approved_version_id){ 
        const readRes = await airtable.read({
            filterByFormula: 'Approved_version_id = '+approved_version_id,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofCommission_fee_rate(commission_fee_rate){ 
        const readRes = await airtable.read({
            filterByFormula: 'Commission_fee_rate = '+commission_fee_rate,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofFirst_payment_requested_at(first_payment_requested_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'First_payment_requested_at = '+first_payment_requested_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofProject_option_type(project_option_type){ 
        const readRes = await airtable.read({
            filterByFormula: 'Project_option_type = '+project_option_type,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofUser_bank_account_id(user_bank_account_id){ 
        const readRes = await airtable.read({
            filterByFormula: 'User_bank_account_id = '+user_bank_account_id,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofSubmit_count(submit_count){ 
        const readRes = await airtable.read({
            filterByFormula: 'Submit_count = '+submit_count,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofFunding_type(funding_type){ 
        const readRes = await airtable.read({
            filterByFormula: 'Funding_type = '+funding_type,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofProject_type(project_type){ 
        const readRes = await airtable.read({
            filterByFormula: 'Project_type = '+project_type,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofUpdated_at(updated_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Updated_at = '+updated_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofAdditional_fee_rate(additional_fee_rate){ 
        const readRes = await airtable.read({
            filterByFormula: 'Additional_fee_rate = '+additional_fee_rate,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofAdvertising_cost(advertising_cost){ 
        const readRes = await airtable.read({
            filterByFormula: 'Advertising_cost = '+advertising_cost,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofProject_source_id(project_source_id){ 
        const readRes = await airtable.read({
            filterByFormula: 'Project_source_id = '+project_source_id,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofGuest_backable(guest_backable){ 
        const readRes = await airtable.read({
            filterByFormula: 'Guest_backable = '+guest_backable,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofCurator_id(curator_id){ 
        const readRes = await airtable.read({
            filterByFormula: 'Curator_id = '+curator_id,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofExcluded_from_criteo(excluded_from_criteo){ 
        const readRes = await airtable.read({
            filterByFormula: 'Excluded_from_criteo = '+excluded_from_criteo,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofBacker_total(backer_total){ 
        const readRes = await airtable.read({
            filterByFormula: 'Backer_total = '+backer_total,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofWill_enable_show_coming_soon_at(will_enable_show_coming_soon_at){ 
        const readRes = await airtable.read({
            filterByFormula: 'Will_enable_show_coming_soon_at = '+will_enable_show_coming_soon_at,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofUser_id(user_id){ 
        const readRes = await airtable.read({
            filterByFormula: 'User_id = '+user_id,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofTheme_type(theme_type){ 
        const readRes = await airtable.read({
            filterByFormula: 'Theme_type = '+theme_type,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofBacker_count(backer_count){ 
        const readRes = await airtable.read({
            filterByFormula: 'Backer_count = '+backer_count,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofShow_coming_soon(show_coming_soon){ 
        const readRes = await airtable.read({
            filterByFormula: 'Show_coming_soon = '+show_coming_soon,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofProject_inflow_id(project_inflow_id){ 
        const readRes = await airtable.read({
            filterByFormula: 'Project_inflow_id = '+project_inflow_id,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
 // this is for OF restriction. 
    async ofTax_free(tax_free){ 
        const readRes = await airtable.read({
            filterByFormula: 'Tax_free = '+tax_free,
            maxRecords: 500
        });
        projects = readRes // ? this must be more like the 
        return projects
    }
    
    async loadAllFromCache() {
        var fs = require('fs');
        var projects = []
        var projectFiles = fs.readdirSync(process.cwd() + '/projects/');

        projectsFiles.forEach(projectFile => {
            if (projectFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/projects/' + projectFile)
                projects.push(jsonObject)
            }

        });
        return projects
    }

    async update(id:string,json:object):Promise<void>{
        const updateRes = await airtable.update(id, { 
            Name: 'foobar'
        }, config);
        return updateRes
    }

    async delete(id){
        const deleteRes = await airtable.delete(id,config);
    }


}

