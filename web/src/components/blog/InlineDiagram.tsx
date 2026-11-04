import React from "react";
import styles from "./InlineDiagram.module.css";

// =============================================================================
// 1. POST 1: 30/40/30 MILESTONE CAPITAL PIPELINE (Dual-Lane Exposure Architecture)
// =============================================================================
export function MilestoneTimelineDiagram() {
  return (
    <figure
      className={styles.figure}
      role="region"
      aria-label="Traditional Agency Retainers vs. 30/40/30 Milestone Payment Governance"
    >
      <div className={styles.graphicCard}>
        {/* Schematic Header */}
        <div className={styles.graphicHeader}>
          <div>
            <span className={styles.tagMono}>CAPITAL EXPOSURE &amp; RISK ARCHITECTURE</span>
            <h3 className={styles.graphicTitle}>
              Traditional Agency Retainers vs. 30/40/30 Milestone Governance
            </h3>
          </div>
          <span className={styles.graphicBadge}>Capital Follows Working Software</span>
        </div>

        {/* LANE 1: Traditional Agency Procurement (High Founder Exposure) */}
        <div className={styles.tradLane}>
          <div className={styles.laneMetaRow}>
            <span className={styles.tradBadge}>TRADITIONAL AGENCY MODEL</span>
            <span className={styles.tradMetaLabel}>100% Upfront Retainer or Open Hourly Burn</span>
          </div>

          <div className={styles.tradTimelineBar}>
            <div className={styles.tradDepositBlock}>
              <span className={styles.tradBlockNum}>50% – 100%</span>
              <span className={styles.tradBlockLabel}>Cash Paid Day 0</span>
            </div>
            <div className={styles.tradOpaqueBlock}>
              <div className={styles.opaqueTitleRow}>
                <span className={styles.opaqueStripe} />
                <span className={styles.opaqueText}>8–12 WEEKS OPAQUE GAP</span>
                <span className={styles.opaqueStripe} />
              </div>
              <span className={styles.opaqueSubtext}>
                Slide decks &amp; Figma mockups · Zero inspectable software running on devices
              </span>
            </div>
            <div className={styles.tradCliffBlock}>
              <span className={styles.cliffTitle}>Delivery Cliff</span>
              <span className={styles.cliffSubtext}>Disputes &amp; 0% leverage</span>
            </div>
          </div>

          <div className={styles.tradFootnote}>
            Founder surrenders financial leverage on day one before testing a single database transaction.
          </div>
        </div>

        {/* SEPARATOR BADGE */}
        <div className={styles.vsSeparator}>
          <span className={styles.vsLine} />
          <span className={styles.vsText}>VERSUS</span>
          <span className={styles.vsLine} />
        </div>

        {/* LANE 2: Ship Thesis 30/40/30 Milestone Governance */}
        <div className={styles.milestoneLane}>
          <div className={styles.laneMetaRow}>
            <span className={styles.milestoneBadge}>SHIP THESIS GOVERNANCE</span>
            <span className={styles.milestoneMetaLabel}>30/40/30 Gated Milestone Releases</span>
          </div>

          <div className={styles.milestoneStepperTrack}>
            {/* Stage 1 */}
            <div className={styles.stepperBlock}>
              <div className={styles.stepperTop}>
                <span className={styles.stepperIndex}>01</span>
                <span className={styles.stepperTranche}>30% DEPOSIT</span>
              </div>
              <div className={styles.stepperTitle}>Repository &amp; Cloud Setup</div>
              <div className={styles.stepperGate}>
                <strong>Acceptance:</strong> Initial code pushed to client GitHub org; Supabase &amp; Vercel root provisioned in client name.
              </div>
              <div className={styles.stepperRetention}>
                Founder keeps <strong>70%</strong> capital in bank
              </div>
            </div>

            <div className={styles.stepperArrow} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Stage 2 */}
            <div className={styles.stepperBlock}>
              <div className={styles.stepperTop}>
                <span className={styles.stepperIndex}>02</span>
                <span className={styles.stepperTranche}>40% MIDPOINT</span>
              </div>
              <div className={styles.stepperTitle}>Interactive Phone Build</div>
              <div className={styles.stepperGate}>
                <strong>Acceptance:</strong> TestFlight build running on physical phone; authenticated user session with live DB transactions.
              </div>
              <div className={styles.stepperRetention}>
                Founder keeps <strong>30%</strong> capital in bank
              </div>
            </div>

            <div className={styles.stepperArrow} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Stage 3 */}
            <div className={styles.stepperBlock}>
              <div className={styles.stepperTop}>
                <span className={styles.stepperIndex}>03</span>
                <span className={styles.stepperTranche}>30% FINAL</span>
              </div>
              <div className={styles.stepperTitle}>Production &amp; IP Handover</div>
              <div className={styles.stepperGate}>
                <strong>Acceptance:</strong> Store submission under client D-U-N-S listing; statutory bespoke IP assignment signed.
              </div>
              <div className={styles.stepperRetention}>
                100% delivered · 30-day warranty starts
              </div>
            </div>
          </div>

          <div className={styles.milestoneFootnote}>
            Capital releases only after you test working code on your own phone. Full IP transferred tranche by tranche.
          </div>
        </div>

        {/* Bottom Invariant Strip */}
        <div className={styles.invariantStrip}>
          <div className={styles.invariantItem}>
            <span className={styles.invariantLabel}>PAYMENT TRIGGER</span>
            <span className={styles.invariantValue}>Tested working software on physical device</span>
          </div>
          <div className={styles.invariantItem}>
            <span className={styles.invariantLabel}>CLIENT LEVERAGE</span>
            <span className={styles.invariantValue}>Founder retains majority capital through staging</span>
          </div>
          <div className={styles.invariantItem}>
            <span className={styles.invariantLabel}>HOURLY BILLING RISK</span>
            <span className={styles.invariantValue}>$0 overage guarantee (Terms §02)</span>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.figureNum}>Figure 1:</span> Capital exposure comparison. Traditional upfront retainers transfer 100% risk to the founder on day one, while 30/40/30 milestone governance keeps capital locked until verifiable software is delivered.
      </figcaption>
    </figure>
  );
}

// =============================================================================
// 2. POST 2: THREE-SCREEN MVP WIREFRAME ARCHITECTURE (Perfect Alignment)
// =============================================================================
export function ThreeScreenMvpDiagram() {
  return (
    <figure
      className={styles.figure}
      role="region"
      aria-label="The Three-Screen Core Loop Architecture: Phone Wireframes and V1 Scope Trimming"
    >
      <div className={styles.graphicCard}>
        <div className={styles.graphicHeader}>
          <div>
            <span className={styles.tagMono}>V1 PRODUCT SCOPE SPECIFICATION</span>
            <h3 className={styles.graphicTitle}>
              The Three-Screen Core Loop Architecture
            </h3>
          </div>
          <span className={styles.graphicBadge}>The Phone is the Hero Object</span>
        </div>

        {/* 3 Wireframe Phone Displays with Connected Arrows */}
        <div className={styles.wireframeGrid}>
          {/* Screen 1: Input Trigger */}
          <div className={styles.phoneCard}>
            <div className={styles.phoneDevice}>
              <div className={styles.phoneTopNotch}>
                <span>9:41</span>
                <div className={styles.phoneDynamicIsland} />
                <span>5G</span>
              </div>
              <div className={styles.screenContent}>
                <span className={styles.screenHeaderTitle}>Screen 01 · Input</span>
                <div className={styles.uiGroup}>
                  <div className={styles.uiInputItem}>user@company.com</div>
                  <div className={styles.uiInputItem}>••••••••••••</div>
                  <div className={`${styles.uiInputItem} ${styles.uiInputActive}`}>
                    Primary user input...
                  </div>
                  <div className={styles.uiPrimaryBtn}>Submit Action →</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow 1 -> 2 */}
          <div className={styles.arrowCol} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.arrowLabel}>Payload</span>
          </div>

          {/* Screen 2: Processing Engine */}
          <div className={styles.phoneCard}>
            <div className={styles.phoneDevice}>
              <div className={styles.phoneTopNotch}>
                <span>9:41</span>
                <div className={styles.phoneDynamicIsland} />
                <span>5G</span>
              </div>
              <div className={styles.screenContent}>
                <span className={styles.screenHeaderTitle}>Screen 02 · Engine</span>
                <div className={styles.uiStateCard}>
                  <span className={styles.statusLabel}>Processing Core Logic...</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} />
                  </div>
                  <div className={styles.uiInputItem}>DB Transaction: Verified</div>
                  <div className={styles.uiInputItem}>Row Level Security: OK</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow 2 -> 3 */}
          <div className={styles.arrowCol} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.arrowLabel}>Artifact</span>
          </div>

          {/* Screen 3: Output Artifact */}
          <div className={styles.phoneCard}>
            <div className={styles.phoneDevice}>
              <div className={styles.phoneTopNotch}>
                <span>9:41</span>
                <div className={styles.phoneDynamicIsland} />
                <span>5G</span>
              </div>
              <div className={styles.screenContent}>
                <span className={styles.screenHeaderTitle}>Screen 03 · Payoff</span>
                <div className={styles.artifactBox}>
                  <svg className={styles.checkCircle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className={styles.statusLabel}>Value Delivered</span>
                  <div className={styles.uiPrimaryBtn}>Export Artifact →</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aligned Scope Spec Row */}
        <div className={styles.scopeSpecRow}>
          <div className={styles.scopeSpecCard}>
            <div className={styles.scopeSpecTitle}>1. Input Trigger</div>
            <div className={styles.specKeep}>✓ Included: Email auth &amp; single input payload</div>
            <div className={styles.specCut}>— Excluded: Social OAuth, avatars, onboarding tours</div>
          </div>

          <div className={styles.specSpacer} aria-hidden="true" />

          <div className={styles.scopeSpecCard}>
            <div className={styles.scopeSpecTitle}>2. Core Engine</div>
            <div className={styles.specKeep}>✓ Included: Proprietary algorithm &amp; DB write</div>
            <div className={styles.specCut}>— Excluded: In-app chat, activity feeds, multi-tier RBAC</div>
          </div>

          <div className={styles.specSpacer} aria-hidden="true" />

          <div className={styles.scopeSpecCard}>
            <div className={styles.scopeSpecTitle}>3. Value Payoff</div>
            <div className={styles.specKeep}>✓ Included: Clean data payoff &amp; PDF/link export</div>
            <div className={styles.specCut}>— Excluded: Custom themes, dark mode toggles, analytics</div>
          </div>
        </div>

        <div className={styles.footerQuote}>
          <strong>SCOPE-1 INVARIANT:</strong> A first MVP is scoped down to about three core screens or workflows to test the primary value hypothesis before adding secondary features.
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.figureNum}>Figure 1:</span> The three-screen core loop architecture. Every feature outside this single input-process-output path is trimmed to preserve founder runway.
      </figcaption>
    </figure>
  );
}

// =============================================================================
// 3. POST 3: CODE OWNERSHIP ARCHITECTURE (Perimeter Blueprint & Zero Red)
// =============================================================================
export function CodeOwnershipPillarsDiagram() {
  return (
    <figure
      className={styles.figure}
      role="region"
      aria-label="Client Security Perimeter & Day-One Code Ownership Topology"
    >
      <div className={styles.graphicCard}>
        <div className={styles.graphicHeader}>
          <div>
            <span className={styles.tagMono}>INFRASTRUCTURE TOPOLOGY &amp; PERMISSION BOUNDARIES</span>
            <h3 className={styles.graphicTitle}>
              The Three Technical Pillars of Day-One Code Ownership
            </h3>
          </div>
          <span className={styles.graphicBadge}>100% Client Organization Control</span>
        </div>

        {/* The Outer Legal & Security Perimeter */}
        <div className={styles.topologyPerimeter}>
          <div className={styles.perimeterBanner}>
            <div className={styles.perimeterTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>FOUNDER&apos;S ROOT ASSET &amp; INFRASTRUCTURE PERIMETER</span>
            </div>
            <span className={styles.perimeterTag}>YOU ARE SOLE ROOT ADMIN</span>
          </div>

          <div className={styles.nodesGrid}>
            {/* Pillar 1: GitHub */}
            <div className={styles.nodeCard}>
              <div className={styles.nodeTop}>
                <div className={styles.nodeHeaderRow}>
                  <span className={styles.nodeBadge}>PILLAR 01</span>
                  <span className={styles.nodeTypeTag}>VCS</span>
                </div>
                <div className={styles.nodeTitle}>Client GitHub Org</div>
                <div className={styles.nodeCode}>github.com/[your-startup]/app</div>
              </div>
              <div className={styles.nodeRule}>
                <strong>OWN-1:</strong> Code lives in client GitHub from commit one. Studio engineers commit via pull requests. Zero private agency forks.
              </div>
            </div>

            {/* Pillar 2: Cloud Database */}
            <div className={styles.nodeCard}>
              <div className={styles.nodeTop}>
                <div className={styles.nodeHeaderRow}>
                  <span className={styles.nodeBadge}>PILLAR 02</span>
                  <span className={styles.nodeTypeTag}>CLOUD &amp; DB</span>
                </div>
                <div className={styles.nodeTitle}>Supabase &amp; Hosting</div>
                <div className={styles.nodeCode}>postgresql://postgres:[key]@db...</div>
              </div>
              <div className={styles.nodeRule}>
                <strong>Terms §06:</strong> Cloud accounts billed to your card. You hold root passwords. Zero proxy hosting or proprietary wrappers.
              </div>
            </div>

            {/* Pillar 3: App Stores */}
            <div className={styles.nodeCard}>
              <div className={styles.nodeTop}>
                <div className={styles.nodeHeaderRow}>
                  <span className={styles.nodeBadge}>PILLAR 03</span>
                  <span className={styles.nodeTypeTag}>STORES</span>
                </div>
                <div className={styles.nodeTitle}>Apple &amp; Google Consoles</div>
                <div className={styles.nodeCode}>developer.apple.com (D-U-N-S)</div>
              </div>
              <div className={styles.nodeRule}>
                <strong>OWN-3:</strong> Accounts registered to your legal entity. Studio invited as &ldquo;Developer&rdquo; role only. You own the listing.
              </div>
            </div>
          </div>
        </div>

        {/* Calm Neutral Callout (Zero Red) */}
        <div className={styles.antiPatternCalloutNeutral}>
          <span className={styles.calloutIcon} aria-hidden="true">ℹ️</span>
          <div>
            <div className={styles.calloutTitle}>The Hostage Repository Anti-Pattern to Reject</div>
            <div className={styles.calloutText}>
              Never let an agency build in their private GitHub organization or host staging on their agency AWS account. If a contract dispute arises, your code and database are held hostage until final settlement.
            </div>
          </div>
        </div>

        <div className={styles.footerQuote}>
          <strong>TERMS §02 GUARANTEE:</strong> All custom source code, design systems, assets, and database schemas created for your project are assigned to you upon payment of each milestone.
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.figureNum}>Figure 1:</span> Day-one asset topology. The founder owns the root accounts for version control, cloud infrastructure, and store consoles from day one.
      </figcaption>
    </figure>
  );
}

// =============================================================================
// 4. POST 4: THE 5-DAY WEEKLY WORKING BUILD RHYTHM (Continuous Verification)
// =============================================================================
export function WeeklyBuildRhythmDiagram() {
  return (
    <figure
      className={styles.figure}
      role="region"
      aria-label="The 5-Day Weekly Working Build Delivery Rhythm"
    >
      <div className={styles.graphicCard}>
        <div className={styles.graphicHeader}>
          <div>
            <span className={styles.tagMono}>CONTINUOUS DEVICE VERIFICATION CADENCE</span>
            <h3 className={styles.graphicTitle}>
              The 5-Day Working Build Rhythm (Monday Scope to Friday Device Drop)
            </h3>
          </div>
          <span className={styles.graphicBadge}>Every Friday at 17:00</span>
        </div>

        {/* The 3-Step Horizontal Timeline Grid */}
        <div className={styles.rhythmGrid}>
          {/* Day 1 */}
          <div className={styles.rhythmStageCard}>
            <div>
              <div className={styles.rhythmStageHeader}>
                <span className={styles.dayBadge}>MON 09:00</span>
                <span className={styles.phaseNum}>PHASE 01</span>
              </div>
              <div className={styles.rhythmStageTitle}>Fixed Scope Lock</div>
            </div>
            <div className={styles.rhythmActionBox}>
              Agree on 3–5 core user stories for the week. Scope is frozen in writing; no mid-week feature creep allowed.
            </div>
          </div>

          {/* Days 2-4 */}
          <div className={styles.rhythmStageCard}>
            <div>
              <div className={styles.rhythmStageHeader}>
                <span className={styles.dayBadge}>TUE – THU</span>
                <span className={styles.phaseNum}>PHASE 02</span>
              </div>
              <div className={styles.rhythmStageTitle}>Automated CI/CD Engine</div>
            </div>
            <div className={styles.rhythmActionBox}>
              <div>Continuous commits to client repository with automated test execution.</div>
              <div className={styles.ciPassBadge}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>GitHub Actions · Build Passing</span>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className={styles.rhythmStageCard}>
            <div>
              <div className={styles.rhythmStageHeader}>
                <span className={styles.dayBadge}>FRI 17:00</span>
                <span className={styles.phaseNum}>PHASE 03</span>
              </div>
              <div className={styles.rhythmStageTitle}>Physical Device Drop</div>
            </div>
            <div className={styles.phoneNoticeBox}>
              <span className={styles.noticeAppTitle}>📱 TestFlight Notification</span>
              <span className={styles.noticeBody}>Ship Thesis Build v0.4 (Build 12) is ready to test on your phone.</span>
            </div>
          </div>
        </div>

        {/* Calm Side-by-Side Comparison (Zero Red) */}
        <div className={styles.rhythmComparisonRow}>
          <div className={styles.compareCellNeutral}>
            <strong>Traditional Agency Status Calls</strong>
            60-minute Zoom meetings reviewing slide decks and Figma prototypes that conceal broken API endpoints, slow database queries, and OS crashes until week 12.
          </div>
          <div className={styles.compareCellAccent}>
            <strong>Physical Phone Verification</strong>
            You tap, scroll, and test on physical hardware—verifying cellular network drops, camera permissions, and battery impact on your Friday evening commute.
          </div>
        </div>

        <div className={styles.footerQuote}>
          <strong>BUILD-1 INVARIANT:</strong> Every week, you receive a working build on your physical phone, verified before it reaches you.
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.figureNum}>Figure 1:</span> The 5-day delivery loop. From Monday scope lock to Friday TestFlight drop, engineering velocity is verified on physical hardware.
      </figcaption>
    </figure>
  );
}
