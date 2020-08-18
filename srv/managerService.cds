using {sap.sdcpmtool.transaction as sdcpmtool} from '../db/projectHeader';
using { ProjectService } from './projectService';

service ManagerService {
    @Capabilities: { Insertable:false, Updatable:true, Deletable:false, Readable: true }
    entity MyProjects as select from sdcpmtool.Projects { * } where projectManager.userId=$user.id;
}

