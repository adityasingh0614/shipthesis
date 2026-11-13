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

// =============================================================================
// 5. POST 5: FLUTTER VS REACT NATIVE RENDERING PIPELINE
// =============================================================================
export function FlutterVsReactNativeDiagram() {
  return (
    <figure
      className={styles.figure}
      role="region"
      aria-label="Flutter Direct Canvas vs React Native Bridge Architecture"
    >
      <div className={styles.graphicCard}>
        <div className={styles.graphicHeader}>
          <div>
            <span className={styles.tagMono}>MOBILE RENDERING RUNTIME TOPOLOGY</span>
            <h3 className={styles.graphicTitle}>
              Direct Canvas Rendering (Flutter) vs. Platform Bridge (React Native)
            </h3>
          </div>
          <span className={styles.graphicBadge}>Native GPU Pipeline</span>
        </div>

        <div className={styles.engineComparisonGrid}>
          {/* Lane 1: Flutter */}
          <div className={styles.engineLaneFlutter}>
            <div className={styles.laneHeader}>
              <span className={styles.laneTitle}>Flutter (Impeller Engine)</span>
              <span className={styles.laneBadgeFlutter}>DIRECT CANVAS · 60 FPS</span>
            </div>

            <div className={styles.pipelineSteps}>
              <div className={styles.pipelineStepBox}>
                <span className={styles.pipelineStepNum}>1</span>
                <div>
                  <strong>Dart Code</strong>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-soft)" }}>Strongly typed UI widget tree</div>
                </div>
              </div>
              <div className={styles.pipelineStepBox}>
                <span className={styles.pipelineStepNum}>2</span>
                <div>
                  <strong>AOT Compilation (ARM64)</strong>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-soft)" }}>Zero JavaScript interpreter or bridge</div>
                </div>
              </div>
              <div className={styles.pipelineStepBox}>
                <span className={styles.pipelineStepNum}>3</span>
                <div>
                  <strong>Impeller GPU Rasterization</strong>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-soft)" }}>Direct Metal (iOS) &amp; Vulkan (Android) paint</div>
                </div>
              </div>
            </div>

            <div className={styles.laneVerdict}>
              <strong>Visual Consistency:</strong> Renders identically on every phone regardless of vendor skin or OS version.
            </div>
          </div>

          {/* Lane 2: React Native */}
          <div className={styles.engineLaneRN}>
            <div className={styles.laneHeader}>
              <span className={styles.laneTitle}>React Native (Hermes / Fabric)</span>
              <span className={styles.laneBadgeRN}>OEM PLATFORM MAPPING</span>
            </div>

            <div className={styles.pipelineSteps}>
              <div className={styles.pipelineStepBox}>
                <span className={styles.pipelineStepNumRN}>1</span>
                <div>
                  <strong>TypeScript Code</strong>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-soft)" }}>React component tree &amp; JSX</div>
                </div>
              </div>
              <div className={styles.pipelineStepBox}>
                <span className={styles.pipelineStepNumRN}>2</span>
                <div>
                  <strong>Hermes Bytecode Engine</strong>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-soft)" }}>JSI bridge serializes messages</div>
                </div>
              </div>
              <div className={styles.pipelineStepBox}>
                <span className={styles.pipelineStepNumRN}>3</span>
                <div>
                  <strong>Native OEM Views</strong>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-soft)" }}>Maps to iOS UIView &amp; Android View</div>
                </div>
              </div>
            </div>

            <div className={styles.laneVerdict}>
              <strong>Ecosystem Strength:</strong> Shares component models and business logic with existing React web apps.
            </div>
          </div>
        </div>

        <div className={styles.footerQuote}>
          <strong>STACK-2 INVARIANT:</strong> Flutter compiles directly to native ARM machine code with its own rendering engine, ensuring pixel-accurate consistency across iOS and Android.
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.figureNum}>Figure 1:</span> Architectural rendering differences between Flutter&apos;s direct GPU painting and React Native&apos;s native view bridge mapping.
      </figcaption>
    </figure>
  );
}

// =============================================================================
// 6. POST 6: NEXT.JS & SUPABASE MULTI-TENANT RLS ARCHITECTURE
// =============================================================================
export function MultiTenantSecurityDiagram() {
  return (
    <figure
      className={styles.figure}
      role="region"
      aria-label="Multi-Tenant Row Level Security Architecture"
    >
      <div className={styles.graphicCard}>
        <div className={styles.graphicHeader}>
          <div>
            <span className={styles.tagMono}>DATA ISOLATION &amp; AUTHORIZATION KERNEL</span>
            <h3 className={styles.graphicTitle}>
              Three-Tier Multi-Tenant Security: App Router to Postgres RLS
            </h3>
          </div>
          <span className={styles.graphicBadge}>Database-Enforced Perimeter</span>
        </div>

        <div className={styles.multiTenantGrid}>
          {/* Tier 1 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNum}>TIER 01</span>
              <span className={styles.tierBadge}>FRONTEND</span>
            </div>
            <div className={styles.tierTitle}>Next.js App Router</div>
            <div className={styles.tierContent}>
              <span>Server Components query database via authenticated HTTP-only cookie tokens.</span>
              <div className={styles.tierCodeSnippet}>auth.getUser()</div>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.arrowCol}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Tier 2 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNum}>TIER 02</span>
              <span className={styles.tierBadge}>AUTH CONTEXT</span>
            </div>
            <div className={styles.tierTitle}>Supabase Auth Claims</div>
            <div className={styles.tierContent}>
              <span>JWT session claims carry verified organization and role boundaries.</span>
              <div className={styles.tierCodeSnippet}>jwt.claims.org_id</div>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.arrowCol}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Tier 3 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNum}>TIER 03</span>
              <span className={styles.tierBadge}>POSTGRES KERNEL</span>
            </div>
            <div className={styles.tierTitle}>PostgreSQL RLS Engine</div>
            <div className={styles.tierContent}>
              <span>Database enforces query filter automatically at the engine level.</span>
              <div className={styles.tenantSplitBoxes}>
                <div className={styles.tenantBoxActive}>
                  <span>✓</span>
                  <span>Tenant A (Active Rows)</span>
                </div>
                <div className={styles.tenantBoxIsolated}>
                  <span>✕</span>
                  <span>Tenant B (Zero Access)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerQuote}>
          <strong>STACK-3 INVARIANT:</strong> Data isolation is evaluated by the PostgreSQL kernel on every query, preventing cross-tenant leakage at the database layer.
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.figureNum}>Figure 1:</span> Multi-tenant isolation flow. PostgreSQL RLS policies evaluate session claims inside the database engine, preventing cross-tenant exposure.
      </figcaption>
    </figure>
  );
}

// =============================================================================
// 7. POST 7: DEV STUDIO VETTING GATES
// =============================================================================
export function AgencyVettingChecklistDiagram() {
  return (
    <figure
      className={styles.figure}
      role="region"
      aria-label="Founder Due Diligence Vetting Matrix"
    >
      <div className={styles.graphicCard}>
        <div className={styles.graphicHeader}>
          <div>
            <span className={styles.tagMono}>CONTRACT GOVERNANCE &amp; RISK AUDIT</span>
            <h3 className={styles.graphicTitle}>
              The Three Essential Governance Gates Before Signing
            </h3>
          </div>
          <span className={styles.graphicBadge}>Founder Protection Matrix</span>
        </div>

        <div className={styles.vettingGatesGrid}>
          {/* Gate 1 */}
          <div className={styles.vettingCard}>
            <div className={styles.vettingHeader}>
              <span className={styles.vettingGateNum}>GATE 01</span>
              <span className={styles.tagMono}>OWN-1</span>
            </div>
            <div className={styles.vettingTitle}>Repository Location</div>
            <div className={styles.flagRowGreen}>
              <strong>Green Flag</strong>
              Client GitHub organization from commit one. Studio works via pull requests. You are sole root admin.
            </div>
            <div className={styles.flagRowNeutral}>
              <strong>Red Flag</strong>
              Code developed in private agency repository with promised zip transfer upon final invoice.
            </div>
          </div>

          {/* Gate 2 */}
          <div className={styles.vettingCard}>
            <div className={styles.vettingHeader}>
              <span className={styles.vettingGateNum}>GATE 02</span>
              <span className={styles.tagMono}>BILL-1 · BILL-4</span>
            </div>
            <div className={styles.vettingTitle}>Payment Model</div>
            <div className={styles.flagRowGreen}>
              <strong>Green Flag</strong>
              30/40/30 milestone split tied to verifiable test builds. 7 business days inspection window.
            </div>
            <div className={styles.flagRowNeutral}>
              <strong>Red Flag</strong>
              50% upfront deposit or open-ended hourly timesheets billing for developer learning curves.
            </div>
          </div>

          {/* Gate 3 */}
          <div className={styles.vettingCard}>
            <div className={styles.vettingHeader}>
              <span className={styles.vettingGateNum}>GATE 03</span>
              <span className={styles.tagMono}>BUILD-1</span>
            </div>
            <div className={styles.vettingTitle}>Verification Rhythm</div>
            <div className={styles.flagRowGreen}>
              <strong>Green Flag</strong>
              Fresh installable test build delivered every Friday to your physical phone via TestFlight.
            </div>
            <div className={styles.flagRowNeutral}>
              <strong>Red Flag</strong>
              Monthly 60-minute Zoom meetings presenting clickable Figma files and slide decks.
            </div>
          </div>
        </div>

        <div className={styles.footerQuote}>
          <strong>TERMS-REV-1 INVARIANT:</strong> Client has 7 business days following delivery of each milestone build to test and inspect deliverables against written scope.
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.figureNum}>Figure 1:</span> Due diligence framework for vetting dev studios. Verifiable repository ownership and milestone gates eliminate agency delivery risks.
      </figcaption>
    </figure>
  );
}

// =============================================================================
// 8. POST 8: STREAMING AI WORKFLOW & STRUCTURED OUTPUT ARCHITECTURE
// =============================================================================
export function AiWorkflowArchitectureDiagram() {
  return (
    <figure
      className={styles.figure}
      role="region"
      aria-label="Streaming AI Workflow and Structured Output Architecture"
    >
      <div className={styles.graphicCard}>
        <div className={styles.graphicHeader}>
          <div>
            <span className={styles.tagMono}>AI PIPELINE RUNTIME TOPOLOGY</span>
            <h3 className={styles.graphicTitle}>
              Three-Tier AI Pipeline: Client Streaming to Validated Postgres State
            </h3>
          </div>
          <span className={styles.graphicBadge}>Zod Schema Contract</span>
        </div>

        <div className={styles.multiTenantGrid}>
          {/* Tier 1 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNum}>TIER 01</span>
              <span className={styles.tierBadge}>CLIENT DOM</span>
            </div>
            <div className={styles.tierTitle}>Next.js Client SSE</div>
            <div className={styles.tierContent}>
              <span>Consumes Server-Sent Events stream for instant token rendering.</span>
              <div className={styles.tierCodeSnippet}>useCompletion()</div>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.arrowCol}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Tier 2 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNum}>TIER 02</span>
              <span className={styles.tierBadge}>RUNTIME GUARD</span>
            </div>
            <div className={styles.tierTitle}>Zod Schema Validation</div>
            <div className={styles.tierContent}>
              <span>Validates JSON structure at runtime, blocking malformed model outputs.</span>
              <div className={styles.tierCodeSnippet}>AnalysisSchema.parse()</div>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.arrowCol}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Tier 3 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNum}>TIER 03</span>
              <span className={styles.tierBadge}>PERSISTENCE</span>
            </div>
            <div className={styles.tierTitle}>PostgreSQL Entity State</div>
            <div className={styles.tierContent}>
              <span>Stores validated entity records and token usage metadata in tenant partition.</span>
              <div className={styles.tenantSplitBoxes}>
                <div className={styles.tenantBoxActive}>
                  <span>✓</span>
                  <span>Typed Entity Record</span>
                </div>
                <div className={styles.tenantBoxActive}>
                  <span>✓</span>
                  <span>Token Ledger &amp; Cache</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerQuote}>
          <strong>STACK-1 &amp; STACK-3 INVARIANT:</strong> AI responses stream directly to the browser for low latency and validate against strict Zod schemas before writing typed records to PostgreSQL.
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.figureNum}>Figure 1:</span> Architectural flow of AI streaming and structured validation from Next.js client components to PostgreSQL persistence.
      </figcaption>
    </figure>
  );
}

// =============================================================================
// 9. POST 9: STRIPE WEBHOOK IDEMPOTENCY & TRANSACTIONAL DISPATCH
// =============================================================================
export function StripeWebhookIdempotencyDiagram() {
  return (
    <figure
      className={styles.figure}
      role="region"
      aria-label="Stripe Webhook Idempotency and State Synchronization Architecture"
    >
      <div className={styles.graphicCard}>
        <div className={styles.graphicHeader}>
          <div>
            <span className={styles.tagMono}>PAYMENT INGESTION TOPOLOGY</span>
            <h3 className={styles.graphicTitle}>
              Idempotent Webhook Pipeline: HMAC Verification to Atomic Commit
            </h3>
          </div>
          <span className={styles.graphicBadge}>Zero Duplicate Billing</span>
        </div>

        <div className={styles.multiTenantGrid}>
          {/* Tier 1 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNum}>TIER 01</span>
              <span className={styles.tierBadge}>STRIPE DISPATCH</span>
            </div>
            <div className={styles.tierTitle}>HMAC Signature Guard</div>
            <div className={styles.tierContent}>
              <span>Verifies raw request buffer against signing secret to prevent payload spoofing.</span>
              <div className={styles.tierCodeSnippet}>constructEvent(rawBody)</div>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.arrowCol}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Tier 2 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNum}>TIER 02</span>
              <span className={styles.tierBadge}>IDEMPOTENCY LOCK</span>
            </div>
            <div className={styles.tierTitle}>Event Ledger Check</div>
            <div className={styles.tierContent}>
              <span>Queries processed_events table by unique event_id before mutating user state.</span>
              <div className={styles.tenantSplitBoxes}>
                <div className={styles.tenantBoxActive}>
                  <span>✓</span>
                  <span>New: Execute Mutation</span>
                </div>
                <div className={styles.tenantBoxIsolated}>
                  <span>✕</span>
                  <span>Duplicate: Fast 200 Ack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.arrowCol}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Tier 3 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNum}>TIER 03</span>
              <span className={styles.tierBadge}>ATOMIC COMMIT</span>
            </div>
            <div className={styles.tierTitle}>PostgreSQL Transaction</div>
            <div className={styles.tierContent}>
              <span>Atomically updates customer tier and records processed event in single transaction.</span>
              <div className={styles.tierCodeSnippet}>processed_events.insert()</div>
            </div>
          </div>
        </div>

        <div className={styles.footerQuote}>
          <strong>STACK-4 INVARIANT:</strong> Payment webhooks verify cryptographic signatures and record unique event IDs in PostgreSQL, eliminating duplicate account credits.
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.figureNum}>Figure 1:</span> Four-stage Stripe webhook ingestion pipeline with cryptographic verification and PostgreSQL idempotency locking.
      </figcaption>
    </figure>
  );
}
