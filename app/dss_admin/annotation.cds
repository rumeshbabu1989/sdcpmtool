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
    {Value : projectType_code},	
    {Value : projectStatus_code},
    {Value : bcpStatus_code},
    {Value : factoryRelevant_code},
    {Value : projectSize},
    {Value : customerIndustry_code},
    {Value : projectDescription},    
    ]},
    FieldGroup #ProjectLeads : {Data : [

    {Value : projectManager_userId},
    {Value : dpManager_userId},
    {Value : qaLeadId_userId},

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

annotate sap.sdcpmtool.transaction.Projects with @fiori.draft.enabled;
// annotate ProjectService.Projects with @odata.draft.enabled;
