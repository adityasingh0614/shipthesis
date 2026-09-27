> **PRIVATE — DO NOT PUBLISH.** Former-employer IP. Nothing from this file goes on the site: no name, card, case study or screenshots.

# Case Study (Raw): Pawgloo — Location-Based Social Platform for Dog Owners

> Portfolio case study raw draft. Written for a non-technical founder evaluating whether to hire us.

## 1. One-line description

**Pawgloo is a pet-first platform for dog and cat owners, bringing local connections, pet services, expert care, and AI-powered pet experiences into one place.** [EVIDENCE: user-provided product description]

The product combines location-aware discovery, behavior-based ranking, real-time messaging, notifications, and automated photo moderation in one mobile experience. [EVIDENCE: provided Pawgloo portfolio case study]

## 2. Platforms and live status

- **Primary platform:** Android mobile app. [EVIDENCE: provided Pawgloo portfolio case study]
- **App technology:** Flutter/Dart. [EVIDENCE: provided Pawgloo project notes]
- **Backend:** AWS-hosted services supporting the mobile application and realtime features. [EVIDENCE: provided Pawgloo portfolio case study]
- **Launch status:** The available material does not establish the current Play Store listing status. **[NEEDS FOUNDER]** [EVIDENCE: provided Pawgloo raw case-study notes]
- **Store URL:** **[NEEDS FOUNDER]**
- **iOS/web:** No iOS or web deliverable is documented in the supplied Phase 1 material. **[INFERRED]**

## 3. Exact stack

- **Mobile app:** Flutter (Dart), targeting Android. [EVIDENCE: provided Pawgloo project notes]
- **Backend/API:** Node.js + Express REST API. [EVIDENCE: provided Pawgloo raw case-study notes]
- **Cloud:** AWS. [EVIDENCE: provided Pawgloo portfolio case study]
- **Geospatial discovery:** AWS OpenSearch native geospatial queries were used for nearby-profile matching. [EVIDENCE: provided Pawgloo portfolio case study]
- **Realtime chat:** WebSockets for bi-directional messaging, with optimistic rendering and reconnect handling. [EVIDENCE: provided Pawgloo portfolio case study]
- **Notifications/background delivery:** Firebase Cloud Messaging (FCM) fallback for users whose app is backgrounded. [EVIDENCE: provided Pawgloo portfolio case study]
- **Background scoring jobs:** Android WorkManager used to batch behavior-score updates while reducing unnecessary foreground/battery work. [EVIDENCE: provided Pawgloo portfolio case study]
- **Photo moderation:** AWS Lambda-based automated moderation pipeline. [EVIDENCE: provided Pawgloo portfolio case study]
- **Payments:** A Razorpay integration is mentioned in the supplied secondary raw notes, but it is not mentioned in the primary Pawgloo portfolio case study. **[NEEDS FOUNDER — confirm before publishing]** [EVIDENCE: provided Pawgloo raw case-study notes]

## 4. Why this domain was hard

A local social product is harder than a normal profile-and-feed app because the product's usefulness depends on **who is relevant right now, where they are, and whether the interaction loop still works when connectivity is poor.** [INFERRED from the supplied feature set]

- **Location changes continuously.** The discovery feed has to react to updated GPS positions without leaving users looking at stale nearby profiles. [EVIDENCE: provided Pawgloo portfolio case study]
- **Social ranking cannot reward inactivity by accident.** A user who leaves the app open should not automatically outrank someone actively engaging. [EVIDENCE: provided Pawgloo portfolio case study]
- **Realtime communication must survive unreliable networks.** Mobile connections can disappear without warning, so chat needs optimistic UI, retries, and a background notification fallback. [EVIDENCE: provided Pawgloo portfolio case study]
- **User-generated images create an operational moderation problem.** Manually reviewing every uploaded photo does not scale cleanly, so the product needed an automated validation pipeline. [INFERRED from the AI moderation requirement]
- **Notifications become part of navigation.** A chat notification is not merely a message; tapping it has to restore the correct conversation even when the application was previously closed. [EVIDENCE: provided Pawgloo portfolio case study]

## 5. Before / after for the end user

### Before

Dog owners primarily had to use broad social networks, neighborhood communities, or generic messaging channels to find people with nearby dogs. Those tools were not designed around proximity, dog-specific discovery, or pet-focused interaction. **[NEEDS FOUNDER — confirm the exact customer story from the original brief]** [EVIDENCE: provided Pawgloo portfolio case study]

### After

- A dedicated place to discover dog owners and dogs nearby using a configurable location radius. [EVIDENCE: provided Pawgloo portfolio case study]
- Discovery becomes more relevant by incorporating genuine engagement signals rather than simply rewarding time spent with the app open. [EVIDENCE: provided Pawgloo portfolio case study]
- Users can move directly from discovery into realtime conversations, with messages rendering optimistically and reconnecting when the network drops. [EVIDENCE: provided Pawgloo portfolio case study]
- A photo is checked automatically as part of the upload flow, reducing the need for manual human moderation of basic dog/breed requirements. [EVIDENCE: provided Pawgloo portfolio case study]
- Tapping a chat notification can take the user straight into the relevant conversation instead of dumping them on the home screen first. [EVIDENCE: provided Pawgloo portfolio case study]

### Outcomes we should not claim without confirmation

- **[NEEDS FOUNDER]** Number of users, locations, or dogs in the network.
- **[NEEDS FOUNDER]** Engagement or retention improvements.
- **[NEEDS FOUNDER]** Reduction in moderation workload or moderation cost.
- **[NEEDS FOUNDER]** Message delivery success rate or reconnection rate.
- **[NEEDS FOUNDER]** Post-launch business or revenue results.

## 6. Scope delivered vs time and team

### Delivered

- Android mobile application. [EVIDENCE: provided Pawgloo portfolio case study]
- AWS cloud backend. [EVIDENCE: provided Pawgloo portfolio case study]
- Location-based discovery with configurable radius. [EVIDENCE: provided Pawgloo portfolio case study]
- Behavior-based discovery ranking using interaction signals. [EVIDENCE: provided Pawgloo portfolio case study]
- Realtime WebSocket chat. [EVIDENCE: provided Pawgloo portfolio case study]
- FCM fallback for backgrounded chat users. [EVIDENCE: provided Pawgloo portfolio case study]
- AI photo moderation using AWS Lambda. [EVIDENCE: provided Pawgloo portfolio case study]
- Deep-link routing from notification launches. [EVIDENCE: provided Pawgloo portfolio case study]
- Razorpay payment integration, **only if confirmed as part of Pawgloo rather than another project.** [NEEDS FOUNDER] [EVIDENCE: provided Pawgloo raw case-study notes]

### Timeline

- **6 months.** [EVIDENCE: provided Pawgloo portfolio case study]

### Team

- The material does not state the final project-team composition clearly enough to publish. **[NEEDS FOUNDER]** Confirm whether the build was solo, client-led with one developer, or a larger team effort. [EVIDENCE: provided Pawgloo raw case-study notes]

### Scope boundaries

- Screen count, API-route count, exact AWS service count, and exact release history are not available in the supplied material. **[NEEDS FOUNDER]** [EVIDENCE: provided Pawgloo raw case-study notes]

## 7. Key technical decisions

### Use geospatial search for location discovery

The nearby-user system was built around AWS OpenSearch native geospatial queries rather than treating location matching as a conventional database filter. [EVIDENCE: provided Pawgloo portfolio case study]

**Why it mattered:** nearby discovery is the core relevance mechanism of the product, so the backend needed to query location efficiently while allowing results to refresh as a user's position changed. [INFERRED]

### Separate active engagement from idle time

The ranking system tracked micro-interactions such as photos viewed and like-to-pass behavior, while excluding idle time from scoring. [EVIDENCE: provided Pawgloo portfolio case study]

**Why it mattered:** otherwise, simply leaving the app open could inflate engagement scores and make discovery less useful. [EVIDENCE: provided Pawgloo portfolio case study]

### Design chat as a failure-tolerant system

Messages render optimistically, the WebSocket reconnects with exponential backoff, and FCM provides a background fallback. [EVIDENCE: provided Pawgloo portfolio case study]

**Why it mattered:** the user experience does not have to wait for perfect network conditions before showing a message, and a temporary socket failure does not necessarily mean the user misses the conversation entirely. [INFERRED]

### Batch ranking work in the background

Behavior-score updates were batched through WorkManager rather than forcing every interaction to immediately trigger expensive background work. [EVIDENCE: provided Pawgloo portfolio case study]

**Why it mattered:** it reduced unnecessary foreground work and helped keep the mobile experience more battery-conscious. [INFERRED]

### Put photo validation in an automated backend pipeline

Uploaded photos were passed through an AWS Lambda that checked whether the image contained a dog and matched the listed breed. [EVIDENCE: provided Pawgloo portfolio case study]

**Why it mattered:** basic content rules could be enforced automatically before content entered the community rather than depending entirely on manual review. [INFERRED]

### Treat notification taps as deep navigation events

`MainActivity` parses the hidden FCM payload and routes directly to the relevant conversation when the application is opened from a notification. [EVIDENCE: provided Pawgloo portfolio case study]

**Why it mattered:** the notification itself becomes a shortcut into the user's intended task rather than simply a generic app launcher. [INFERRED]

## 8. Dead ends and deliberate “not built” choices

### Standard database filtering for nearby users was ruled out

The initial/simple approach of treating proximity like a normal database query was not suitable for the expected concurrency and freshness requirements; the final architecture used OpenSearch geospatial queries. [EVIDENCE: provided Pawgloo portfolio case study]

### Naive time-based engagement scoring was rejected

Counting app-open time would have rewarded idle sessions, so the ranking logic explicitly ignored idle time and focused on interaction signals. [EVIDENCE: provided Pawgloo portfolio case study]

### Plain WebSocket-only chat was insufficient

The final chat implementation added optimistic rendering, exponential reconnect logic, and FCM fallback rather than assuming a connection would remain healthy throughout a mobile session. [EVIDENCE: provided Pawgloo portfolio case study]

### Default notification launch behavior was not accepted

Android's normal notification launch path opened the app at the main screen, which was not appropriate for a chat-first workflow. The deep-link routing layer was added so the destination conversation could be restored directly. [EVIDENCE: provided Pawgloo portfolio case study]

### Full iOS/web expansion is not documented for Phase 1

The supplied material describes an Android-first delivery. Whether this was a deliberate validation/cost decision or simply the agreed scope is not recorded. **[NEEDS FOUNDER]** [EVIDENCE: provided Pawgloo raw case-study notes]

## 9. Before / after numbers from commits and code

The supplied Pawgloo material does not include the repository or commit history, so there are no verified code-derived latency, failure-rate, load, or concurrency numbers to quote. [EVIDENCE: provided Pawgloo raw case-study notes]

### Numbers explicitly stated in the supplied material

- **6 months** delivery timeline. [EVIDENCE: provided Pawgloo portfolio case study]
- **2G / unstable Wi-Fi / commute scenarios** were explicitly considered for chat reliability. [EVIDENCE: provided Pawgloo portfolio case study]
- **60+ questions** and a **15-day trial** do not belong to Pawgloo and are intentionally excluded here. [INFERRED from cross-project separation]

### Metrics to retrieve before publishing

- Nearby-search latency at representative load. **[NEEDS FOUNDER]**
- WebSocket reconnect success rate. **[NEEDS FOUNDER]**
- Message delivery/acknowledgement latency. **[NEEDS FOUNDER]**
- Moderation acceptance/rejection rates. **[NEEDS FOUNDER]**
- Number of users/dogs/locations served. **[NEEDS FOUNDER]**
- Crash-free session or crash-rate data. **[NEEDS FOUNDER]**

## 10. Hard problems solved

### Real-time location discovery

The backend had to repeatedly calculate relevant nearby profiles from changing GPS coordinates while keeping the discovery results current. OpenSearch geospatial queries were chosen specifically for that workload. [EVIDENCE: provided Pawgloo portfolio case study]

### Reliable chat on unreliable networks

The combination of optimistic rendering, exponential reconnects, and FCM fallback addressed three different failure modes: waiting for a network acknowledgement, losing the socket, and the app being backgrounded. [EVIDENCE: provided Pawgloo portfolio case study]

### Ranking that reflects interaction instead of screen-open time

The scoring system focused on real micro-interactions and explicitly excluded idle sessions, preventing passive app-open time from dominating discovery relevance. [EVIDENCE: provided Pawgloo portfolio case study]

### Automated photo verification

The moderation pipeline checked uploaded images for the presence of a dog and consistency with the listed breed, turning a manual content-review requirement into an automated backend step. [EVIDENCE: provided Pawgloo portfolio case study]

### Notification-to-conversation routing

Android notification payloads were parsed at app launch so a user could enter the exact conversation they were trying to reach, including when the app had previously been closed. [EVIDENCE: provided Pawgloo portfolio case study]

## 11. Screenshots and diagrams

Capture **3–6 screens** that communicate the core product loop rather than merely showing a collection of UI screens:

1. **Discovery / nearby dogs screen** — demonstrates the location-based product idea. **⚠️ Use test locations and dummy profiles; do not expose real user locations.** [INFERRED]
2. **Dog/profile detail screen** — shows what a user learns before deciding to connect. **⚠️ Remove real names, photos, or identifying information unless explicitly approved.** [INFERRED]
3. **Realtime chat screen** — demonstrates the core social interaction. **⚠️ Use synthetic conversation data.** [INFERRED]
4. **Photo upload / moderation state** — demonstrates that uploaded content is checked before/while entering the platform. **[NEEDS FOUNDER]** Exact screen/route is not known from the supplied material. [EVIDENCE: provided Pawgloo portfolio case study]
5. **Notification → conversation destination** — show the deep-link behavior if a clean test capture is possible. **[NEEDS FOUNDER]** [INFERRED]
6. **Onboarding/profile setup or radius preference** — useful secondary screen if it exists in the final build. **[NEEDS FOUNDER]** [INFERRED]

### Existing visual assets available from the old portfolio

- `/projects/pg_hero.webp` — hero image. [EVIDENCE: provided Pawgloo portfolio case study]
- `/projects/paw-about.webp` — product/about image. [EVIDENCE: provided Pawgloo portfolio case study]
- `/projects/p1.webp` — location-matching challenge mockup. [EVIDENCE: provided Pawgloo portfolio case study]
- `/projects/p4.webp` — realtime chat challenge mockup. [EVIDENCE: provided Pawgloo portfolio case study]
- `/projects/p5.webp` — behavior-scoring challenge mockup. [EVIDENCE: provided Pawgloo portfolio case study]

### Architecture diagram to draw

- **Flutter Android app** → **Node.js / Express API on AWS**. [EVIDENCE: provided Pawgloo portfolio case study and raw notes]
- API layer → **OpenSearch** for geospatial discovery. [EVIDENCE: provided Pawgloo portfolio case study]
- API / realtime layer → **WebSocket chat**. [EVIDENCE: provided Pawgloo portfolio case study]
- Background notifications → **FCM**. [EVIDENCE: provided Pawgloo portfolio case study]
- Engagement events → **WorkManager batch updates**. [EVIDENCE: provided Pawgloo portfolio case study]
- Photo uploads → **AWS Lambda moderation pipeline** → community acceptance/rejection state. [EVIDENCE: provided Pawgloo portfolio case study]
- **[NEEDS FOUNDER]** Exact AWS services surrounding storage, database, authentication, and deployment should be confirmed from the original backend before the diagram is published.

## 12. Reusable lessons

- **Build the core relevance system around the real product loop.** For a location-based social product, proximity is not a side feature; it is the product's primary retrieval problem. [EVIDENCE: provided Pawgloo portfolio case study]
- **Design realtime features for failure, not just the happy path.** Optimistic UI, reconnect logic, and notification fallback should be treated as one system. [EVIDENCE: provided Pawgloo portfolio case study]
- **Do not let easy-to-measure activity become the wrong product metric.** Idle time is easier to measure than genuine engagement, but the latter was what the discovery experience actually needed. [EVIDENCE: provided Pawgloo portfolio case study]
- **Automate repetitive trust/safety checks early when they are narrow enough to formalize.** A dog/breed validation rule was a good candidate for a server-side moderation pipeline. [EVIDENCE: provided Pawgloo portfolio case study]
- **Use notification payloads as application state, not just text.** A notification that knows which conversation to open can remove an entire navigation sequence. [EVIDENCE: provided Pawgloo portfolio case study]
- **Keep the architecture extensible when the client may continue the product.** The supplied notes describe a follow-on backend/admin engagement, but the exact project relationship should be confirmed before publishing it as a direct Pawgloo outcome. **[NEEDS FOUNDER]** [EVIDENCE: provided Pawgloo raw case-study notes]

## 13. Positioning suggestion

This project is strong portfolio evidence for **consumer social, local-community, marketplace-adjacent, and location-aware mobile products** where the hard part is realtime behavior rather than simple CRUD screens. [INFERRED from the supplied project scope]

It can also attract founders who need one builder to handle the intersection of **mobile UX, geospatial discovery, realtime infrastructure, notifications, and lightweight automated moderation**. [INFERRED from the supplied project scope]

## 14. Technical appendix

### Mobile

- Flutter/Dart Android application. [EVIDENCE: provided Pawgloo project notes]
- Notification entry point handled in `MainActivity` with payload parsing for deep linking. [EVIDENCE: provided Pawgloo portfolio case study]
- WorkManager used for batched background scoring updates. [EVIDENCE: provided Pawgloo portfolio case study]

### Backend

- Node.js + Express REST API hosted on AWS. [EVIDENCE: provided Pawgloo raw case-study notes]
- AWS OpenSearch used for location-aware discovery queries. [EVIDENCE: provided Pawgloo portfolio case study]
- AWS Lambda used in the image moderation pipeline. [EVIDENCE: provided Pawgloo portfolio case study]
- FCM used as a background notification fallback for chat. [EVIDENCE: provided Pawgloo portfolio case study]
- Exact database, storage, compute, auth, and deployment services: **[NEEDS FOUNDER — extract from backend repo before publishing]**

### Realtime messaging

- WebSocket-based bi-directional messaging. [EVIDENCE: provided Pawgloo portfolio case study]
- Optimistic message rendering. [EVIDENCE: provided Pawgloo portfolio case study]
- Exponential reconnect logic. [EVIDENCE: provided Pawgloo portfolio case study]
- FCM fallback when the app is backgrounded. [EVIDENCE: provided Pawgloo portfolio case study]

### Discovery/ranking

- Configurable nearby radius. [EVIDENCE: provided Pawgloo portfolio case study]
- Geospatial retrieval via OpenSearch. [EVIDENCE: provided Pawgloo portfolio case study]
- Ranking signals based on actual interactions such as photos viewed and like-to-pass behavior. [EVIDENCE: provided Pawgloo portfolio case study]
- Idle sessions excluded from scoring. [EVIDENCE: provided Pawgloo portfolio case study]
- Score updates batched via WorkManager. [EVIDENCE: provided Pawgloo portfolio case study]

### Moderation

- AWS Lambda receives uploaded photos for automated validation. [EVIDENCE: provided Pawgloo portfolio case study]
- Validation checks whether the image contains a dog and matches the listed breed. [EVIDENCE: provided Pawgloo portfolio case study]
- **[NEEDS FOUNDER]** Confirm the model/provider and whether moderation ran synchronously during upload or asynchronously after upload.

### Payments / follow-on admin work

- Razorpay and a later 15-admin-API engagement appear in the secondary raw notes but are not corroborated by the primary Pawgloo portfolio copy. **[NEEDS FOUNDER]** Do not publish these as Pawgloo facts until confirmed. [EVIDENCE: provided Pawgloo raw case-study notes]

## 15. Questions for the founder

1. Is Pawgloo live on the Play Store today? What is the current store URL? [NEEDS FOUNDER]
2. Was the delivered application Android-only, or were iOS/web builds also completed later? [NEEDS FOUNDER]
3. What was the actual project team structure over the 6 months? [NEEDS FOUNDER]
4. Which exact AWS services were used for compute, database, storage, authentication, and deployment? [NEEDS FOUNDER]
5. How many users/dogs/locations did the product reach, and can any of those numbers be published? [NEEDS FOUNDER]
6. Do we have real chat reliability, moderation accuracy, discovery latency, or crash metrics from production? [NEEDS FOUNDER]
7. Was Razorpay actually part of Pawgloo, or did that detail come from another project? [NEEDS FOUNDER]
8. Were the 15 admin APIs a direct Pawgloo follow-on? If yes, should they be presented as part of the same client engagement? [NEEDS FOUNDER]
9. Can the old screenshots be published with original branding, or should we recreate them with dummy names, images, and locations? [NEEDS FOUNDER]
10. Are there any features that were prototyped and removed before launch that would make a good "what we intentionally didn't build" story? [NEEDS FOUNDER]
