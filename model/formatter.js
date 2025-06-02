sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency",
    "sap/ui/model/resource/ResourceModel"
], function (mobileLibrary,Currency,ResourceModel) {
    "use strict";
    return {

        formatMail: function (sEid) {
            let oView = this.getView();
            let i18nModel = new ResourceModel({ 
                bundleUrl : "i18n/i18n.properties" }); 
            oView.setModel(i18nModel, "i18n");
            const oBundle = oView.getModel("i18n").getResourceBundle();
            return mobileLibrary.URLHelper.normalizeEmail( sEid + oBundle.getText("domain"),				
                                                           oBundle.getText("mailSubject") + " " + sEid,				
                                                           oBundle.getText("mailBody"));
        },

    formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode) { var oCurrency = new Currency();
        return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");	
    }    
    
} } );