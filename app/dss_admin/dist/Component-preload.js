//@ui5-bundle sdcpmtool/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"sdcpmtool/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("sdcpmtool.Component",{metadata:{manifest:"json"}})});
},
	"sdcpmtool/i18n/i18n.properties":'# This is the resource bundle of itelo\n# __ldi.translation.uuid=c3431418-9caf-11e8-98d0-529269fb1459\n\n# JCI app descriptor contains lower case TITLE\nappTitle=Manage SDC Projects\n\n# JCI app descriptor contains lower case DESCRIPTION\nappSubTitle=Manage Projects CAP\n\n# JCI app descriptor contains lower case DESCRIPTION\nappDescription=Manage SDC Projects\n\nID=Project ID\ncrmOppId=CRM Opportunity ID\nptdProjectId=PTD Project ID\ncustomerName=Customer Name\n\n # JCI\nprojectName = Project Name\n\nprojectType = Project Type\nprojectMode=Project Mode\nprojectStatus=Status\nactualStartDate=Actual Start Date\nplannedStartDate=Planned Start Date\nplannedEndDate=Planned End Date\nregion=Region\nsubRegion=Sub Region\ncountry=Country\nprimaryDeliveryCenter=Primary Delivery Center\nbcpStatus=BCP Status\nqaLeadId=QA Lead ID\nfactoryRelevant=Factory Relevant\nprojectSize=Project Size\ncustomerIndustry=Customer Industry\nprojectManager=Project Manager\ndpManager=DPM Manager\nprojectPhase=Project Phase\nmuCompanyCode=MU Company Code\nprojectCurrency=Project Current\nprojectDescription=Project Description\n',
	"sdcpmtool/i18n/i18n_en.properties":'# This is the resource bundle of itelo\n# __ldi.translation.uuid=c3431418-9caf-11e8-98d0-529269fb1459\n\n# JCI app descriptor contains lower case TITLE\nappTitle=Manage SDC Projects\n\n# JCI app descriptor contains lower case DESCRIPTION\nappSubTitle=Manage Projects CAP\n\n# JCI app descriptor contains lower case DESCRIPTION\nappDescription=Manage SDC Projects\n\nID=Project ID\ncrmOppId=CRM Opportunity ID\nptdProjectId=PTD Project ID\ncustomerName=Customer Name\n\n # JCI\nprojectName = Project Name\n\nprojectType = Project Type\nprojectMode=Project Mode\nprojectStatus=Status\nactualStartDate=Actual Start Date\nplannedStartDate=Planned Start Date\nplannedEndDate=Planned End Date\nregion=Region\nsubRegion=Sub Region\ncountry=Country\nprimaryDeliveryCenter=Primary Delivery Center\nbcpStatus=BCP Status\nqaLeadId=QA Lead ID\nfactoryRelevant=Factory Relevant\nprojectSize=Project Size\ncustomerIndustry=Customer Industry\nprojectManager=Project Manager\ndpManager=DPM Manager\nprojectPhase=Project Phase\nmuCompanyCode=MU Company Code\nprojectCurrency=Project Current\nprojectDescription=Project Description\n',
	"sdcpmtool/manifest.json":'{"_version":"1.8.0","sap.app":{"id":"sdcpmtool","type":"application","title":"Manage Projects","description":"Sample Application","i18n":{"bundleName":"sdcpmtool.i18n.i18n","supportedLocales":["de","en","es","fr","zh_CN","zh_TW"],"fallbackLocale":"en"},"dataSources":{"AdminService":{"uri":"project/","type":"OData","settings":{"odataVersion":"4.0"}}},"applicationVersion":{"version":"1.8.0"},"sourceTemplate":{"id":"ui5template.fiorielements.v4.lrop","version":"1.0.0"},"crossNavigation":{"inbounds":{"configApplicationDisplay":{"semanticObject":"projects","action":"manage","signature":{"parameters":{},"additionalParameters":"allowed"}}},"outbounds":{}}},"sap.ui5":{"dependencies":{"minUI5Version":"1.77.0","libs":{"sap.fe.templates":{}}},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sdcpmtool.i18n.i18n","supportedLocales":["de","en","es","fr","zh_CN","zh_TW"],"fallbackLocale":"en"}},"":{"dataSource":"AdminService","settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true,"groupProperties":{"default":{"submit":"Auto"}}}}},"routing":{"routes":[{"pattern":":?query:","name":"ProjectsList","target":"ProjectsList"},{"pattern":"Projects({key}):?query:","name":"ProjectsDetails","target":"ProjectsDetails"},{"pattern":"Projects({key}/author({key2}):?query:","name":"AuthorsDetails","target":"AuthorsDetails"}],"targets":{"ProjectsList":{"type":"Component","id":"ProjectsList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Projects","navigation":{"Projects":{"detail":{"route":"ProjectsDetails"}}}}}},"ProjectsDetails":{"type":"Component","id":"ProjectsDetailsList","name":"sap.fe.templates.ObjectPage","options":{"settings":{"entitySet":"Projects","editableHeaderContent":false}}},"AuthorsDetails":{"type":"Component","id":"AuthorsDetailsList","name":"sap.fe.templates.ObjectPage","options":{"settings":{"entitySet":"Authors"}}}}},"contentDensities":{"compact":true,"cozy":true}},"sap.ui":{"technology":"UI5","fullWidth":false},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.platform.cf":{"oAuthScopes":["$XSAPPNAME.sdcpmtool_dss_admin"]}}'
}});
