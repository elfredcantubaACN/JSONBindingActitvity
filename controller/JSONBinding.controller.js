sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], function (Controller, MessageToast, JSONModel,formatter) {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

        formatter: formatter,

        onInit() {
            //let that = this;
            //let oModel = new JSONModel("./model/ProductsModel.json");
            //let oProductTable = that.getView().setModel(oModel);
            // For Person Model
            let oPersonModel = new JSONModel({ "Eid": "elfred.a.s.cantuba",
                              "Enabled": true,
                              "Address": { "Street": "First Street",
                                           "City": "Taguig",
                                           "Zip": "1900",
                                           "Country": "PH"
                               },
                               "SalesAmount": 99999,
                               "CurrencyCode": "Php"
                 
            });
            
             //this.getView().set(oPerson);
            let oPersonTable = this.getView().byId("page");
            oPersonTable.setModel(oPersonModel);
		//  let oProductTable = that.getView().byId("products");
	    //  oProductTable.setModel(oModel);
        },

        onItemSelected: function(oEvent) {
            const oSelectedItem = oEvent.getSource();
			const oContext = oSelectedItem.getBindingContext("ProductsModel");
			const sPath = oContext.getPath();
			const oProductDetailPanel = this.byId("itemDetailsPanel");
			oProductDetailPanel.bindElement({ path: sPath, model: "ProductsModel" });
        }

    });
});