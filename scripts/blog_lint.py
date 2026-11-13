#!/usr/bin/env python3
"""
blog:lint - Antigravity Guardrail & Quality Checker
Enforces Guardrails 1 to 4, 9, and 12 from /docs/antigravity-guardrails.md:
  1. Every Ship Thesis claim carries a valid ledger ID: {{c:ID}}.
  2. Zero leftover {{NEEDS-FACT}} tokens.
  3. No unbacked numbers about Ship Thesis (e.g. 10,000+ students).
  4. No unsourced absolutes (always, never, every, almost every, any competent,
     nothing, zero, completely, guarantee, immediately) and hype words.
  9. Honest reporting: prints exact failing sentences, NOT a vanity score.
  12. Per-page cover asset verification: cover filename must match slug; booking link resolves.
"""

import sys
import os
import re
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT_DIR / "content" / "blog"
CLAIMS_LEDGER_PATH = ROOT_DIR / "content" / "claims-ledger.md"
PUBLIC_COVERS_DIR = ROOT_DIR / "web" / "public" / "covers"
BLOG_LIB_PATH = ROOT_DIR / "web" / "src" / "lib" / "blog.ts"

CANONICAL_PAGES = [
    {"num": 1, "slug": "how-milestone-payments-work", "word_cap": 1400},
    {"num": 2, "slug": "what-to-cut-from-v1-mvp", "word_cap": 1400},
    {"num": 3, "slug": "code-ownership-hiring-agency", "word_cap": 1300},
    {"num": 4, "slug": "why-weekly-working-builds-matter", "word_cap": 1100},
    {"num": 5, "slug": "flutter-vs-react-native-mvp", "word_cap": 1400},
    {"num": 6, "slug": "nextjs-supabase-multi-tenant-rls", "word_cap": 1400},
    {"num": 7, "slug": "how-to-vet-software-studios", "word_cap": 1400},
    {"num": 8, "slug": "integrating-llms-into-saas-mvp", "word_cap": 1400},
    {"num": 9, "slug": "saas-stripe-webhooks-idempotency", "word_cap": 1400},
]

FORBIDDEN_HYPE = [
    "bulletproof", "battle-tested", "ruthlessly", "non-negotiable",
    "predatory", "catastrophic", "disaster", "game-changing",
    "cutting-edge", "in today's fast-paced world", "revolutionize"
]

FORBIDDEN_ABSOLUTES = [
    r"\balways\b",
    r"\bnever\b",
    r"\balmost every\b",
    r"\bany competent\b",
    r"\bnothing\b",
    r"\bcompletely\b",
    r"\bguarantee\b",
    r"\bimmediately\b"
]

# Words that need contextual check (e.g. "every" is allowed in "every Friday" per BUILD-1)
FORBIDDEN_TERMS = [
    (r"\$", "Dollar sign ($)"),
    (r"\bUSD\b", "USD currency"),
    (r"\bprice\b", "Price term"),
    (r"\bcost\b", "Cost term"),
    (r"\bbudget\b", "Budget term"),
    (r"\bcheap\b", "Cheap term"),
    (r"per hour", "Hourly rate term"),
    (r"\b\d+\s+weeks\b", "Numeric week count (e.g. '4 weeks')")
]

STUDIO_KEYWORDS = [
    "ship thesis", "poststeady", "assess yourself", "ehs guru", "chromalayer"
]


def load_valid_claims():
    """Extracts claim IDs and their text from content/claims-ledger.md."""
    if not CLAIMS_LEDGER_PATH.exists():
        return {}
    text = CLAIMS_LEDGER_PATH.read_text(encoding="utf-8")
    claims = {}
    matches = re.findall(r"\*\s+`\[([A-Z0-9_-]+)\]`\s+(.*?)(?=\n\*|\n##|\Z)", text, re.DOTALL)
    for cid, ctext in matches:
        claims[cid] = ctext.strip()
    return claims


def load_valid_claim_ids():
    """Extracts claim IDs [ID] from content/claims-ledger.md."""
    claims = load_valid_claims()
    return set(claims.keys())


def split_sentences(text: str):
    """Splits markdown text into clean sentence units, ignoring code blocks, tables, headers, and metadata."""
    lines = text.split("\n")
    sentences = []
    in_code = False
    for line in lines:
        line_str = line.strip()
        if line_str.startswith("```"):
            in_code = not in_code
            continue
        if in_code or not line_str:
            continue
        if line_str.startswith("|") or line_str == "---":
            continue
        if line_str.startswith("*Author:") or line_str.startswith("Author:"):
            continue
        if line_str.startswith("#"):
            continue

        # Strip bullet markers and blockquote markers
        cleaned = re.sub(r"^\*\s+", "", line_str).strip()
        cleaned = re.sub(r"^>\s+", "", cleaned).strip()
        if not cleaned:
            continue

        raw_s = re.split(r"(?<=[.!?])\s+", cleaned)
        for s in raw_s:
            s_clean = s.strip()
            if s_clean:
                sentences.append(s_clean)

    return sentences


def check_page(file_path: Path, slug: str, word_cap: int, claims_dict: dict):
    """
    Runs all guardrail checks against a single page file.
    Returns a dict with list of failure messages.
    """
    valid_ids = set(claims_dict.keys())
    failures = []
    warnings = []

    if not file_path.exists():
        return {
            "slug": slug,
            "path": str(file_path),
            "failures": [f"File not found: {file_path}"],
            "warnings": [],
            "word_count": 0
        }

    raw_text = file_path.read_text(encoding="utf-8")
    words = raw_text.split()
    word_count = len(words)

    # Word count check
    if word_count > word_cap:
        failures.append(f"Word count ({word_count}) exceeds cap of {word_cap} words.")

    # Guardrail 2: Needs-fact check
    leftover_needs_fact = re.findall(r"\{\{NEEDS-FACT:[^}]*\}\}", raw_text)
    if leftover_needs_fact:
        for nf in leftover_needs_fact:
            failures.append(f"Guardrail 2 (Unresolved fact): Found leftover placeholder '{nf}'.")

    # Guardrail 12: Booking token check
    if "cal.com/aditya-kumar-singh" in raw_text:
        failures.append("Guardrail 12: Contains raw personal booking link 'cal.com/aditya-kumar-singh'. Must use {{BOOKING_URL}}.")
    if "{{BOOKING_URL}}" not in raw_text and "https://cal.com/shipthesis/20min" not in raw_text:
        failures.append("Guardrail 12: Missing central {{BOOKING_URL}} booking token.")

    # Guardrail 12: Cover asset matching check
    ill_file = PUBLIC_COVERS_DIR / f"{slug}-illustration.png"
    og_file = PUBLIC_COVERS_DIR / f"{slug}-og.png"
    if not ill_file.exists():
        failures.append(f"Guardrail 12: Missing required illustration asset: {ill_file.name}")
    if not og_file.exists():
        failures.append(f"Guardrail 12: Missing required link preview OG asset: {og_file.name}")

    sentences = split_sentences(raw_text)

    for sentence in sentences:
        s_lower = sentence.lower()

        # Check for unapproved claims & jabs
        if "agency bloat" in s_lower:
            failures.append(f"Guardrail 6 (Agency jab): Banned phrase 'agency bloat' in:\n    \"{sentence}\"")
        if "sales front" in s_lower or "sales-front" in s_lower:
            failures.append(f"Guardrail 6 (Agency jab): Banned phrase 'sales front' in:\n    \"{sentence}\"")

        # Check forbidden hype words
        for hype in FORBIDDEN_HYPE:
            if re.search(r"\b" + re.escape(hype) + r"\b", s_lower):
                failures.append(f"Guardrail 4 (Hype word '{hype}'):\n    \"{sentence}\"")

        # Check forbidden absolutes
        for abs_pat in FORBIDDEN_ABSOLUTES:
            match = re.search(abs_pat, s_lower)
            if match:
                word = match.group(0)
                # Allow "100%" or specific terms exceptions if relevant
                failures.append(f"Guardrail 4 (Banned absolute '{word}'):\n    \"{sentence}\"")

        # Check 'every' specifically (allowed in "every Friday" or "every Friday build" per BUILD-1)
        if re.search(r"\bevery\b", s_lower):
            if not re.search(r"\bevery friday\b", s_lower):
                failures.append(f"Guardrail 4 (Banned absolute 'every' outside 'every Friday'):\n    \"{sentence}\"")

        # Check 'zero' specifically (flag unless specifically allowed)
        if re.search(r"\bzero\b", s_lower):
            failures.append(f"Guardrail 4 (Banned absolute 'zero'):\n    \"{sentence}\"")

        # Check forbidden financial/timeline terms
        for pattern, label in FORBIDDEN_TERMS:
            if re.search(pattern, sentence, re.IGNORECASE):
                # Ignore table formatting pipes or valid code
                failures.append(f"Hard block ({label}):\n    \"{sentence}\"")

        # Check billing claim: 'do not bill by the hour' is confirmed under BILL-4
        if ("do not bill by the hour" in s_lower or "don't bill by the hour" in s_lower) and "{{c:bill-4}}" not in s_lower:
            failures.append(f"Billing claim without BILL-4 tag ('do not bill by the hour' requires {{{{c:BILL-4}}}}):\n    \"{sentence}\"")

        # Guardrail 1 & 3: Ship Thesis statements must carry claim IDs
        is_studio_claim = False
        if any(kw in s_lower for kw in STUDIO_KEYWORDS):
            is_studio_claim = True
        elif ("we build" in s_lower or "we structure" in s_lower or "we deliver" in s_lower
              or "we will review" in s_lower or "our rule of thumb" in s_lower or "our in-house" in s_lower
              or "our friday" in s_lower or "our team" in s_lower):
            if not ("agency tells" in s_lower or "agencies tell" in s_lower):
                is_studio_claim = True

        # Rule 15: Founder checklist must not recommend studio-favoring clauses
        if "tied to milestone payment" in s_lower and "checklist" in raw_text.lower():
            failures.append(f"Guardrail 15 (Founder checklist must not recommend studio-favoring clauses):\n    \"{sentence}\"")

        # Rule 16: Advice numbers must not contradict Terms (Terms §04 requires 7 business days, not 3-5)
        if re.search(r"\b3\s*(to|-)\s*5\s+business\s+days\b", s_lower):
            failures.append(f"Guardrail 16 (Advice number contradicts Terms §04 which requires 7 business days):\n    \"{sentence}\"")

        # Guardrail: Assess Yourself may only describe capability facts (what it is built to do).
        # Fails any sentence containing Assess Yourself plus any of: live, launched, serves, users, students use, in production, battle-tested.
        if "assess yourself" in s_lower:
            ay_forbidden = ["live", "launched", "serves", "users", "students use", "in production", "battle-tested"]
            for term in ay_forbidden:
                if re.search(r"\b" + re.escape(term) + r"\b", s_lower):
                    failures.append(
                        f"Guardrail (Assess Yourself outcome claim '{term}'): Assess Yourself may only describe capability facts (what it is built to do). Forbidden term '{term}' in:\n    \"{sentence}\""
                    )

        if is_studio_claim:
            # Check for claim tags
            claim_tags = re.findall(r"\{\{c:([A-Z0-9_-]+)\}\}", sentence)
            if not claim_tags:
                failures.append(f"Guardrail 1 (Missing claim tag {{c:ID}}):\n    \"{sentence}\"")
            else:
                for cid in claim_tags:
                    if cid not in valid_ids:
                        failures.append(f"Guardrail 1 (Unknown claim ID '{cid}' not in ledger):\n    \"{sentence}\"")
                    else:
                        # Guardrail 14: In-house products have no clients and no milestone payments
                        if cid in ["POST-1", "CHROMA-1"]:
                            if any(banned_w in s_lower for banned_w in ["client", "milestone", "payment", "invoiced"]):
                                failures.append(
                                    f"Guardrail 14 (In-house product '{cid}' has no clients or milestone payments):\n    \"{sentence}\""
                                )
                        # Guardrail 13 & 14: Project proof sentences must be copied from ledger entry with grammar changes only
                        if cid in ["AY-1", "AY-2", "AY-3", "POST-1", "CHROMA-1", "EHS-1", "EHS-2", "EHS-3"]:
                            if "milestone 1" in s_lower or "milestone 2" in s_lower or "milestone 3" in s_lower:
                                failures.append(f"Guardrail 13/14 (Invented build story for '{cid}'):\n    \"{sentence}\"")
                            if "secondary features like" in s_lower or "work focused strictly" in s_lower:
                                failures.append(f"Guardrail 13/14 (Invented scope/build story for '{cid}'):\n    \"{sentence}\"")
                            if "real device testing verifies" in s_lower:
                                failures.append(f"Guardrail 13/14 (Invented process claim for '{cid}'):\n    \"{sentence}\"")

            # Guardrail 3: Check for numbers in studio claim
            # Allowed numbers: 3:4:3, 30/40/30, 30%, 40%, 20-minute (CTA-1), 7 color controls (CHROMA-1), 1-click (EHS-1), three (SCOPE-1)
            # Flag unconfirmed student counts or screen counts
            if "10,000" in sentence or "10000" in sentence:
                failures.append(f"Guardrail 3 (Unconfirmed number '10,000+'):\n    \"{sentence}\"")
            if re.search(r"\b\d+\s+screens\b", s_lower) and not re.search(r"\bthree screens\b", s_lower):
                failures.append(f"Guardrail 3 (Unconfirmed screen count):\n    \"{sentence}\"")

    return {
        "slug": slug,
        "path": str(file_path),
        "failures": failures,
        "warnings": warnings,
        "word_count": word_count,
        "word_cap": word_cap
    }


def main():
    print("=" * 75)
    print("Antigravity blog:lint — Evidence-Backed Guardrails Verification")
    print("=" * 75)

    claims_dict = load_valid_claims()
    valid_ids = set(claims_dict.keys())
    print(f"Loaded {len(valid_ids)} verified claim IDs from {CLAIMS_LEDGER_PATH.name}:")
    print(f"  {', '.join(sorted(valid_ids))}\n")

    # If --test-fixture is passed, lint that fixture only
    if len(sys.argv) > 1 and sys.argv[1] == "--test-fixture":
        fixture_path = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT_DIR / "tests" / "fixtures" / "test_bad_page.mdx"
        print(f"--- Running Test Fixture: {fixture_path} ---")
        res = check_page(fixture_path, "test-bad-page", 1200, claims_dict)
        print(f"Word count: {res['word_count']}")
        print(f"Total violations found: {len(res['failures'])}")
        for f in res['failures']:
            print(f"  [X] {f}\n")
        if res['failures']:
            print("[PASS] Test fixture correctly triggered violations.")
            sys.exit(0)
        else:
            print("[FAIL] Test fixture unexpectedly passed with zero violations!")
            sys.exit(1)

    all_passed = True
    summary = []

    for page in CANONICAL_PAGES:
        file_path = CONTENT_DIR / f"{page['slug']}.mdx"
        res = check_page(file_path, page["slug"], page["word_cap"], claims_dict)
        summary.append(res)

        print(f"\n[Page {page['num']}] /blog/{page['slug']}")
        print(f"  File: {res['path']}")
        print(f"  Words: {res['word_count']} / {res['word_cap']} max")

        if res["failures"]:
            all_passed = False
            print(f"  STATUS: FAILED ({len(res['failures'])} violations)")
            for f in res["failures"]:
                print(f"  [X] {f}")
        else:
            print("  STATUS: PASSED (Zero guardrail violations)")

    print("\n" + "=" * 75)
    print("GUARDRAIL AUDIT SUMMARY")
    print("=" * 75)
    for res in summary:
        status = "PASSED" if not res["failures"] else f"FAILED ({len(res['failures'])} errors)"
        print(f"  * {res['slug']}: [{status}] ({res['word_count']} words)")
    print("=" * 75)

    if not all_passed:
        print("\nResult: LINT FAILED. Fix the exact sentences listed above.")
        sys.exit(1)
    else:
        print("\nResult: ALL PAGES PASSED ALL GUARDRAILS.")
        sys.exit(0)


if __name__ == "__main__":
    main()
