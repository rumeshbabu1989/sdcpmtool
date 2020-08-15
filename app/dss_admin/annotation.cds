annotate ProjectService.Projects with {
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
    projectArchiveFlag    @readonly;
};

annotate ProjectService.ProjectModes with {
    code @title : 'Project Code';
    name @title : 'Project Code Description' @readonly; 
};


annotate ProjectService.Projects with @(
    Common.SemanticKey : [projectName],
    UI                 : {
        Identification  : [{Value : projectName}],
        SelectionFields : [
        projectId,
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


annotate ProjectService.Projects with @(UI : {
    HeaderInfo               : {
        TypeName       : 'Project',
        TypeNamePlural : 'Projects',
        Title          : {Value : projectName},
        Description    : {Value : customerName}
    },
    Facets                   : [
    {
        $Type  : 'UI.CollectionFacet',
        Label  : 'General',
        ID     : 'General',
        Facets : [
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : 'Basic Data',
                Target : '@UI.FieldGroup#BasicData'
            },
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : 'Project Leads',
                Target : '@UI.FieldGroup#ProjectLeads'
            },
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : 'Location',
                Target : '@UI.FieldGroup#Location'
            }
        ]
    },
    {
        $Type  : 'UI.ReferenceFacet',
        Label  : 'Key Dates',
        Target : '@UI.FieldGroup#KeyDates'
    }
    ],
    FieldGroup #BasicData    : {Data : [
    {Value : projectName},
    {Value : customerName},
    {Value : projectMode_code},
    {Value: projectMode.name},
    {Value : projectType_code},	
    {Value : projectStatus_code},
    {Value : bcpStatus_code},
    {Value : factoryRelevant_code},
    {Value : projectSize},
    {Value : customerIndustry},
    {Value : projectDescription},    
    ]},
    FieldGroup #ProjectLeads : {Data : [

    {Value : projectManager},
    {Value : dpManager},
    {Value : qaLeadId},

    ]},
    FieldGroup #Location     : {Data : [
    {Value : region_code},
    {Value : subRegion_code},
    {Value : country},
    {Value : primaryDeliveryCenter_code},
    ]},
    FieldGroup #KeyDates     : {Data : [
    {Value : actualStartDate},
    {Value : plannedStartDate},
    {Value : plannedEndDate},
    ]}
});

annotate ProjectService.Projects with @odata.draft.enabled;
