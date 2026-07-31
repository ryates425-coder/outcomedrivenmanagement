# Repository-wide Decision Center rename

Mission Control is no longer a website concept. Decision Center is the leadership system in the published architecture.

## Audit before merge

Run:

```bash
node scripts/check-legacy-terms.mjs
```

The check scans public HTML, CSS, JavaScript, and Markdown for the legacy term. The source framework file is not part of this repository package and is not scanned.

## Architecture

```text
Learning-Centered Organizations
        ↓
Outcome-Driven Management
        ↓
Outcome-Driven Engineering
        ↓
Decision Center
```
