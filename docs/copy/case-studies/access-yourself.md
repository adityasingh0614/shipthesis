# Access Yourself

**Page accent:** `#283593` (darker shade `#1C2B7A`) (project colour; use it as this page's primary accent, buttons stay green). See `docs/design/home-brief.md` §2.

An exam-prep app that takes students from finding the right government exam to sitting a timed paper.

**Client: Aptellic · Mobile app · Flutter, Node.js/Express, Firebase · 3–4 weeks · Delivered to client, launching soon**

## The challenge

Students preparing for exams like UPSC, SSC and MPSC were gathering exam details, past papers and practice tests from many different places. Our client wanted one app that brings it all together. A large bank of questions, kept in spreadsheets, also had to go into the app without being typed in again by hand.

## What we built

- Exam pages with the details students need before choosing a paper.
- A full test engine: timed papers, mark-for-review, submission, instant analysis and score history.
- Previous-year papers, and live tests that open and close at set times.
- A 15-day free trial and subscription plans, with payments through Razorpay.
- A bulk upload that turns the client's Excel question files into ready-to-use tests.

## The hard part we solved

- **Tests that survive interruptions.** Some papers run to 60+ questions against the clock. If the phone closes the app mid-paper, the student reopens it and carries on, with their answers, review marks and time kept.
- **Messy spreadsheets in, clean questions out.** The question files came in two layouts, with Marathi numerals and image-based answer options. The upload handles all of it and flags any row that needs a fix without stopping the rest.
- **One source of truth for subscriptions.** Trial and plan status comes from the server, so every student always sees the right plan.

## Result

- Delivered to the client in 3–4 weeks.
- New exams go live from a single Excel upload, instead of being entered by hand.
- Launching soon.
- [RESULT TBD: student numbers, questions loaded, store link once live]

## Screens

1. Exam detail page. ⚠ Aptellic branding (name approved; confirm the logo can be used too).
2. Test screen with timer and mark-for-review. ⚠ Real question-bank content.
3. Results and analysis. ⚠ Real student data if taken from a live account.
4. Free trial and plan screen. ⚠ Client branding and pricing.

## CTA

**Heading:** Want an app built like this?
> Start with a 30-minute call about your idea.

**Button:** Book a Discovery Call
**Links:** Next: Safety training platform → *(/work/safety-training-platform)* · Back to all work → *(/work)*
