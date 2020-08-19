using {sap.sdcpmtool.transaction as sdcpmtool} from '../db/projectHeader';
using {sap.sdcpmtool.master as sdcpmmaster} from '../db/master/data-masters';

service ProjectService @(requires : 'sdcpmtool_dss_admin') {
  entity Projects as
    select from sdcpmtool.Projects {
      *
    };

  entity Users    as projection on sdcpmmaster.Users;
}

// annotate ProjectService.Projects with {
//   projectManager     @cds.on.insert : $user;
//   projectDescription @cds.on.insert : $user;
// }
