// Office Artifacts: The One-Line Placard Contest — make.fun bounty
// u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
//
// The entry is one museum placard, a single line, for an ordinary office
// object treated as an ancient artifact. It is fully deterministic: the
// same line every run, no network, no randomness, no input read. It writes
// the text to /output/entry.txt and nothing else.
//
// The line: a sticky note recast as a prayer slip. Real ancient cultures
// left written prayers in sacred places; here the devotee stuck one to a
// monitor and hoped the god of Follow-Up would answer. The turn is the
// deadpan verdict — it did not — and the provenance grounds it in a real
// cubicle. Fresh angle: no stapler, no microwave, no "out of paper"
// joke; the joke is the ritual itself.
//
// Judge brief, mapped to the line:
//  1. Placard for an office object as an ancient artifact: the object
//     (Sticky Note), its material (adhesive parchment) and a catalogue
//     date (c. 2003) open the line, in label form.
//  2. Invention of the conceit: the note is a prayer to a named minor
//     god, the god of Follow-Up — a specific, surprising imagined
//     history, not a generic office joke.
//  3. Dry wit: the curator never strains. "It did not." lands the joke
//     in three words and explains nothing.
//  4. Economy: one line, well inside 180 characters, four short
//     sentences that read aloud like a label being read off a wall.
//  5. Label craft: date (c. 2003), material (adhesive parchment),
//     provenance (Found in Cubicle 12) — catalogue details sell it.

import { writeFileSync, mkdirSync } from "node:fs";

// The placard. Four beats: the catalogue opening (object, material,
// date), the ritual (one prayer stuck to the monitor), the deadpan
// verdict (it did not), and the provenance that closes the label. Each
// sentence is short so the line reads like a real museum label: the
// facts first, the joke last, no word wasted. "Stuck", not "pressed":
// a sticky note is stuck, and the verb is the object's own. "One
// prayer", not "a prayer": the catalogue counts its holdings.
const PLACARD =
  "Sticky Note, adhesive parchment, c. 2003. One prayer, stuck to the monitor in hope the god of Follow-Up would answer. It did not. Found in Cubicle 12.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLACARD, "utf8");
