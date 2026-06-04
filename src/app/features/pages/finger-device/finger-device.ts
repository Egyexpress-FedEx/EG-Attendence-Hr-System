import { Component } from '@angular/core';
import { FingerprintDeviceComponent } from '../../../shared/components/pages/fingerprint-device/fingerprint-device';

@Component({
  selector: 'app-finger-device',
  imports: [FingerprintDeviceComponent],
  templateUrl: './finger-device.html',
  styleUrl: './finger-device.css',
})
export class FingerDevice {}
