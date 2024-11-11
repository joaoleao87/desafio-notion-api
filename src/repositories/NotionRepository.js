require('dotenv').config();
const { Client } = require('@notionhq/client');

class NotionRepository {
    constructor() {
        this.notion = new Client({ auth: process.env.NOTION_AUTH });
        this.databaseId = process.env.NOTION_DATABASE_ID;
    }

    async createPage(properties) {
        return this.notion.pages.create({
            parent: { database_id: this.databaseId },
            properties,
        });
    }

    async getPageById(id) {
        return this.notion.pages.retrieve({ page_id: id });
    }

    async updatePage(id, properties) {
        return this.notion.pages.update({
            page_id: id,
            properties,
        });
    }

    async deletePage(id) {
        return this.notion.blocks.delete({ block_id: id });
    }
}

module.exports = new NotionRepository();