import { GroupProfileEntry } from '../../profile/db/schema';
import { GroupProfile } from '../../profile/def/group';
export declare class GroupProfileMapper {
    static mapGroupProfileDBEntryToGroupProfile(groupProfileEntry: GroupProfileEntry.SchemaMap): GroupProfile;
    static mapGroupToGroupDBEntry(groupProfile: GroupProfile): GroupProfileEntry.SchemaMap;
}
