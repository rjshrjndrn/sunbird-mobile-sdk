import { ApiService } from './api';
import { DbService } from './db';
import { AuthService } from './auth';
import { TelemetryService } from './telemetry';
import { SharedPreferences } from './util/shared-preferences';
import { SdkConfig } from './sdk-config';
import { ContentFeedbackService, ContentService, ContentServiceConfig } from './content';
import { CourseService } from './course';
import { FormService } from './form';
import { FrameworkService, FrameworkUtilService } from './framework';
import { ProfileService } from './profile';
import { KeyValueStore } from './key-value-store';
import { PageAssembleService, PageServiceConfig } from './page';
import { GroupService } from './group';
import { SystemSettingsService } from './system-settings';
import { DeviceInfo } from './util/device';
import { EventsBusService } from './events-bus';
import { SummarizerService } from './summarizer';
import { DownloadService } from './util/download';
import { AppInfo } from './util/app';
import { PlayerService } from './player';
import { TelemetryConfig } from './telemetry/config/telemetry-config';
import { StorageService } from './storage';
import { NotificationService } from './notification';
import { ErrorLoggerService } from './error';
import { NetworkInfoService } from './util/network';
import { SearchHistoryService } from './util/search-history';
import { CodePushExperimentService } from './codepush-experiment';
import { FaqService } from './faq';
import { DeviceRegisterConfig, DeviceRegisterService } from './device-register';
import { ContentRatingService } from './content-rating';
import { ArchiveService } from './archive';
export declare class SunbirdSdk {
    private _container;
    private static _instance?;
    static readonly instance: SunbirdSdk;
    private _isInitialised;
    readonly isInitialised: boolean;
    readonly sdkConfig: SdkConfig;
    readonly appInfo: AppInfo;
    readonly pageAssembleService: PageAssembleService;
    readonly dbService: DbService;
    readonly telemetryService: TelemetryService;
    readonly authService: AuthService;
    readonly apiService: ApiService;
    readonly keyValueStore: KeyValueStore;
    readonly profileService: ProfileService;
    readonly groupService: GroupService;
    readonly contentService: ContentService;
    readonly contentFeedbackService: ContentFeedbackService;
    readonly courseService: CourseService;
    readonly formService: FormService;
    readonly frameworkService: FrameworkService;
    readonly frameworkUtilService: FrameworkUtilService;
    readonly sharedPreferences: SharedPreferences;
    readonly systemSettingsService: SystemSettingsService;
    readonly eventsBusService: EventsBusService;
    readonly summarizerService: SummarizerService;
    readonly downloadService: DownloadService;
    readonly playerService: PlayerService;
    readonly deviceInfo: DeviceInfo;
    readonly storageService: StorageService;
    readonly notificationService: NotificationService;
    readonly errorLoggerService: ErrorLoggerService;
    readonly networkInfoService: NetworkInfoService;
    readonly searchHistoryService: SearchHistoryService;
    readonly codePushExperimentService: CodePushExperimentService;
    readonly faqService: FaqService;
    readonly deviceRegisterService: DeviceRegisterService;
    readonly contentRatingService: ContentRatingService;
    readonly archiveService: ArchiveService;
    init(sdkConfig: SdkConfig): Promise<void>;
    updateTelemetryConfig(update: Partial<TelemetryConfig>): void;
    updateDeviceRegisterConfig(update: Partial<DeviceRegisterConfig>): void;
    updateContentServiceConfig(update: Partial<ContentServiceConfig>): void;
    updatePageServiceConfig(update: Partial<PageServiceConfig>): void;
    private preInit;
    private postInit;
}
