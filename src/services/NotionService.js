const NotionRepository = require('../repositories/NotionRepository');

class NotionService {
    async createRecord(properties) {
        return await NotionRepository.createPage(properties);
    }

    async getRecord(id) {
        return await NotionRepository.getPageById(id);
    }

    async updateRecord(id, properties) {
        return await NotionRepository.updatePage(id, properties);
    }

    async deleteRecord(id) {
        return await NotionRepository.deletePage(id);
    }
}

module.exports = new NotionService();