**#Auto Page Refresher Chrome Extension**

**Overview**
The Auto Page Refresher is a simple yet powerful Chrome extension designed to automatically refresh the current web page at user-defined time intervals. This is particularly useful for monitoring live updates on websites like news feeds, stock tickers, social media, or any dynamic content that requires periodic reloading without manual intervention. The extension supports custom intervals in seconds, start/stop controls via a popup interface, and keyboard shortcuts for quick access and control.
Built with Manifest V3 for compatibility with modern Chrome versions, it uses efficient background alarms to handle refreshes, ensuring minimal resource usage even when the extension is running in the background.

**Features**
- Custom Refresh Intervals: Set any interval in seconds (minimum 1 second) via the popup.
- Start/Stop Controls: Easily start or stop refreshing from the popup or using keyboard shortcuts.
**Keyboard Shortcuts:**
  - Start refresh: Ctrl+Shift+S (or Command+Shift+S on Mac)
  - Stop refresh: Ctrl+Shift+T (or Command+Shift+T on Mac)
  - Open settings popup: Ctrl+Shift+P (or Command+Shift+P on Mac)
- Persistent Settings: The chosen interval is saved and reused across sessions.
- Targeted Refresh: Refreshes only the active tab where the refresh was initiated.
- Efficient Background Operation: Utilizes Chrome's alarms API for scheduled reloads, which is battery-friendly and works even if the tab is inactive.
- Status Feedback: Displays messages in the popup for actions like starting, stopping, or invalid inputs.
- Optional Notifications: Alerts the user if trying to start without a set interval (requires "notifications" permission).

**Installation**
From Source (Development Mode)
- Download or clone this repository to your local machine.
- Open Google Chrome and navigate to chrome://extensions/.
- Enable "Developer mode" in the top-right corner.
- Click "Load unpacked" and select the folder containing the extension files (e.g., where manifest.json is located).
- The extension icon should appear in your browser toolbar.

**From Chrome Web Store (If Published)**
(Note: This extension is not yet published. Once uploaded to the Chrome Web Store, you can install it directly from there.)
- Search for "Auto Page Refresher" in the Chrome Web Store.
- Click "Add to Chrome" and confirm the installation.

**Usage**
**Set Up Interval:**
- Click the extension icon in the toolbar to open the popup.
- Enter a number in seconds (e.g., 60 for 1 minute) in the input field.
- Click "Start" to begin refreshing the current tab at that interval.

**Stop Refreshing:**
- Open the popup and click "Stop".
- Alternatively, use the keyboard shortcut for stopping.

**Using Shortcuts:**
- Press the start shortcut to begin refreshing using the last saved interval.
- If no interval is set, a notification will prompt you to configure one via the popup.
- Use the popup shortcut to quickly access settings without clicking the icon.

**Notes:**
- The refresh targets the active tab at the time of starting.
- For intervals under 60 seconds, Chrome's alarm API floors to a minimum of 1 minute periodicity, but the extension handles shorter intervals via conversion (though very short intervals may be throttled by Chrome for performance reasons).
- If the tab is closed, refreshing stops automatically.

**Keyboard Shortcuts**
- Shortcuts can be customized in Chrome via chrome://extensions/shortcuts.
- Start Refresh: Ctrl+Shift+S (Mac: Command+Shift+S) - Starts refreshing the current tab using the saved interval.
- Stop Refresh: Ctrl+Shift+Z (Mac: Command+Shift+T) - Stops any ongoing refresh.
- Open Popup: Ctrl+Shift+Q (Mac: Command+Shift+P) - Opens the extension's settings popup.

**File Structure**
- manifest.json: Defines the extension's metadata, permissions, and components.
- popup.html: The user interface for setting intervals and controls.
- popup.js: Handles popup logic, user input, and communication with the background script.
- background.js: Manages alarms, tab reloading, and shortcut listeners.
- icons: icon16.png, icon48.png, icon128.png: Extension icons (replace with your own if needed).

**Development and Customization**
**Prerequisites**
- Google Chrome browser.
- Basic knowledge of JavaScript, HTML, and Chrome Extension APIs.

**Building and Testing**
- Make changes to the files as needed.
- Reload the extension in chrome://extensions/ by clicking the "Reload" button.
- Test in a new tab: Open a webpage, set an interval, and verify refreshes.

**Debugging**
- Popup: Right-click in the popup and select "Inspect" to open DevTools.
- Background Script: In chrome://extensions/, click "Inspect views: service worker" next to your extension.
- Check the console for errors related to alarms, tabs, or storage.

**Enhancements Ideas**
- Multi-Tab Support: Store multiple tab IDs to refresh several tabs simultaneously.
- Interval Units: Add options for minutes or hours in the popup.
- Toggle Shortcut: Combine start/stop into a single toggle key.
- Advanced Settings: Allow per-tab intervals or exclude certain websites.
- Notifications: Expand to show refresh status updates.
- Internationalization: Add support for multiple languages in the popup.

To implement these, modify popup.js and background.js accordingly, and update manifest.json if new permissions are required (e.g., "notifications" for alerts).

**Permissions Explained**
- tabs: To query and reload the active tab.
- storage: To save and retrieve the refresh interval.
- alarms: For scheduling periodic refreshes.
- notifications (optional): For alerting users about missing settings.

**Limitations**
- Chrome may impose minimum refresh rates to prevent abuse (e.g., very rapid reloads could be throttled).
- Alarms have a minimum period of 1 minute in production, but for testing, shorter intervals work via conversion.
- Shortcuts are global by default but can be scoped to Chrome with manifest changes.
- Does not persist across browser restarts if the alarm isn't rescheduled (alarms survive in Manifest V3).

**Contributing**
- Contributions are welcome! Fork the repository, make your changes, and submit a pull request. Please include tests or descriptions of your changes.

**License**
- This project is licensed under the MIT License. See the LICENSE file for details.
(Note: Create a LICENSE file in your repository with the MIT license text if not already present.)

**Contact**
For questions or suggestions, reach out via GitHub issues or contact the developer.
