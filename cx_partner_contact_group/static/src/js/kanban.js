/**********************************************************************************
* 
*    Copyright (C) Cetmix OÜ
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU LESSER GENERAL PUBLIC LICENSE as
*    published by the Free Software Foundation, either version 3 of the
*    License, or (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU LESSER GENERAL PUBLIC LICENSE for more details.
*
*    You should have received a copy of the GNU LESSER GENERAL PUBLIC LICENSE
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
**********************************************************************************/

odoo.define("cx_partner_contact_group.update_kanban", function (require) {
    "use strict";

    var KanbanRecord = require("web.KanbanRecord");
    var constants = require("cx_partner_contact_group.constants");

    KanbanRecord.include({
        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * @override
         * @private
         */
        _openRecord: function () {
            if (
                this.modelName === constants.model_name &&
                this.$(".o_partner_category_kanban_boxes a").length
            ) {
                this.$(".o_partner_category_kanban_boxes a").first().click();
            } else {
                this._super.apply(this, arguments);
            }
        },
    });
});
