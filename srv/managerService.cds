using {sap.sdcpmtool.transaction as sdcpmtool} from '../db/projectHeader';
using { ProjectService } from './projectService';

service ManagerService @(requires: 'authenticated-user'){
    @Capabilities: { Insertable:false, Updatable:true, Deletable:false, Readable: true }
    
    entity MyProjects @(restrict: [
  { grant: ['READ','WRITE'], to: 'managers' }]) as select from sdcpmtool.Projects { * } where projectManager.userId=$user.id;
    entity User {
        key username : String;
    }
}

