annotate sap.sdcpmtool.transaction.Projects with {
    projectId                    @title : 'Project ID' @Core.Computed; 
    ID                    @title : 'UUID'  @UI.HiddenFilter  @Core.Computed;
    crmOppId              @title : '{i18n>crmOppId}';
    ptdProjectId          @title : '{i18n>ptdProjectId}';
    customerName          @title : '{i18n>customerName}';
    projectName           @title : '{i18n>projectName}';
    projectType @title:'{i18n>projectType}';
	
    // projectType           @(
    //     title : '{i18n>projectType}',
    //     UI    : {TextArrangement : TextOnly},
    // );

    projectMode           @title : '{i18n>projectMode}';
    projectStatus         @title : '{i18n>projectStatus}';
    actualStartDate       @title : '{i18n>actualStartDate}';
    plannedStartDate      @title : '{i18n>plannedStartDate}';
    plannedEndDate        @title : '{i18n>plannedEndDate}';
    region                @title : '{i18n>region}';
    subRegion             @title : '{i18n>subRegion}';
    country               @title : '{i18n>country}';
    primaryDeliveryCenter @title : '{i18n>primaryDeliveryCenter}';
    bcpStatus             @title : '{i18n>bcpStatus}';
    qaLeadId              @title : '{i18n>qaLeadId}';
    factoryRelevant       @title : '{i18n>factoryRelevant}';
    projectSize           @title : '{i18n>projectSize}';
    customerIndustry      @title : '{i18n>customerIndustry}';
    projectManager        @title : '{i18n>projectManager}';
    dpManager             @title : '{i18n>dpManager}';
    projectPhase          @title : '{i18n>projectPhase}';
    muCompanyCode         @title : '{i18n>muCompanyCode}';
    projectCurrency       @title : '{i18n>projectCurrency}';
    projectDescription    @UI.MultiLineText @title : '{i18n>projectDescription}';
    projectArchiveFlag    @readonly @title : 'Archived';
};

annotate sap.sdcpmtool.transaction.ProjectModes with {
    code @title : 'Project Code';
    name @title : 'Project Code Description' @readonly; 
};


annotate sap.sdcpmtool.transaction.Projects with @(
    Common.SemanticKey : [projectName],
    UI                 : {
        Identification  : [{Value : projectName}],
        SelectionFields : [
        projectId,
        projectName,
        projectType_code,
        projectStatus_code
        ],
        // LineItem: [ ID , projectName, projectType_code, projectStatus_code ]
        LineItem        : [
        {Value : projectId},
        {
            Value : projectName,
            Label : '{i18n>projectName}'
        },
        {Value : projectType_code},
        {Value : projectStatus_code}
        ]
    }
);
