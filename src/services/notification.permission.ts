import notifee, {
  AndroidNotificationSetting
} from '@notifee/react-native';

export const checkForNotificationPermission = async (): Promise<void> => {
  const settings = await notifee.getNotificationSettings();
  if (settings.android.alarm !== AndroidNotificationSetting.ENABLED) {
    // TODO: Tell users why app needs this permission
    await notifee.openAlarmPermissionSettings();
  }
};
