import { toast } from 'sonner';

export function handlePhoneClick(e?: React.MouseEvent) {
  if (e) {
    // allow default tel: action on mobile
  }
  navigator.clipboard?.writeText('03296000046');
  toast.success('Phone number 0329 6000046 copied to clipboard & dialer triggered!');
}
