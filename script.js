const MAX_HISTORY = 5;

    function cleanAndDisplay() {
      const rawLink = document.getElementById('inputLink').value.trim();
      const cleaned = cleanInstagramLink(rawLink);

      const outputDiv = document.getElementById('cleanedLinkContainer');
      const outputText = document.getElementById('cleanedLink');

      outputText.textContent = cleaned;
      outputDiv.style.display = 'block';

      if (cleaned.startsWith("http")) {
        saveToRecent(cleaned);
        displayRecentLinks();
      }
    }

    function cleanInstagramLink(link) {
  try {
    const url = new URL(link);

    // Trackers to remove: utm_*, igshid, igsh, possibly others
    const hasTrackingParams = [...url.searchParams.keys()].some(param =>
      param.startsWith('utm_') || ['igshid', 'igsh'].includes(param)
    );

    if (!hasTrackingParams) {
      // No personal identifiers found → return original link
      return link;
    }

    // Clean link by extracting only the core content path
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return "❌ Invalid Instagram link";

    const type = parts[0];
    const id = parts[1];

    return `https://www.instagram.com/${type}/${id}/`;
  } catch {
    return "❌ Invalid URL";
  }
}



    function copyToClipboard() {
      const text = document.getElementById('cleanedLink').textContent;
      navigator.clipboard.writeText(text)
        .then(() => alert('✅ Link copied to clipboard!'))
        .catch(() => alert('❌ Failed to copy!'));
    }

    function copySpecificLink(link) {
      navigator.clipboard.writeText(link)
        .then(() => alert(`✅ Copied: ${link}`))
        .catch(() => alert('❌ Failed to copy link'));
    }

    function saveToRecent(link) {
      let recentLinks = JSON.parse(localStorage.getItem("recentLinks")) || [];
      recentLinks = recentLinks.filter(item => item !== link);
      recentLinks.unshift(link);
      if (recentLinks.length > MAX_HISTORY) {
        recentLinks = recentLinks.slice(0, MAX_HISTORY);
      }
      localStorage.setItem("recentLinks", JSON.stringify(recentLinks));
    }

    function displayRecentLinks() {
      const recentLinks = JSON.parse(localStorage.getItem("recentLinks")) || [];
      const list = document.getElementById("recentLinksList");
      list.innerHTML = "";

      recentLinks.forEach(link => {
        const li = document.createElement("li");

li.innerHTML = `
  <div style="flex: 1;"><a href="${link}" target="_blank">${link}</a></div>
  <div style="display: flex; gap: 6px;">
    <button class="copy-btn" onclick="copySpecificLink('${link}')">
      📋 Copy
    </button>
    <button class="copy-btn" onclick="openLinkInNewTab('${link}')">
      🔗 Open
    </button>
  </div>
`;


        list.appendChild(li);
      });
    }

function openLinkInNewTab(link) {
  window.open(link, '_blank');
}


    function clearHistory() {
      localStorage.removeItem("recentLinks");
      displayRecentLinks();
      alert("🗑️ History cleared!");
    }

   function toggleTheme() {
  const body = document.body;
  const isLight = body.classList.toggle('light-mode');

  const newTheme = isLight ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);

  updateThemeButtonText(newTheme);
}


function updateThemeButtonText(currentTheme) {
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;

  if (currentTheme === 'light') {
    btn.textContent = '🌙 Dark Mode';
  } else {
    btn.textContent = '☀️ Light Mode';
  }
}




  function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  updateThemeButtonText(savedTheme || 'dark');
}



    // Initialize
    window.onload = () => {
      applySavedTheme();
      displayRecentLinks();
    };
