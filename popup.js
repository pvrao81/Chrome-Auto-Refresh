document.addEventListener('DOMContentLoaded', () => {
  const intervalInput = document.getElementById('interval');
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const status = document.getElementById('status');

  const alarmName = 'refreshAlarm';

  // Function to update button states and status based on whether alarm is active
  function updateUI(customStatus = null) {
    chrome.alarms.get(alarmName, (alarm) => {
      const isActive = !!alarm;
      if (isActive) {
        startButton.setAttribute('disabled', 'disabled');
        stopButton.removeAttribute('disabled');
      } else {
        startButton.removeAttribute('disabled');
        stopButton.setAttribute('disabled', 'disabled');
      }
      status.textContent = customStatus || (isActive ? 'Refreshing...' : 'Stopped');
    });
  }

  // Load saved interval and update UI on popup open
  chrome.storage.sync.get('refreshInterval', (data) => {
    if (data.refreshInterval) {
      intervalInput.value = data.refreshInterval;
    }
    updateUI(); // Check current state
  });

  startButton.addEventListener('click', () => {
    const interval = parseInt(intervalInput.value);
    if (isNaN(interval) || interval < 1) {
      status.textContent = 'Enter a valid interval (at least 1 second).';
      return;
    }

    // Save interval
    chrome.storage.sync.set({ refreshInterval: interval });

    // Get current tab and send message to background to start
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.runtime.sendMessage({ action: 'startRefresh', tabId, interval }, (response) => {
        if (response && response.success) {
          updateUI(`Refreshing every ${interval} seconds.`); // Pass custom status
        }
      });
    });
  });

  stopButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'stopRefresh' }, (response) => {
      if (response && response.success) {
        updateUI('Refresh stopped.'); // Pass custom status
      }
    });
  });
});