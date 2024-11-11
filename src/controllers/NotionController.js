const NotionService = require('../services/NotionService');
const ApiResponse = require('../utils/ApiResponse');

class NotionController {
    async createRecord(req, res) {
        try {
            const { properties } = req.body;
            const data = await NotionService.createRecord(properties);
            ApiResponse.success(res, data, 'Record created successfully');
        } catch (error) {
            ApiResponse.error(res, error.message);
        }
    }

    async getRecord(req, res) {
        try {
            const { id } = req.params;
            const data = await NotionService.getRecord(id);
            ApiResponse.success(res, data, 'Record retrieved successfully');
        } catch (error) {
            ApiResponse.error(res, error.message);
        }
    }

    async updateRecord(req, res) {
        try {
            const { id } = req.params;
            const { properties } = req.body;
            const data = await NotionService.updateRecord(id, properties);
            ApiResponse.success(res, data, 'Record updated successfully');
        } catch (error) {
            ApiResponse.error(res, error.message);
        }
    }

    async deleteRecord(req, res) {
        try {
            const { id } = req.params;
            await NotionService.deleteRecord(id);
            ApiResponse.success(res, null, 'Record deleted successfully');
        } catch (error) {
            ApiResponse.error(res, error.message);
        }
    }
}

module.exports = new NotionController();