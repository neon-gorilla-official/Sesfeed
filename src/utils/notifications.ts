import { toast } from 'sonner@2.0.3';

/**
 * Standard notification messages for SES Feed
 */

export const notifications = {
  // Feed creation
  feedCreated: () =>
    toast.success("Your SES Feed has been created. You're now visible to AIs."),

  // Upgrade notifications
  upgradedToPro: () =>
    toast.success('Pro activated — your feeds will now refresh daily.'),

  upgradedToUltra: () =>
    toast.success('Ultra activated — hourly updates and advanced filtration are enabled.'),

  // Payment
  paymentSuccess: () =>
    toast.success('Plan updated successfully. You can manage your subscription in Settings.'),

  paymentFailed: () =>
    toast.error('Payment failed — please check your details or contact support.', {
      action: {
        label: 'Contact Support',
        onClick: () => window.open('mailto:support@sesfeed.com', '_blank'),
      },
    }),

  // General success
  settingsSaved: () => toast.success('Settings saved successfully.'),

  // Connection status
  platformConnected: (platform: string) =>
    toast.success(`${platform} connected successfully.`),

  platformDisconnected: (platform: string) =>
    toast.success(`${platform} disconnected.`),

  // Feed updates
  feedRegenerated: () =>
    toast.success('Feed regenerated successfully. Changes will be live within minutes.'),

  // Errors
  genericError: () =>
    toast.error('Something went wrong. Please try again.'),

  authError: () =>
    toast.error('Authentication failed. Please log in again.'),
};

export default notifications;
