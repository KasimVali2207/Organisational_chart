/* ═══════════════════════════════════════
   BNP PARIBAS ORG CHART – script.js
   Drill-down detail page on double-click
═══════════════════════════════════════ */

// ─── TEAM DATA ───────────────────────────────────────────
const teamData = {
  pankaj: {
    lead: { initials:'PJ', name:'Pankaj Joshi', role:'Production Security', bg:'linear-gradient(135deg,#059669,#047857)', dept:'Security' },
    leadTeam: ['Amol','Ritesh','Snehal','Uma Devi','Ramprasath SV','Vijay','ELANGOVAN','Mohammed Azar','Mike J','Deepak Mahesh','Cynthia Mary','Pamela C'],
    backup: { initials:'RS', name:'Rautaray Subhashree', role:'Backup – Production Security', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: ['Abinaya','Javeed','Shakthi','Gokul C']
  },
  saktheeswar: {
    lead: { initials:'SK', name:'Saktheeswar K', role:'IT APS TFD & Telecom', bg:'linear-gradient(135deg,#0369a1,#075985)', dept:'APS · TFD' },
    leadTeam: ['Aashish Singh','BHAGYASHREE DAS','Divya Rajasekar','Chirag Goel','Karthikeyan S','Mayur More','Nagendraprasanth','Hari Vignesh','Sabarinath M'],
    backup: { initials:'BK', name:'Koushik B', role:'Backup – IT APS TFD & Telecom', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: ['S Velavan','Kalaveni','Mayuresh','Alok Singh','Lokesh','SIVAGNANAM']
  },
  padma: {
    lead: { initials:'PP', name:'Padma Priya', role:'IT APS – INV & CHN', bg:'linear-gradient(135deg,#7c3aed,#6d28d9)', dept:'APS · INV' },
    leadTeam: ['Bharathvaj P','Prakash Gupta','Rohan Pawar','Priyadarsini B','Jagadesh P','Kasi Reddy','Krishna Kumar','Siddhesh Tawde','Kasim Vali','Durga'],
    backup: { initials:'SR', name:'Sindhu Ravi', role:'Backup – IT APS INV & CHN', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: ['Siva Krishna','Vandana']
  },
  jayapandian: {
    lead: { initials:'JP', name:'Jayapandian', role:'IT APS-DPRC Manager', bg:'linear-gradient(135deg,#b45309,#92400e)', dept:'APS · DPRC' },
    leadTeam: ['Lokesh Y','Manju Singha','Raja Ganesh L','Amit Jadhav','Lokesh R','Pradeep PISAL','Tushar Gaikwad','Varsha S','Venkatarao'],
    backup: { initials:'—', name:'None', role:'No Backup Assigned', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: []
  },
  prasanna: {
    lead: { initials:'PJ', name:'Prasanna J', role:'MTS Team Lead', bg:'linear-gradient(135deg,#0d9488,#0f766e)', dept:'MTS' },
    leadTeam: ['Sai Nagarajan','Vignesh','Harshil P','Shivani U','Chandresh','Sivateja'],
    backup: { initials:'—', name:'None', role:'No Backup Assigned', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: []
  },
  praveen: {
    lead: { initials:'PC', name:'Praveen C', role:'IT APS CCDA-AI & ML', bg:'linear-gradient(135deg,#dc2626,#b91c1c)', dept:'APS · AI/ML' },
    leadTeam: ['Janani J','Jebastin I','Ranjith Venkatesan','Sandeep S','Thanigaivel P','Sangeeta','VIMALADEVI','Gokul KUMAR','Nandhini R'],
    backup: { initials:'NR', name:'Nandhini R', role:'Backup – CCDA AI & ML', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: []
  },
  deepesh: {
    lead: { initials:'DJ', name:'Deepesh Jain', role:'IT APS – DPRC', bg:'linear-gradient(135deg,#0f766e,#0d9488)', dept:'APS · DPRC' },
    leadTeam: [],
    backup: { initials:'—', name:'None', role:'No Backup Assigned', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: []
  },
  virendra: {
    lead: { initials:'VB', name:'Virendra B', role:'IT CC & CCDA', bg:'linear-gradient(135deg,#ea580c,#c2410c)', dept:'CC · CCDA' },
    leadTeam: ['Abirami A','Archana','Rajarao','Venkatram R','Abirami P','Abirami T','Rahul C','Karthika S','Mano B'],
    backup: { initials:'PN', name:'Pratik Nalavade', role:'Backup – IT CC & CCDA', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: []
  },
  jennifer: {
    lead: { initials:'JS', name:'Jennifer Samson', role:'CC Mumbai TL', bg:'linear-gradient(135deg,#0284c7,#0369a1)', dept:'CC Mumbai' },
    leadTeam: ['Abhishek','Amar Kumar','Bhaskar Gupta','Bhawana Singh','Sunny Satish','Gaurav Jha','GAURI S','Varun Singh','Mohd Ishaq','Akash Bane'],
    backup: { initials:'—', name:'None', role:'No Backup Assigned', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: []
  },
  arunkumar: {
    lead: { initials:'AR', name:'Arunkumar R', role:'Control Tower Lead', bg:'linear-gradient(135deg,#7c3aed,#5b21b6)', dept:'Control Tower' },
    leadTeam: [],
    backup: { initials:'AA', name:'Abirami A', role:'Backup – Control Tower', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: []
  },
  ajay: {
    lead: { initials:'AS', name:'Ajay S Shiva', role:'Control Tower TL', bg:'linear-gradient(135deg,#6d28d9,#4c1d95)', dept:'Control Tower' },
    leadTeam: ['Sudahar','Raga Swaroopa','Praveen Raja','Jai','Nirmal','Shruthi GOWSKA','Michael','Amrutha','Dinesh V','Akash','Saran'],
    backup: { initials:'—', name:'None', role:'No Backup Assigned', bg:'linear-gradient(135deg,#374151,#1f2937)' },
    backupTeam: []
  }
};

// ─── DETAIL PAGE ────────────────────────────────────────
function openDetail(key) {
  const data = teamData[key];
  if (!data) return;

  const { lead, leadTeam, backup, backupTeam } = data;

  // Breadcrumb
  document.getElementById('detail-breadcrumb').innerHTML =
    `<span>Sneha Bhattacharjee</span><span class="bc-sep">›</span><span class="bc-active">${lead.name}</span>`;

  // Build member pill with Internal / External badge
  const pill = (name, index) => {
    const status = memberTypes[name] || 'Internal';
    const isExt = status === 'External';
    return `
      <div class="member-pill" style="animation-delay:${index * 40}ms">
        <div class="pill-av">${name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2)}</div>
        <div class="pill-info">
          <span class="pill-name">${name}</span>
          <span class="pill-type-badge ${isExt ? 'badge-ext' : 'badge-int'}">${status}</span>
        </div>
      </div>`;
  };

  document.getElementById('detail-body').innerHTML = `
    <div class="detail-content">

      <!-- LEAD SECTION -->
      <div class="detail-section lead-section">
        <div class="ds-header">
          <div class="ds-avatar" style="background:${lead.bg}">${lead.initials}</div>
          <div class="ds-info">
            <div class="ds-name">${lead.name}</div>
            <div class="ds-role">${lead.role}</div>
            <div class="ds-count">${leadTeam.length} team member${leadTeam.length !== 1 ? 's' : ''}</div>
          </div>
          <div class="ds-badge lead-ds-badge">TEAM LEAD</div>
        </div>
        <div class="ds-divider"></div>
        <div class="member-grid">
          ${leadTeam.length > 0 ? leadTeam.map((n,i) => pill(n, i)).join('') : '<span style="font-size:0.82rem; color:var(--txt3); font-style:italic;">No direct reportees assigned</span>'}
        </div>
      </div>

      <!-- CONNECTOR -->
      <div class="detail-connector">
        <div class="dc-line"></div>
        <div class="dc-label">Backup Coverage</div>
        <div class="dc-line"></div>
      </div>

      <!-- BACKUP SECTION -->
      <div class="detail-section backup-section">
        <div class="ds-header">
          <div class="ds-avatar backup-av">${backup.initials}</div>
          <div class="ds-info">
            <div class="ds-name">${backup.name}</div>
            <div class="ds-role">${backup.role}</div>
            <div class="ds-count">${backupTeam.length} team member${backupTeam.length !== 1 ? 's' : ''}</div>
          </div>
          <div class="ds-badge backup-ds-badge">BACKUP</div>
        </div>
        <div class="ds-divider backup-divider"></div>
        <div class="member-grid">
          ${backupTeam.length > 0 ? backupTeam.map((n,i) => pill(n, i + leadTeam.length)).join('') : '<span style="font-size:0.82rem; color:var(--txt3); font-style:italic;">No direct reportees assigned to backup</span>'}
        </div>
      </div>

      <!-- SUMMARY ROW -->
      <div class="detail-summary">
        <div class="summary-card">
          <span class="sc-num">${leadTeam.length + backupTeam.length}</span>
          <span class="sc-lbl">Total Members</span>
        </div>
        <div class="summary-card">
          <span class="sc-num">${leadTeam.length}</span>
          <span class="sc-lbl">Under ${lead.name.split(' ')[0]}</span>
        </div>
        <div class="summary-card">
          <span class="sc-num">${backupTeam.length}</span>
          <span class="sc-lbl">Under ${backup.name.split(' ')[0]}</span>
        </div>
      </div>

    </div>
  `;

  document.getElementById('detail-page').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  document.getElementById('detail-page').classList.remove('open');
  document.body.style.overflow = '';
}

// Escape key to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeDetail();
    closeModal();
  }
});

// ─── MODAL (for manager/service cards) ──────────────────
const memberData = {
  sneha: {
    initials:'SB', name:'Sneha Bhattacharjee', role:'BNPP Fortis Manager',
    dept:'ISPL Production Management', tier:'Tier 1 – Management',
    directReports:'8 Team Leads', onsiteCounterparts:'Van Laer Andro / Vanbelleghem Bernard / Henroulle Bernard / Van Der Eecken Tom / Del Marmol Carlos',
    bg:'linear-gradient(135deg,#00965E,#007a4d)', badgeClass:'role-manager'
  },
  niranju:{
    initials:'NS', name:'Niranju S', role:'Service Manager',
    dept:'Service Management', tier:'Tier 1 – Service Management',
    directReports:'—', onsiteCounterparts:'—',
    bg:'linear-gradient(135deg,#1a56a0,#103d78)', badgeClass:'role-service'
  }
};

function openModal(key) {
  // Disabled per user request
  return;
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}




// ═══════════════════════════════════════════════════════
// SVG ORG TREE – fresh clean implementation
// ═══════════════════════════════════════════════════════

const NS = 'http://www.w3.org/2000/svg';
function svgEl(tag, attrs) {
  const el = document.createElementNS(NS, tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function drawOrgLines() {
  const svg    = document.getElementById('org-svg');
  const canvas = document.getElementById('chart-canvas');
  if (!svg || !canvas) return;

  svg.innerHTML = ''; // clear canvas

  const cr = canvas.getBoundingClientRect();
  function pos(el) {
    const savedTransform = el.style.transform;
    el.style.transform = 'none'; // measure true un-transformed rest position!
    const r = el.getBoundingClientRect();
    el.style.transform = savedTransform;
    return {
      cx:     Math.round(r.left - cr.left + r.width  / 2),
      cy:     Math.round(r.top  - cr.top  + r.height / 2),
      top:    Math.round(r.top    - cr.top),
      bottom: Math.round(r.bottom - cr.top),
      left:   Math.round(r.left   - cr.left),
      right:  Math.round(r.right  - cr.left),
    };
  }

  const sneha   = document.getElementById('node-sneha');
  const niranju = document.getElementById('node-niranju');
  const leadIds = ['node-pankaj','node-saktheeswar','node-padma','node-jayapandian',
                   'node-praveen','node-deepesh','node-virendra','node-arunkumar'];
  const leadEls = leadIds.map(id => document.getElementById(id)).filter(Boolean);
  if (!sneha || !leadEls.length) return;

  const S       = pos(sneha);
  const LP      = leadEls.map(pos);
  const GREEN   = '#00965E';
  
  // Vertical stem line height (shorter 20px gap below Sneha)
  const busY    = S.bottom + 20;
  const leftX   = Math.min(...LP.map(p => p.cx));
  const rightX  = Math.max(...LP.map(p => p.cx));
  
  // Clean triangle arrowhead dimensions
  const ARR_HW  = 5;   // arrowhead half-width (10px total width)
  const ARR_H   = 6;   // arrowhead height (6px tall)
  const BOX_GAP = 4;   // 4px gap outside card top

  function line(x1, y1, x2, y2, w) {
    svg.appendChild(svgEl('line', {
      x1, y1, x2, y2,
      stroke: GREEN,
      'stroke-width': w,
      'stroke-linecap': 'round',
      opacity: '0.92'
    }));
  }
  function dot(cx, cy, r) {
    svg.appendChild(svgEl('circle', {
      cx, cy, r,
      fill: GREEN,
      opacity: '0.95'
    }));
  }
  function arrowDown(cx, tipY) {
    const baseY = tipY - ARR_H;
    svg.appendChild(svgEl('polygon', {
      points: `${cx - ARR_HW},${baseY} ${cx + ARR_HW},${baseY} ${cx},${tipY}`,
      fill: GREEN,
      opacity: '0.95'
    }));
  }
  function arrowLeft(tipX, cy) {
    const baseX = tipX + ARR_H;
    svg.appendChild(svgEl('polygon', {
      points: `${baseX},${cy - ARR_HW} ${baseX},${cy + ARR_HW} ${tipX},${cy}`,
      fill: GREEN,
      opacity: '0.95'
    }));
  }

  // ── 0. HORIZONTAL ARROW FROM NIRANJU TO SNEHA (Niranju reports to Sneha) ──
  // Same style as lead arrows: 2.5px line + standard arrowLeft triangle
  if (niranju) {
    const N = pos(niranju);
    const tipX       = S.right + 8;           // tip stops 8px outside Sneha's right edge
    const lineStartX = N.left - 6;            // line starts 6px outside Niranju's left edge
    const lineEndX   = tipX + ARR_H;          // line ends at arrowhead base
    line(lineStartX, S.cy, lineEndX, S.cy, 2.5); // same 2.5px as lead drop lines
    arrowLeft(tipX, S.cy);                    // same standard triangle as leads
  }

  // ── 1. Vertical stem line down from Sneha (3.5px thick) ──
  line(S.cx, S.bottom, S.cx, busY, 3.5);
  dot(S.cx, busY, 6);

  // ── 2. Horizontal bus line (3px thick) ──
  line(leftX, busY, rightX, busY, 3);

  // ── 3. Drop line + clean triangle arrow per team lead (10px OUTSIDE card top) ──
  LP.forEach(lp => {
    dot(lp.cx, busY, 4);
    const tipY = lp.top - BOX_GAP; // Tip stops 4px outside card box top
    const lineEndY = tipY - ARR_H;
    // Vertical line drops from bus to arrow base
    line(lp.cx, busY, lp.cx, lineEndY, 2.5);
    // Triangle arrowhead pointing directly TOWARDS card top
    arrowDown(lp.cx, tipY);
  });

  svg.setAttribute('width',  canvas.scrollWidth);
  svg.setAttribute('height', canvas.scrollHeight);
}


// Entrance animation
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.card-manager,.card-service,.card-lead,.card-backup,.ot-chip,.onsite-bubble');
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      el.style.opacity = '';
      el.style.transform = '';
    }, 80 + i * 45);
  });



  // Draw SVG connector lines after entrance animations settle completely
  setTimeout(drawOrgLines, 100);
  setTimeout(drawOrgLines, 600);
  setTimeout(drawOrgLines, 1100);

  // Redraw on window resize
  window.addEventListener('resize', () => {
    clearTimeout(window._orgResizeTimer);
    window._orgResizeTimer = setTimeout(drawOrgLines, 100);
  });

  // ── Circular Avatar Image Upload with LocalStorage Persistence ──
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);

  // ── Photo Options Modal (Change Photo / Remove Photo) ──
  const photoModal = document.createElement('div');
  photoModal.className = 'photo-modal-overlay';
  photoModal.innerHTML = `
    <div class="photo-modal-card">
      <div class="pm-title">Profile Photo Options</div>
      <div class="pm-subtitle" id="pm-person-name">Manage Photo</div>
      <div class="pm-buttons">
        <button class="pm-btn pm-change-btn" id="pm-change-btn">📷 Change Photo</button>
        <button class="pm-btn pm-remove-btn" id="pm-remove-btn">🗑️ Remove Photo</button>
        <button class="pm-btn pm-cancel-btn" id="pm-cancel-btn">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(photoModal);

  function closePhotoModal() {
    photoModal.classList.remove('open');
  }

  photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal || e.target.id === 'pm-cancel-btn') {
      closePhotoModal();
    }
  });

  document.getElementById('pm-change-btn').addEventListener('click', () => {
    closePhotoModal();
    if (activeAvatar) {
      fileInput.value = '';
      fileInput.click();
    }
  });

  document.getElementById('pm-remove-btn').addEventListener('click', () => {
    closePhotoModal();
    if (activeAvatar) {
      activeAvatar.av.style.backgroundImage = '';
      activeAvatar.av.classList.remove('has-photo');
      try { localStorage.removeItem(activeAvatar.storageKey); } catch (err) {}
    }
  });

  document.querySelectorAll('.avatar').forEach((av, i) => {
    const card = av.closest('.card') || av.parentElement;
    const nameEl = card ? card.querySelector('.card-name, .backup-name') : null;
    const keyName = nameEl ? nameEl.innerText.trim().replace(/\s+/g, '_') : 'av_' + i;
    const storageKey = 'bnp_avatar_' + keyName;

    // Restore saved photo from localStorage
    const savedImg = localStorage.getItem(storageKey);
    if (savedImg) {
      av.style.backgroundImage = `url(${savedImg})`;
      av.classList.add('has-photo');
    }

    // Avatar click: if photo exists -> open options modal (Change / Remove); if not -> open file picker directly
    av.addEventListener('click', (e) => {
      e.stopPropagation();
      activeAvatar = { av, storageKey };
      if (av.classList.contains('has-photo')) {
        const personName = nameEl ? nameEl.innerText.trim() : 'Member';
        document.getElementById('pm-person-name').textContent = personName;
        photoModal.classList.add('open');
      } else {
        fileInput.value = '';
        fileInput.click();
      }
    });
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && activeAvatar) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const dataUrl = evt.target.result;
        activeAvatar.av.style.backgroundImage = `url(${dataUrl})`;
        activeAvatar.av.classList.add('has-photo');
        try {
          localStorage.setItem(activeAvatar.storageKey, dataUrl);
        } catch (err) {
          console.warn('LocalStorage quota exceeded for avatar image');
        }
      };
      reader.readAsDataURL(file);
    }
  });

  // ResizeObserver for rock-solid dynamic layout accuracy
  const canvas = document.getElementById('chart-canvas');
  if (canvas && window.ResizeObserver) {
    new ResizeObserver(drawOrgLines).observe(canvas);
  }
});


// ═══════════════════════════════════════════════════════
// MANAGE TEAM MEMBERS (ADD / REMOVE & LOCALSTORAGE)
// ═══════════════════════════════════════════════════════

const defaultMemberTypes = {
  // People under Subhashree (Pankaj backup):
  'Hari Vignesh': 'External',
  'Siddhesh Tawde': 'External',
  'Manju Singha': 'External',
  'Lokesh R': 'External',
  'Pradeep Pisal': 'External',
  'Varsha S': 'External',

  // People under Koushik B (Saktheeswar backup):
  'Balaji Koushik': 'External',

  // People under Sindhu R (Padma backup):
  'Harshil P': 'External',
  'Shivani U': 'External',
  'Chandresh': 'External',
  'Sivateja': 'External',
  'Sai Nagarajan': 'External',
  'Vignesh': 'External',

  // Praveen C team:
  'Sangeeta': 'External',
  'VIMALADEVI': 'External',
  'Vimala Devi': 'External',
  'Gokul KUMAR': 'External',
  'Gokul Kumar': 'External',

  // Virendra B team:
  'Archana': 'External',

  // Ajay S Shiva team:
  'Raga Swaroopa': 'External',
  'Shruthi GOWSKA': 'External',
  'Shruthi Gowsika': 'External',
  'Akash': 'External',
  'Saran': 'External',

  // Additional External Members:
  'Abinaya': 'External',
  'Javeed': 'External',
  'Shakthi': 'External',
  // Jayapandian Team:
  'Lokesh Y': 'Internal',
  'Manju Singha': 'External',
  'Raja Ganesh L': 'Internal',
  'Amit Jadhav': 'Internal',
  'Lokesh R': 'External',
  'Pradeep PISAL': 'Internal',
  'Tushar Gaikwad': 'Internal',
  'Varsha S': 'External',
  'Venkatarao': 'Internal'
};

const TEAM_STORAGE_KEY = 'bnp_org_team_data_v6';
const MEMBER_TYPES_KEY = 'bnp_org_member_types_v6';

let storedTypes = {};
try { storedTypes = JSON.parse(localStorage.getItem(MEMBER_TYPES_KEY) || '{}'); } catch(e){}
let memberTypes = Object.assign({}, defaultMemberTypes, storedTypes);

function loadPersistedTeamData() {
  const saved = localStorage.getItem(TEAM_STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.keys(parsed).forEach(k => {
        if (teamData[k]) {
          teamData[k].leadTeam = parsed[k].leadTeam || teamData[k].leadTeam;
          teamData[k].backupTeam = parsed[k].backupTeam || teamData[k].backupTeam;
        }
      });
    } catch(e) {}
  }
}
loadPersistedTeamData();

function savePersistedTeamData() {
  localStorage.setItem(TEAM_STORAGE_KEY, JSON.stringify(teamData));
  localStorage.setItem(MEMBER_TYPES_KEY, JSON.stringify(memberTypes));
  updateHeaderMemberCount();
}

function updateHeaderMemberCount() {
  const people = new Set();
  let internalCount = 0;
  let externalCount = 0;

  function addPerson(name) {
    if (!name || name === '—' || name === 'None' || people.has(name)) return;
    people.add(name);
    const status = memberTypes[name] || 'Internal';
    if (status === 'External') {
      externalCount++;
    } else {
      internalCount++;
    }
  }

  // Tier 1 Managers
  addPerson('Sneha Bhattacharjee');
  addPerson('Niranju S');

  // Tier 2 Leads, Sub-Leads, Backups & Team Reportees
  Object.values(teamData).forEach(t => {
    if (t.lead && t.lead.name) addPerson(t.lead.name);
    if (t.backup && t.backup.name) addPerson(t.backup.name);
    if (t.leadTeam) t.leadTeam.forEach(addPerson);
    if (t.backupTeam) t.backupTeam.forEach(addPerson);
  });

  const elTotal = document.getElementById('cnt-total');
  const elInt = document.getElementById('cnt-internal');
  const elExt = document.getElementById('cnt-external');

  if (elTotal) elTotal.textContent = people.size;
  if (elInt) elInt.textContent = internalCount;
  if (elExt) elExt.textContent = externalCount;
}
updateHeaderMemberCount();

function openManageModal() {
  const modal = document.getElementById('manage-modal-overlay');
  if (modal) modal.classList.add('open');
}

function closeManageModal() {
  const modal = document.getElementById('manage-modal-overlay');
  if (modal) modal.classList.remove('open');
}

function switchManageTab(tab) {
  const addBtn = document.getElementById('tab-add-btn');
  const remBtn = document.getElementById('tab-remove-btn');
  const addForm = document.getElementById('form-add-member');
  const remForm = document.getElementById('form-remove-member');

  if (tab === 'add') {
    addBtn.classList.add('active');
    remBtn.classList.remove('active');
    addForm.style.display = 'flex';
    remForm.style.display = 'none';
  } else {
    remBtn.classList.add('active');
    addBtn.classList.remove('active');
    remForm.style.display = 'flex';
    addForm.style.display = 'none';
  }
}

function populateRemoveMemberList() {
  const leadKey = document.getElementById('remove-member-lead').value;
  const select = document.getElementById('remove-member-name');
  select.innerHTML = '<option value="">-- Select Member --</option>';

  if (!leadKey || !teamData[leadKey]) return;

  const leadObj = teamData[leadKey];
  const allMembers = [];

  if (leadObj.leadTeam) {
    leadObj.leadTeam.forEach(m => allMembers.push({ name: m, type: 'lead' }));
  }
  if (leadObj.backupTeam) {
    leadObj.backupTeam.forEach(m => allMembers.push({ name: m, type: 'backup' }));
  }

  allMembers.forEach(item => {
    const opt = document.createElement('option');
    opt.value = `${item.type}:${item.name}`;
    const status = memberTypes[item.name] || 'Internal';
    opt.textContent = `${item.name} (${item.type === 'lead' ? 'Direct' : 'Backup'} - ${status})`;
    select.appendChild(opt);
  });
}

function handleAddMember(e) {
  e.preventDefault();
  const name = document.getElementById('add-member-name').value.trim();
  const leadKey = document.getElementById('add-member-lead').value;
  const empType = document.getElementById('add-member-type').value;
  const assignRole = document.getElementById('add-member-role').value;

  if (!name || !leadKey || !teamData[leadKey]) return;

  const targetArr = assignRole === 'lead' ? teamData[leadKey].leadTeam : teamData[leadKey].backupTeam;
  if (!targetArr.includes(name)) {
    targetArr.push(name);
  }

  memberTypes[name] = empType;

  savePersistedTeamData();
  closeManageModal();
  document.getElementById('form-add-member').reset();
  alert(`✅ Member "${name}" successfully added to ${teamData[leadKey].lead.name}'s team as ${empType}!`);
}

function handleRemoveMember(e) {
  e.preventDefault();
  const leadKey = document.getElementById('remove-member-lead').value;
  const selectedVal = document.getElementById('remove-member-name').value;

  if (!leadKey || !selectedVal || !teamData[leadKey]) return;

  const [roleType, name] = selectedVal.split(':');
  const targetArr = roleType === 'lead' ? teamData[leadKey].leadTeam : teamData[leadKey].backupTeam;

  const idx = targetArr.indexOf(name);
  if (idx !== -1) {
    targetArr.splice(idx, 1);
  }

  delete memberTypes[name];

  savePersistedTeamData();
  closeManageModal();
  document.getElementById('form-remove-member').reset();
  alert(`🗑️ Member "${name}" removed from ${teamData[leadKey].lead.name}'s team!`);
}


// ═══════════════════════════════════════════════════════
// ONSITE COUNTERPART HOVER POPOVER
// ═══════════════════════════════════════════════════════

const onsiteTooltip = document.createElement('div');
onsiteTooltip.className = 'onsite-hover-popover';
document.body.appendChild(onsiteTooltip);

document.addEventListener('mouseover', (e) => {
  const card = e.target.closest('[data-onsite]');
  if (card) {
    const attr = card.getAttribute('data-onsite');
    if (!attr) return;
    const onsiteNames = attr.split('|').map(s => s.trim()).filter(Boolean);
    if (onsiteNames.length === 0) return;

    const listHtml = onsiteNames.map(name => `<div class="ohp-item">👤 ${name}</div>`).join('');
    onsiteTooltip.innerHTML = `
      <div class="ohp-title">📍 Onsite Counterpart</div>
      <div class="ohp-list">${listHtml}</div>
    `;

    const rect = card.getBoundingClientRect();
    onsiteTooltip.style.left = `${rect.left + rect.width / 2}px`;
    onsiteTooltip.style.top = `${rect.top - 8}px`;
    onsiteTooltip.classList.add('visible');
  }
});

document.addEventListener('mouseout', (e) => {
  const card = e.target.closest('[data-onsite]');
  if (card) {
    onsiteTooltip.classList.remove('visible');
  }
});
