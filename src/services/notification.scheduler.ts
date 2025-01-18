import notifee, {Trigger, TriggerType} from '@notifee/react-native';

export const scheduleNotification = async (
  title: string,
  body: string,
  timestamp: number,
): Promise<void> => {
  // Create a notification channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Create a time-based trigger
  const trigger: Trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: timestamp, // Expected timestamp in milliseconds
  };

  // Create the notification
  await notifee.createTriggerNotification(
    {
      title,
      body,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    },
    trigger,
  );
};
