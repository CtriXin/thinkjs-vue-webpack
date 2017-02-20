'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        this.assign({
            entry:"index/index.js",
        });
        return this.display();
    }

}
