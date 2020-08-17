using {sap.sdcpmtool.transaction as sdcpmtool} from '../db/projectHeader';

service ManagerService {
    @Capabilities: { Insertable:false, Updatable:true, Deletable:false, Readable: true }
    entity MyProjects as select from sdcpmtool.Projects { * }
    where projectManager.userId = $user or dpManager.userId = $user
    and projectArchiveFlag = false;
}

